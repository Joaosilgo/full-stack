
var userRoutes = require('./routes/api/users');
const express = require('express');
const app = express()
const path = require('path');
const fetch = require("node-fetch");
const db  = require('./db')
const userModel = require('./models/user');
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

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
app.use(body_parser.json());
/*
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
*/
//process.env.NODE_ENV = 'production';

const dbName = "sample_restaurants";
const collectionName = "restaurants";

//'sample_restaurants'
//"restaurants"

db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
  // get all items


  // << db CRUD routes >>




  app.get("/items/:id", (request, response) => {
    const itemId = request.params.id;

    dbCollection.findOne({ restaurant_id: itemId }, (error, result) => {
        if (error) throw error;
        // return item
        response.json(result);
    });
});



  app.get('/api/items', (request, response) => {
    // return updated list
  //  dbCollection.find().toArray((error, result) => {

    let query = { borough: 'Brooklyn', cuisine: 'American' , name: 'Melody Lanes' }
    dbCollection.find(query).toArray((error, result) => {
        if (error) throw  console.log(error);
        response.json(result);
    })
});



app.post("/items", (request, response) => {
  const item = request.body;
 
  dbCollection.insertOne(item, (error, result) => { // callback of insertOne
      if (error) throw error;
      // return updated list
      dbCollection.find().toArray((_error, _result) => { // callback of find
          if (_error) throw _error;
          response.json(_result);
      });
  });
});






}, function(err) { // failureCallback
  throw (err);
});








app.get('/users', async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});
 //console.log(db)
//console.log( db.('sample_restaurants'))

 /*
 app.get('/api/items', (request, response) => {
  // return updated list
//  dbCollection.find().toArray((error, result) => {

  let query = { borough: 'Brooklyn', cuisine: 'American' , name: 'Melody Lanes' }
  db..find(query).toArray((error, result) => {
      if (error) throw  console.log(error);
      response.json(result);
  })
});
*/




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
    { id: 3, firstName: 'João_', lastName: 'Silva' },
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











if (process.env.NODE_ENV === 'production') {
  // Set static folder
  //app.use(express.static('client/build'));
  //app.use(express.static('client/build'));


/*
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

  */

}

//You will then want to call connect() before your application starts and the server starts listening. Eg:


app.listen(port, () => console.log(`Server running on port at http://localhost:${port}`))









