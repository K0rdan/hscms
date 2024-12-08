import { MongoClient, type MongoClientOptions } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

function getClientPromise() {
  const uri = process.env.MONGODB_URI ?? '';
  const options: MongoClientOptions = {};
  let client: MongoClient;

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo.mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo.mongoClientPromise = client.connect();
    }
    return globalWithMongo.mongoClientPromise;
  }

  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  return client.connect();
}

const clientPromise = getClientPromise();

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.

export default clientPromise;
