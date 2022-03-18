export const filterGenre = (books, genre) => {
  return books.filter((book) => book.genre === genre);
};

export const filterFormat = (books, format) => {
  return books.filter((book) =>
    book.format.trim().toLowerCase().includes(format)
  );
};

export const getFeaturedBooks = (books) => {
  return books.filter((book) => book.isFeatured);
};

export const getBookById = (books, id) => {
  return books.find((book) => book.id === id);
};
