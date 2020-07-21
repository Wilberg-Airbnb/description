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
    overview: helpers.overView(),
    description: helpers.getRandomDescriptions(),
    sleepingArrangements: [
      {
        iconLink: 'https://picsum.photos/100',
        bedroomHeader: faker.lorem.sentence(),
        bedroomDescription: faker.lorem.paragraph(),
      },
    ],
    amenities: helpers.getRandomAmenities(),
    houseRules: helpers.getRandomSaeftyItemsAndHouseRules(),
    safety: helpers.getRandomSaeftyItemsAndHouseRules(),
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
    dataToWrite.slice(0, 10)
  )} \n module.exports = dummyData;`,
  (err) => {
    if (err) console.log('Error in generation', err);
  }
);
