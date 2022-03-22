import Head from 'next/dist/shared/lib/head';
import { Fragment, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { clientConnect, retrieveDocument } from '../api/db-utils';
import { getBookById } from '../../api-utils';

import FeedbackContext from '../store/feedback';
import BookDetails from '../../components/books/BookDetails';
import NewComment from '../../components/inputs/NewComment';
import Comments from '../../components/inputs/Comments';

const BookPage = (props) => {
  const { showFeedback } = useContext(FeedbackContext);
  const { book } = props;
  const router = useRouter();
  const { bookId } = router.query;

  const newCommentHandler = (name, text) => {
    showFeedback({
      title: 'Publishing...',
      message: 'Please wait while we publish your comment',
      status: 'pending',
    });
    fetch(`/api/${bookId}`, {
      method: 'POST',
      body: JSON.stringify({
        commentIdentifier: bookId,
        name: name,
        text: text,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((error) => error.message);
      })
      .then((data) =>
        showFeedback({
          title: 'Success!',
          message: 'Your comment has been published',
          status: 'success',
        })
      )
      .catch((error) =>
        showFeedback({
          title: 'Error',
          message: error.message || 'We encountered a problem',
          status: 'error',
        })
      );
  };

  return (
    <Fragment>
      <Head>
        <title>Books Store | {book.title}</title>
      </Head>
      <BookDetails
        picture={book.picture}
        title={book.title}
        description={book.description}
        author={book.author}
      />
      <NewComment onSubmitComment={newCommentHandler} />
      <Comments commentId={bookId} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await clientConnect();
  const retrievedBooks = await retrieveDocument(client, 'items');
  const allBooks = retrievedBooks.map((book) => ({
    id: book._id.toString(),
    title: book.title,
    author: book.author,
    genre: book.genre,
    picture: book.picture,
    format: book.format,
    publishedDate: book.publishedDate,
    isFeatured: book.isFeatured,
    description: book.description,
  }));
  const idPaths = allBooks.map((book) => ({
    params: {
      bookId: book.id,
    },
  }));
  return {
    paths: idPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const client = await clientConnect();
  const retrievedBooks = await retrieveDocument(client, 'items');
  const allBooks = retrievedBooks.map((book) => ({
    id: book._id.toString(),
    title: book.title,
    author: book.author,
    genre: book.genre,
    picture: book.picture,
    format: book.format,
    publishedDate: book.publishedDate,
    isFeatured: book.isFeatured,
    description: book.description,
  }));

  const { bookId } = context.params;
  const book = getBookById(allBooks, bookId);

  return {
    props: {
      book: book,
    },
  };
}

export default BookPage;
