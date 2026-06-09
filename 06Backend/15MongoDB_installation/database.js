const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// @ : %40  it means @ means to %40
const url = 'mongodb://Joy27:Hunter%409Bhai@ac-0ki5w1z-shard-00-00.bkokgxg.mongodb.net:27017,ac-0ki5w1z-shard-00-01.bkokgxg.mongodb.net:27017,ac-0ki5w1z-shard-00-02.bkokgxg.mongodb.net:27017/?ssl=true&replicaSet=atlas-4p5yb4-shard-0&authSource=admin&appName=CoadingAdda';
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...

  //Find All Documents : here collection.find({}) is the cursor
  // const findResult = await collection.find({}).toArray();
  // console.log('Found documents =>', findResult); 

  // const findResult =  collection.find({});     //Find all documents one by one
  // let balence=0;
  // for await(doc of findResult){
  //    console.log(doc);
  //    balence++;
  // }


  // Insert a Document
  // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  // const insertResult = await collection.insertOne({name:"Soveer",age:40});
  // console.log('Inserted documents =>', insertResult);


  // Find Documents with a Query Filter
  const filteredDocs = await collection.find({ a: 3 }).toArray();
  console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
