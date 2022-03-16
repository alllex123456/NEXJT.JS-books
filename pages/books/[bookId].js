import { useRouter } from 'next/router';
import { getBookById } from '../../api-utils';
import { getAllBooks } from '../../api-utils';
import BookDetails from '../../components/books/BookDetails';

const BookPage = (props) => {
  return <BookDetails picture={props.book.picture} title={props.book.title} />;
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
