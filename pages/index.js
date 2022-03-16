import { Fragment, useState } from 'react';
import AllBooks from '../components/books/AllBooks';
import SearchBooks from '../components/books/SearchBooks';

import { filterFormat, getAllBooks } from '../api-utils';
import { filterGenre } from '../api-utils';

const HomePage = (props) => {
  const [books, setBooks] = useState(props.books);

  const filterGenreHandler = async (genre) => {
    const filteredBooks = await filterGenre(genre);
    setBooks(filteredBooks);
  };

  const filterFormatHandler = async (format) => {
    const filteredBooks = await filterFormat(format);
    console.log(filteredBooks);
    setBooks(filteredBooks);
  };

  return (
    <Fragment>
      <SearchBooks
        onFilterGenre={filterGenreHandler}
        onFilterFormat={filterFormatHandler}
      />
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
