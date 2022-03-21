import { clientConnect, insertDocument, retrieveDocument } from './db-utils';

const handler = async (req, res) => {
  let client;

  try {
    client = await clientConnect();
  } catch (error) {
    res.status(500).json({ message: 'Could not contact the database' });
    client.close();
  }

  if (req.method === 'POST') {
    const email = req.body.email;

    const subscriptions = await retrieveDocument(client, 'subscriptions');
    subscriptions.map((subscriber) => {
      if (subscriber.email === email) {
        res
          .status(500)
          .json({ message: `You are already subscribed (${email})` });
        client.close();
      }
    });

    try {
      await insertDocument(client, 'subscriptions', { email: email });
      res.status(201).json({ message: 'Successfully subscribed' });
      client.close();
    } catch (error) {
      res.status(500).json({
        message: 'Database contacted, but could not submit data',
      });
      client.close();
    }
  }
};

export default handler;
