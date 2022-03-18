import { clientConnect, insertDocument, retrieveDocument } from './db-utils';

import { MongoClient } from 'mongodb';

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

      res.status(201).json({ message: 'Comment submitted' });
      client.close();
    } catch (error) {
      res.status(500).json({
        message: 'Connected to the database, but could not submit the data',
      });
      client.close();
    }
  }

  if (req.method === 'GET') {
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://alex:andaluzia231178@cluster0.vndt4.mongodb.net/books?retryWrites=true&w=majority'
      );
      const db = client.db();
      const data = await db
        .collection('comments')
        .find({ commentIdentifier: req.query.commentId })
        .toArray();
      res.status(201).json({ comments: data });
      client.close();
    } catch (error) {
      res.status(500).json({
        message: 'Database contacted, but could not fetch the comments',
      });
      client.close();
    }
  }
};

export default handler;
