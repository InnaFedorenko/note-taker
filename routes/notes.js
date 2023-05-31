const { readFromFile, readAndAppend, deleteFromFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


const tips = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const uuid = require('../helpers/uuid');

// GET Route for retrieving all the tips
tips.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
tips.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            tip_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

tips.delete(`/:id`, (req, res) => {
    if (req.params) {
        const id = req.params.id;
        // console.log("delete - " + id);
       deleteFromFile(id, './db/db.json');
        res.json(`Note deleted successfully 🚀`);
    } else {
        res.error('Error in deleting note');
    }
});

module.exports = tips;