import AllBooks from '../../components/books/AllBooks';
import { getFeaturedBooks } from '../../api-utils';

const FeaturedBooksPage = (props) => {
  return <AllBooks items={props.featuredBooks} />;
};

export async function getStaticProps() {
  const featuredBooks = await getFeaturedBooks();

  return {
    props: {
      featuredBooks: featuredBooks,
    },
  };
}

export default FeaturedBooksPage;
