
const express = require('express')
const app = express()
const path = require('path');
//const dotenv = require('dotenv').config();
require('dotenv').config();
//const dotenv = require('dotenv');
//dotenv.config();



process.env.NODE_ENV = 'production';

const port =  process.env.PORT || 5000 ;

console.log(process.env.NODE_ENV);

console.log(__dirname) ;

// app.use(express.static('client/build'));




app.use(express.static(path.join(__dirname, 'client/build')));


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  //app.use(express.static('client/build'));
//app.use(express.static('client/build'));

app.use(express.static(path.join(__dirname, 'client/build')));


 
}




app.get('/', (req, res) => {
  res.send('Go to /api/customer!');
  console.log('Go to /api/customer!');
})


app.get('/teste', (req, res) => {
  
  console.log('Teste!')
  res.send('Teste')
})



app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'João', lastName: 'Gomes'},
    {id: 3, firstName: 'João', lastName: 'Silva'},
  ];

  res.json(customers)
});

//const port = process.env.PORT || 5000 ;

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  //app.use(express.static('client/build'));
//app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



 
}


/*
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
*/

app.listen(port, () => console.log(`Server running on port at http://localhost:${port}`)) 

