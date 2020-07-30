const mongoose = require('mongoose');
// Have to figure out a way to switch between localhost (local)
// and mongo (dockerizing)
const mongoUri = 'mongodb://localhost:27017/fec-descriptions';
const db = mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to mongo!'))
  .catch((error) => console.log('Error connecting here:', error));

module.exports = db;
