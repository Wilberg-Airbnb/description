const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/fec-descriptions';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
