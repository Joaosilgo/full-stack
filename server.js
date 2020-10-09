

var userRoutes = require('./routes/api/users');
const express = require('express');
const app = express()
const path = require('path');
const fetch = require("node-fetch");

//const { json } = require('express');
//var request = require("request");
//const dotenv = require('dotenv').config();´
const nodemailer = require('nodemailer');
const log = console.log;
require('dotenv').config();
const route = express.Router();
//const dotenv = require('dotenv');
//dotenv.config();

const favicon = require('serve-favicon')








//process.env.NODE_ENV = 'production';

const port = process.env.PORT || 5000;

//console.log(process.env.NODE_ENV);

console.log(path.join(__dirname, 'client/build', 'favicon.ico'));

// app.use(express.static('client/build'));




app.use(express.static(path.join(__dirname, 'client/build')));
app.use(favicon(path.join(__dirname, 'client/build', 'favicon.ico')))
// Serve static assets if in production

/*
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  //app.use(express.static('client/build'));
  //app.use(express.static('client/build'));

  app.use(express.static(path.join(__dirname, 'client/build')));



}
*/






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
    subject: ' 🚀 full-stack-app',
    text: 'Wooohooo it works!!',
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


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

/*
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
*/

app.listen(port, () => console.log(`Server running on port at http://localhost:${port}`))







