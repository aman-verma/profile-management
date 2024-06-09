const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const profileData = [
  { name: 'Name1', email: 'email1@test.com', age: '21', role: 'Developer' },
  { name: 'Name2', email: 'email2@test.com', age: '31', role: 'Manager' },
  { name: 'Name3', email: 'email3@test.com', age: '41', role: 'Manager' },
  { name: 'Name4', email: 'email4@test.com', age: '51', role: 'HR' },
];

app.get('/api/v1', (req, res, next) => {
  res.status(200).json({ sucess: true, data: profileData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
