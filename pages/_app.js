import '../styles/globals.css';

import Layout from '../components/Layout/Layout';

import { AdminContextProvider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <AdminContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AdminContextProvider>
  );
}

export default MyApp;
