//const { MongoClient } = require("mongodb")
//const mongoClient = require('mongodb').MongoClient;
const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@teste.1eijf.mongodb.net/<dbname>?retryWrites=true&w=majority`;



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


 mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}




)



const db = mongoose.connection.getClient();


module.exports = db;














//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err); // this should be "caught" by the calling function
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};




/*
await client.connect(err => {
   //const collection = client.db('sample_restaurants').collection("restaurants");
    // perform actions on the collection object
    const  database =  client.db('sample_restaurants').collection("restaurants");
  // client.close();
  });

  */
  



  






 // const db = database

//async function main() {

   // const database = db.db('sample_restaurants');
  // const col = database.collection("restaurants").find({});

 
 //   module.exports = db
    // Connection URI
  
  //  const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@teste.1eijf.mongodb.net/<dbname>?retryWrites=true&w=majority`;
   // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    /*
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
    */
  
    // Create a new MongoClient
    //const client = new MongoClient(uri);
    /*
    async function run() {
      try {
        // Connect the client to the server
        await client.connect();
    
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
    
    */
  
  
  
  
  //  const client = new MongoClient(uri);
  
  /*
    try {
      // Connect to the MongoDB cluster
      await client.connect();
  
      // Make the appropriate DB calls
      await listDatabases(client);
  
      const db = client.db('sample_restaurants');
      const col = db.collection("restaurants").find({});
      
  //console.log(db);
  //console.log(col);
  //const myDoc = await col.findOne();
  //const myDoc = await col.find({});
  //console.log(myDoc);
  
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
    }
 */ 
  //}
  //run().catch(console.dir);
  
  //}
  //main().catch(console.error);
  
  /*
  
  async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
  
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  };
  */
  
  
  