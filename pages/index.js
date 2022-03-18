import { Fragment } from 'react';
import AllBooks from '../components/books/AllBooks';
import SearchBooks from '../components/books/SearchBooks';

import { clientConnect, retrieveDocument } from './api/db-utils';

const HomePage = (props) => {
  const { books } = props;

  return (
    <Fragment>
      <SearchBooks />
      <AllBooks items={books} />
    </Fragment>
  );
};

export async function getStaticProps() {
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

  return {
    props: {
      books: allBooks,
    },
  };
}

export default HomePage;
