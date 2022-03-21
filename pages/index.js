import { Fragment, useContext } from 'react';
import Head from 'next/head';
import AllBooks from '../components/books/AllBooks';
import SearchBooks from '../components/books/SearchBooks';
import Newsletter from '../components/inputs/Newsletter';
import FeedbackContext from './store/feedback';
import { clientConnect, retrieveDocument } from './api/db-utils';

const HomePage = (props) => {
  const { showFeedback } = useContext(FeedbackContext);
  const { feedback } = useContext(FeedbackContext);

  const { books } = props;

  const newSubscriptionHandler = (email) => {
    showFeedback({
      title: 'Please wait...',
      message: 'We are registering your email for future newsletters',
      status: 'pending',
    });
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((data) => {
          throw new Error(data.message);
        });
      })
      .then((data) => {
        showFeedback({
          title: data.message,
          message: 'You have successfully registered for future newsletters',
          status: 'success',
        });
      })
      .catch((error) => {
        showFeedback({
          title: 'Error',
          message: 'Registration failed because: ' + error.message,
          status: 'error',
        });
      });
  };

  console.log(feedback);

  return (
    <Fragment>
      <Head>
        <title>Books Store | Main Page</title>
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
