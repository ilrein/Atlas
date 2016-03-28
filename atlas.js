const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// root path
// app.get('/', (req, res) => {
//   res.json({ data: 'hello world!' });
// });

app.use(express.static('public'));

const server = app.listen(3000, () => {
  console.log(`Server running at ${server.address().port}`);
});
