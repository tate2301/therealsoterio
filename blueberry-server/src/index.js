require('dotenv').config();
const express = require('express');

const authentication = require('./authentication');
const authorization = require('./authorization');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authentication);
app.use('/api/iam', authorization);

app.listen(80, () => {
  console.log('Server started');
});
