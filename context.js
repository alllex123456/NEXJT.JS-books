import { createContext, useState } from 'react';
import { useEffect } from 'react';

const AdminContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AdminContextProvider = (props) => {
  let initialToken;
  useEffect(() => {
    const retrieveStoredToken = () => {
      const storedToken = localStorage.getItem('token');

      return {
        token: storedToken,
      };
    };
    const tokenData = retrieveStoredToken();

    if (tokenData) {
      initialToken = tokenData.token;
    }
  }, []);
  console.log(initialToken);
  const [token, setToken] = useState(initialToken);

  const loggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  return (
    <AdminContext.Provider
      value={{
        token: token,
        isLoggedIn: loggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
