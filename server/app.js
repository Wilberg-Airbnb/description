const express = require('express');
const db = require('../database/connection');
const Document = require('../database/Description');
const app = express();

app.use(express.static('public'));

app.get('/api/description/:listingId', (req, res) => {
  Document.findOne({ listingId: req.params.listingId })
    .then((result) => {
      res.send(JSON.stringify(result));
    })
    .catch((error) => {
      console.log('Error retrieving description object', error);
      res.sendStatus(404);
    });
});

app.get('/api/description/nameOfListing/:listingId', (req, res) => {
  Document.find({ listingId: req.params.listingId })
    .then((result) => {
      res.send(JSON.stringify({ nameOfListing: result[0].nameOfListing }));
    })
    .catch((error) => {
      console.log('Error retrieving listing name', error);
      res.sendStatus(404);
    });
});

module.exports = app;
