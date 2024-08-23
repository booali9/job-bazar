import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL || 'your-mongodb-uri';

let client: MongoClient;

export default async function connect() {
  if (client) {
    return client;
  }
  client = new MongoClient(uri);
  await client.connect();
  return client;
}
