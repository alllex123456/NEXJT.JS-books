import AdminPanel from '../../components/admin/AdminPanel';
import { getAllBooks } from '../../api-utils';

const AdminPanelPage = (props) => {
  const { items } = props;
  console.log(items);
  return <AdminPanel items={items} />;
};

export async function getStaticProps() {
  const allBooks = await getAllBooks();

  return {
    props: {
      items: allBooks,
    },
  };
}

export default AdminPanelPage;
