import AllBooks from '../../components/books/AllBooks';
import { getAllBooks } from '../../api-utils';
import { useRouter } from 'next/router';

function FilteredBooksPage(props) {
  const router = useRouter();
  console.log(router.query.slug[1]);
  const { books } = props;

  console.log(books.map((book) => book.format.toLowerCase()));
  return <AllBooks items={books} />;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const linkPaths = params.slug;
  const genre = linkPaths[0];
  const format = linkPaths[1];

  const books = await getAllBooks();

  const filteredBooks = books.filter(
    (book) => book.genre === genre && book.format.toLowerCase().includes(format)
  );

  return {
    props: {
      books: filteredBooks,
    },
  };
}

export default FilteredBooksPage;
