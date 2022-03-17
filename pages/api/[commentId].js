import { clientConnect, insertDocument, retrieveDocument } from './db-utils';

const handler = async (req, res) => {
  let client;

  try {
    client = await clientConnect();
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Could not establish a connection to the database' });
  }

  if (req.method === 'POST') {
    const { name, text } = req.body;

    if (name === '' || text === '') {
      res.status(201).json({ message: 'Empty input data' });
      return;
    }

    const enteredComment = {
      commentIdentifier: req.body.commentIdentifier,
      name,
      text,
    };

    try {
      await insertDocument(client, 'comments', enteredComment);
      client.close();
      res.status(201).json({ message: 'Comment submitted' });
    } catch (error) {
      res.status(500).json({
        message: 'Connected to the database, but could not submit the data',
      });
    }
  }

  if (req.method === 'GET') {
    try {
      await retrieveDocument(client, 'comments');
      res.status(201).json({
        message: 'Comments successfully fetched',
      });
    } catch (error) {
      res.status(500).json({
        message: 'Database contacted, but could not fetch the comments',
      });
    }
  }
};

export default handler;
