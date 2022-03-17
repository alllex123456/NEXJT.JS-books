import { Fragment } from 'react/cjs/react.production.min';
import { getBookById } from '../../api-utils';
import { getAllBooks } from '../../api-utils';
import BookDetails from '../../components/books/BookDetails';
import NewComment from '../../components/inputs/NewComment';
import Comments from '../../components/inputs/Comments';
import { useRouter } from 'next/router';

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
      <Comments />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const allBooks = await getAllBooks();
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
  const { bookId } = context.params;
  const book = await getBookById(bookId);

  return {
    props: {
      book: book,
    },
  };
}

export default BookPage;
