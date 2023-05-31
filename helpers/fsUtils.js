const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  Function to read data from JSON a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};
/**
 *  Function to delete record with given id from JSON file 
 *  @param {id} record_id The record id you want to delete from the file
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const deleteFromFile = (id, file) => {
  console.log(`Delete from file record with ${id}`);
   fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      const updatedRecords = parsedData.filter((parsedData) => parsedData.tip_id !== id);
      writeToFile(file, updatedRecords);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend, deleteFromFile };
