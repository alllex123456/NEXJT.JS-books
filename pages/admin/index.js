import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import Login from '../../components/admin/Login';

import { useContext } from 'react';
import AdminContext from '../../context';

const AdminLoginPage = (props) => {
  const router = useRouter();
  const adminCtx = useContext(AdminContext);

  const fetchSignInHandler = async (email, password) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnH-fn5-vxICHYbKOG4u0d87D_7B-LbkE',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      adminCtx.login(data.idToken);
      router.replace('/admin/panel');
    }
    if (!response.ok) {
      alert('Username or Password incorrect');
    }
  };

  return (
    <Fragment>
      <Head>
        <title>BooksLibrary Admin Login</title>
      </Head>
      <Login onSignIn={fetchSignInHandler} />
    </Fragment>
  );
};

export default AdminLoginPage;
