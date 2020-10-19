

var userRoutes = require('./routes/api/users');
const express = require('express');
const app = express()
const path = require('path');
const fetch = require("node-fetch");
const { MongoClient } = require("mongodb")

//const { json } = require('express');
//var request = require("request");
//const dotenv = require('dotenv').config();´
const nodemailer = require('nodemailer');
const log = console.log;
require('dotenv').config();
const route = express.Router();
//const dotenv = require('dotenv');
//dotenv.config();

const favicon = require('serve-favicon');

const os = require('os');
const { options } = require('./routes/api/users');

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("CPU: " + os.cpus().length);
console.log(os.cpus());
console.log("UserName: ");
console.log(os.userInfo());
console.log("Free Mem:  " + os.freemem() + " (bytes)");
console.log("HostName:  " + os.hostname());
console.log("Process Version: ");
console.log(process.versions);












//process.env.NODE_ENV = 'production';

const port = process.env.PORT || 5000;

//console.log(process.env.NODE_ENV);

console.log(path.join(__dirname, 'client/build', 'favicon.ico'));

// app.use(express.static('client/build'));




//NOT COMMETING ABOVE

//app.use(express.static(path.join(__dirname, 'client/build')));


app.use(favicon(path.join(__dirname, 'client/build', 'favicon.ico')))
// Serve static assets if in production


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  //app.use(express.static('client/build'));
  //app.use(express.static('client/build'));

  app.use(express.static(path.join(__dirname, 'client/build')));



}







//app.use('/api/users', userRoutes);




app.get('/', (req, res) => {
  res.send('Go to /api/customer!');
  console.log('Go to /api/customer!');
})


/*
app.get('/teste', (req, res) => {

  console.log('Teste!')
  res.send('Teste')
})
*/



app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'João', lastName: 'Gomes' },
    { id: 3, firstName: 'João', lastName: 'Silva' },
  ];

  res.json(customers)
});





























//const port = process.env.PORT || 5000 ;
/* 
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  //app.use(express.static('client/build'));
  //app.use(express.static('client/build'));

  

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });


}
*/

























const sendEMail = (email, subject, text, content) => {

  // Step 1
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL || 'joaosilgo96@gmail.com', // TODO: your gmail account
      pass: process.env.PASSWORD //|| // TODO: your gmail password
    }
  });

  // Step 2
  let mailOptions = {
    from: 'joaosilgo96@gmail.com', // TODO: email sender
    to: 'joaosilgo96@gmail.com', // TODO: email receiver
    subject: ' 🚀 full-stack-app Live',
    text: 'Wooohooo it works Live!!' + Date(),
    html: ''
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log('Error occurs ;( ');
    }
    return log('Email sent :) !!!');
  });


}





sendEMail('test', 'test', 'test', 'test');


/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
*/

/*
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
*/







async function main() {


  // Connection URI

  const uri = "mongodb+srv://Teste:Jo@og0mes@teste.1eijf.mongodb.net/<dbname>?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
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

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }



}
main().catch(console.error);


async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



if (process.env.NODE_ENV === 'production') {
  // Set static folder
  //app.use(express.static('client/build'));
  //app.use(express.static('client/build'));



  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });


}

app.listen(port, () => console.log(`Server running on port at http://localhost:${port}`))







