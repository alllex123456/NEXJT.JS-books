import { clientConnect, retrieveDocument } from './db-utils';

const handler = async (req, res) => {
  let client;
  try {
    client = await clientConnect();
  } catch (error) {
    res.status(500).json({ message: 'Could not connect to the database' });
  }

  try {
    return await retrieveDocument(client, 'items');
  } catch (error) {
    res
      .status(5500)
      .json({ message: 'Database contacted, but could not fetch the data' });
  }
};

export default handler;
