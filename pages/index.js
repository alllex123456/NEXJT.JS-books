import AllBooks from '../components/books/AllBooks';
import DUMMY_BOOKS from '../dummy-books';

const HomePage = () => {
  const books = DUMMY_BOOKS;

  return <AllBooks items={DUMMY_BOOKS} />;
};

export default HomePage;
