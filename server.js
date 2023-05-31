// ```
// GIVEN a note-taking application
// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes


// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column

// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
// ```


// import express
const express = require('express');
// import path for finding files
const path = require('path');

// initializing/creating our app for use
const app = express();

// create a port number that is free
const PORT = 3001;

const api = require("./routes/index");

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
// connect public folder and install the static middleware
app.use(express.static('public'));

// Read homepage (connect to index.html)
// GET /
app.get('/', (req, res) => {

  // sends a home.html file to the browser
  
  res.sendFile(path.join(__dirname, '', 'public/index.html'));
});
// Read notes (connect to notes.html)
// GET /
app.get('/notes', (req, res) => {
  console.log("notes route");
  res.sendFile(path.join(__dirname, '', 'public/notes.html'));
});
// listen for requests
app.listen(PORT, () => 
  console.log(`Example app listening at http://localhost:${PORT}`)
);