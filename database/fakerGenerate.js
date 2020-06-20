const faker = require('faker');
const fs = require('fs');
const seed = require('./seed');
const helpers = require('./randomHelpers');

let fakeData = [];

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
    description: [
      {
        header: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
      },
    ],
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
    thingsToDo: [
      {
        activityPhoto: 'https://picsum.photos/169.98/226.62',
        activityDescription: faker.lorem.sentence(),
        pricePerPerson: faker.lorem.sentence(),
        stars: Math.floor(Math.random() * 5),
      },
    ],
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

fs.writeFile(
  'dummyData.js',
  `let dummyData = ${JSON.stringify(
    dataToWrite
  )} \n module.exports = dummyData;`,
  (err) => {
    if (err) console.log('Error in generation', err);
    console.log('File was written!');
  }
);
seed(dataToWrite);
