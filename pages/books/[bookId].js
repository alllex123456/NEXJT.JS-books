import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { clientConnect, retrieveDocument } from '../api/db-utils';
import { getBookById } from '../../api-utils';
import BookDetails from '../../components/books/BookDetails';
import NewComment from '../../components/inputs/NewComment';
import Comments from '../../components/inputs/Comments';

const BookPage = (props) => {
  const { book } = props;
  const router = useRouter();
  const { bookId } = router.query;

  const newCommentHandler = (name, text) => {
    fetch(`/api/${bookId}`, {
      method: 'POST',
      body: JSON.stringify({
        commentIdentifier: bookId,
        name: name,
        text: text,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };

  return (
    <Fragment>
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
