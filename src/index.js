require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0.ptzkt.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo Instance');
});

mongoose.connection.on('error', (err) => {
  console.error('There was an error connecting to Mongo', err)
});

app.get('/', (req, res) => {
  res.send('Testing');
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});
