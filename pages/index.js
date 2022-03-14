import { Fragment, useState } from 'react';
import AllBooks from '../components/books/AllBooks';
import SearchBooks from '../components/books/SearchBooks';
import DUMMY_BOOKS from '../dummy-books';
import { filterGenre } from '../dummy-books';

const HomePage = () => {
  const [books, setBooks] = useState(DUMMY_BOOKS);

  const filterGenreHandler = (genre) => {
    setBooks(filterGenre(genre));
  };

  return (
    <Fragment>
      <SearchBooks onFilter={filterGenreHandler} />
      <AllBooks items={books} />
    </Fragment>
  );
};

export default HomePage;
