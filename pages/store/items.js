import { createContext, useState, useEffect } from 'react';

const ItemsContext = createContext({
  items: [],
  setItems: () => {},
});

export const ItemsContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  const setBooksHandler = (data) => {
    setBooks(data);
  };

  return (
    <ItemsContext.Provider
      value={{
        items: books,
        setItems: setBooksHandler,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
