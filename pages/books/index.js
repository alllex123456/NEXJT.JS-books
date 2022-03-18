import AllBooks from '../../components/books/AllBooks';
import { getFeaturedBooks } from '../../api-utils';
import { clientConnect, retrieveDocument } from '../api/db-utils';

const FeaturedBooksPage = (props) => {
  return <AllBooks items={props.featuredBooks} />;
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
