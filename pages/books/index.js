import Head from 'next/head';
import AllBooks from '../../components/books/AllBooks';
import { getFeaturedBooks } from '../../api-utils';
import { clientConnect, retrieveDocument } from '../api/db-utils';
import { Fragment } from 'react';

const FeaturedBooksPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Books Store | Featured Books</title>
      </Head>
      <AllBooks items={props.featuredBooks} />;
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
  const featuredBooks = getFeaturedBooks(allBooks);

  return {
    props: {
      featuredBooks: featuredBooks,
    },
  };
}

export default FeaturedBooksPage;
