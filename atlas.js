const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// should I do anything for the root path?
app.get('/', (req, res) => {
  res.json({ data: 'hello world!' });
});

const server = app.listen(3000, () => {
  console.log(`Server running at ${server.address().port}`);
});
