import AllBooks from '../../components/books/AllBooks';
import { getFeaturedBooks } from '../../dummy-books';

const FeaturedBooksPage = () => {
  const books = getFeaturedBooks();

  return <AllBooks items={books} />;
};

export default FeaturedBooksPage;
