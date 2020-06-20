const db = require('./index.js');
const data = require('./dummyData.js');

const Description = require('./Description.js');

const insertSampleDescriptions = function (data) {
  Description.deleteMany({}).catch((err) => console.log('Error deleting', err));
  Description.create(data)
    .then(() => console.log('Succes!'))
    .catch((error) => console.log('Error', error));
};

module.exports = insertSampleDescriptions;
