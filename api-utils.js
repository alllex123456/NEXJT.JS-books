export const getAllBooks = async () => {
  const response = await fetch(
    'https://learning-post-34cbd-default-rtdb.europe-west1.firebasedatabase.app/books.json'
  );
  const data = await response.json();

  const booksArr = [];

  for (const key in data) {
    booksArr.push({
      id: key,
      title: data[key].title,
      author: data[key].author,
      genre: data[key].genre,
      picture: data[key].picture,
      format: data[key].format,
      publishedDate: data[key].publishedDate,
      isFeatured: data[key].isFeatured,
      description: data[key].description,
    });
  }

  return booksArr;
};

export const filterGenre = async (genre) => {
  const books = await getAllBooks();
  return books.filter((book) => book.genre === genre);
};

export const getFeaturedBooks = async () => {
  const books = await getAllBooks();
  return books.filter((book) => book.isFeatured);
};

export const getBookById = async (id) => {
  const books = await getAllBooks();
  return books.find((book) => book.id === id);
};
