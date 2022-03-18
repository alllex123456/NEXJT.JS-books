import { Fragment, useState } from 'react';
import AllBooks from '../components/books/AllBooks';
import SearchBooks from '../components/books/SearchBooks';

import { filterFormat, getAllBooks } from '../api-utils';
import { filterGenre } from '../api-utils';

import { clientConnect, retrieveDocument } from './api/db-utils';

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
  // const allBooks = await getAllBooks();

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
  console.log(allBooks);

  return {
    props: {
      books: allBooks,
    },
  };
}

export default HomePage;
