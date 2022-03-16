import { Fragment, useState } from 'react';
import AllBooks from '../components/books/AllBooks';
import SearchBooks from '../components/books/SearchBooks';

import { getAllBooks } from '../api-utils';
import { filterGenre } from '../api-utils';

const HomePage = (props) => {
  const [books, setBooks] = useState(props.books);

  const filterGenreHandler = async (genre) => {
    const filteredBooks = await filterGenre(genre);
    setBooks(filteredBooks);
  };

  return (
    <Fragment>
      <SearchBooks onFilter={filterGenreHandler} />
      <AllBooks items={books} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const allBooks = await getAllBooks();

  return {
    props: {
      books: allBooks,
    },
  };
}

export default HomePage;
