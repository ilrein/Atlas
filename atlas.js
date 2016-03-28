'use strict'; // eslint-disable-line

require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));

let db;
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) throw err;

  db = database;
  const server = app.listen(3000, () => {
    console.log(`Server running at ${server.address().port}`);
  });
});

app.get('/data/links', (req, res) => {
  db.collection('links').find({}).toArray((error, links) => {
    if (error) throw error;

    res.json(links);
  });
});
