const mongoose = require('mongoose');
const db = require('./connection');
const faker = require('faker');
const fs = require('fs');
const helpers = require('./helpers');
const Descriptions = require('./Description');

let fakeData = [];

function insertSampleDescriptions(data) {
  Descriptions.deleteMany({}).catch((err) =>
    console.log('Error deleting', err)
  );
  Descriptions.insertMany(data)
    .then(() => console.log('Succes!'))
    .catch((error) => console.log('Error', error));
}

for (let i = 0; i < 100; i++) {
  fakeData.push({
    listingId: i,
    nameOfListing: faker.company.catchPhrase(),
    hostAndRooms: [
      {
        name: faker.name.findName(),
        maxNumberOfGuests: Math.floor(Math.random() * 16),
        typeOfPlace: helpers.typeOfPlace(),
        entirePlace: faker.random.boolean(),
        bedNumber: Math.floor(Math.random() * 8) + 1,
        bathNumber: Math.floor(Math.random() * 3),
        rooms: Math.floor(Math.random() * 5),
        hosts: faker.name.findName(),
        photoUrl: 'https://picsum.photos/100',
      },
    ],
    overview: [
      {
        iconLink: 'https://picsum.photos/100',
        overviewHeader: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
      },
    ],
    description: helpers.getRandomDescriptions(),
    sleepingArrangements: [
      {
        iconLink: 'https://picsum.photos/100',
        bedroomHeader: faker.lorem.sentence(),
        bedroomDescription: faker.lorem.paragraph(),
      },
    ],
    amenities: helpers.getRandomAmenities(),
    houseRules: [
      {
        iconLink: 'https://picsum.photos/100',
        description: faker.lorem.paragraph(),
        subheader: faker.lorem.sentence(),
      },
    ],
    safety: [
      {
        iconLink: 'https://picsum.photos/100',
        safetyDescription: faker.lorem.paragraph(),
        subheader: faker.lorem.sentence(),
      },
    ],
    thingsToDo: helpers.getRandomThingsToDo(),
    cancellationPolicy: [
      {
        flexible: faker.random.boolean(),
        moderate: faker.random.boolean(),
        strict: faker.random.boolean(),
        timeBeforeCancellation: 24,
        percentRefund: 50,
      },
    ],
  });
}
let dataToWrite = helpers.getSleepingArrangements(fakeData);
insertSampleDescriptions(dataToWrite);

console.log('Data to put in', dataToWrite.length);
fs.writeFile(
  'database/dummyData.js',
  `let dummyData = ${JSON.stringify(
    dataToWrite
  )} \n module.exports = dummyData;`,
  (err) => {
    if (err) console.log('Error in generation', err);
  }
);
