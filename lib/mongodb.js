//lib/mongodb.js

import { MongoClient } from 'mongodb';

// Căutăm string-ul de conexiune în variabilele de mediu
const uri = process.env.NEXT_ATLAS_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let mongoClient = null;
let database = null;

// Dacă nu avem stringul de conexiune, aruncăm o eroare
if (!uri) {
  throw new Error('Please add your Mongo URI to .env');
}

// Funcția pentru a ne conecta la baza de date
export async function connectToDatabase() {
  try {
    if (mongoClient && database) {
      return { mongoClient, database };
    }
    if (process.env.NODE_ENV === 'development') {
      if (!global._mongoClient) {
        mongoClient = await new MongoClient(uri, options).connect();
        global._mongoClient = mongoClient;
      } else {
        mongoClient = global._mongoClient;
      }
    } else {
      mongoClient = await new MongoClient(uri, options).connect();
    }

    database = mongoClient.db(process.env.NEXT_ATLAS_DATABASE);
    return { mongoClient, database };
  } catch (e) {
    console.error(e);
    throw new Error('Error connecting to MongoDB');
  }
}
