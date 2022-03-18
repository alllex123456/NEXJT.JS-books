import AllBooks from '../../components/books/AllBooks';
import { clientConnect, retrieveDocument } from '../api/db-utils';

function FilteredBooksPage(props) {
  const { books } = props;

  return <AllBooks items={books} />;
}

export async function getServerSideProps(context) {
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

  const { params } = context;
  const linkPaths = params.slug;
  const genre = linkPaths[0];
  const format = linkPaths[1];

  const filteredBooks = allBooks.filter(
    (book) => book.genre === genre && book.format.toLowerCase().includes(format)
  );

  return {
    props: {
      books: filteredBooks,
    },
  };
}

export default FilteredBooksPage;
