import '../styles/globals.css';

import Head from 'next/dist/shared/lib/head';
import Layout from '../components/Layout/Layout';

import { FeedbackContextProvider } from './store/feedback';
import { AdminContextProvider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <FeedbackContextProvider>
      <AdminContextProvider>
        <Layout>
          <Head>
            <meta
              name="description"
              content="An online book store for your everyday reading needs"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AdminContextProvider>
    </FeedbackContextProvider>
  );
}

export default MyApp;
