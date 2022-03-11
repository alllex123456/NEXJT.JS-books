import { useRouter } from 'next/router';
import { getBook } from '../../dummy-books';
import BookDetails from '../../components/books/BookDetails';

const BookPage = () => {
  const router = useRouter();
  const bookId = router.query.bookId;

  const [book] = getBook(bookId);

  return <BookDetails picture={book.picture} title={book.title} />;
};

export default BookPage;
