import { MongoClient } from 'mongodb';

export const clientConnect = async () => {
  return await MongoClient.connect(
    'mongodb+srv://alex:andaluzia231178@cluster0.vndt4.mongodb.net/books?retryWrites=true&w=majority'
  );
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  return await db.collection(collection).insertOne(document);
};

export const retrieveDocument = async (client, collection) => {
  const db = client.db();
  return await db.collection(collection).find().sort({ _id: -1 }).toArray();
};
