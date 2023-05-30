// import express
const express = require('express');
// import path for finding files
const path = require('path');

// initializing/creating our app for use
const app = express();

// create a port number that is free
const PORT = 3001;

// connect public folder and install the static middleware
app.use(express.static('public'));

// Read homepage (connect to index.html)
// GET /
app.get('/', (req, res) => {
  console.log("homepage route");

  // sends a home.html file to the browser
  
  res.sendFile(path.join(__dirname, '', 'public/index.html'));
});
// Read notes (connect to notes.html)
// GET /
app.get('/notes', (req, res) => {
  console.log("notes route");
  // sends a home.html file to the browser
  res.sendFile(path.join(__dirname, '', 'public/notes.html'));
});
// listen for requests
app.listen(PORT, () => 
  console.log(`Example app listening at http://localhost:${PORT}`)
);