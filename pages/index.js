import { Fragment } from 'react';
import Head from 'next/head';
import AllBooks from '../components/books/AllBooks';
import SearchBooks from '../components/books/SearchBooks';
import Newsletter from '../components/inputs/Newsletter';

import { clientConnect, retrieveDocument } from './api/db-utils';

const HomePage = (props) => {
  const { books } = props;

  const newSubscriptionHandler = (email) => {
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  };

  return (
    <Fragment>
      <Head>
        <title>Books Store</title>
      </Head>
      <SearchBooks />
      <AllBooks items={books} />
      <Newsletter onSubscribe={newSubscriptionHandler} />
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
