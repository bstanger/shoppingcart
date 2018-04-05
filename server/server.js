const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;
const host = 'localhost';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  console.log("GET registered");
  res.status(200).send();
})

app.listen(port, host, () => console.log(`Listening at http://${host}:${port}`));
