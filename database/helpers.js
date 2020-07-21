const faker = require('faker');
const { fake } = require('faker');

function typeOfPlace() {
  let typesOfPlaces = [
    'House',
    'Secondary unit',
    'Unique space',
    'Bed and breakfast',
    'Boutique hotel',
  ];
  return typesOfPlaces[Math.floor(Math.random() * typesOfPlaces.length)];
}

function getSleepingArrangements(data) {
  let arrangements = [
    {
      iconLink: 'https://picsum.photos/50',
      bedroomHeader: 'Bedroom',
      bedroomDescription: '1 Single bed',
    },
    {
      iconLink: 'https://picsum.photos/50',
      bedroomHeader: 'Bedroom',
      bedroomDescription: '1 Double bed',
    },
    {
      iconLink: 'https://picsum.photos/50',
      bedroomHeader: 'Bedroom',
      bedroomDescription: '1 Queen bed',
    },
    {
      iconLink: 'https://picsum.photos/50',
      bedroomHeader: 'Bedroom',
      bedroomDescription: '1 King bed',
    },
    {
      iconLink: 'https://picsum.photos/50',
      bedroomHeader: 'Bedroom',
      bedroomDescription: '1 Couch',
    },
  ];
  let dataWithSleepingArrangements = data.map((room) => {
    let livingArrangements = [];
    let numberOfBeds = room.hostAndRooms[0].bedNumber;
    while (numberOfBeds) {
      livingArrangements.push({
        ...arrangements[Math.floor(Math.random() * arrangements.length)],
        bedroomHeader: `Bedroom ${numberOfBeds}`,
      });
      numberOfBeds--;
    }

    return { ...room, sleepingArrangements: livingArrangements };
  });
  return dataWithSleepingArrangements;
}

function getRandomAmenities() {
  let amenities = [
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Wifi',
      amenityDescription: '',
      subheader: 'Basic',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Iron',
      amenityDescription: '',
      subheader: 'Basic',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Air conditioning',
      amenityDescription: '',
      subheader: 'Basic',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Towels, bed sheets, soap, and toilet paper',
      amenityDescription: '',
      subheader: 'Essentials',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Heating',
      amenityDescription: '',
      subheader: 'Essentials',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Hot water',
      amenityDescription: '',
      subheader: 'Essentials',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: '',
      amenityDescription: '',
      subheader: 'Veritatis quo architecto quibusdam.',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Free street parking',
      amenityDescription: '',
      subheader: 'Facilities',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Hangers',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Hair dryer',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Shampoo',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Bed linens',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Extra pillows and blankets',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Shower gel',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Carbon monoxide alarm',
      amenityDescription: '',
      subheader: 'Safety features',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Smoke alarm',
      amenityDescription: '',
      subheader: 'Safety features',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Wifi',
      amenityDescription: '',
      subheader: 'Basic',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Iron',
      amenityDescription: '',
      subheader: 'Basic',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Air conditioning',
      amenityDescription: '',
      subheader: 'Basic',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Towels, bed sheets, soap, and toilet paper',
      amenityDescription: '',
      subheader: 'Essentials',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Heating',
      amenityDescription: '',
      subheader: 'Essentials',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Hot water',
      amenityDescription: '',
      subheader: 'Essentials',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: '',
      amenityDescription: '',
      subheader: 'Veritatis quo architecto quibusdam.',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Free street parking',
      amenityDescription: '',
      subheader: 'Facilities',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Hangers',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Hair dryer',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Shampoo',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Bed linens',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Extra pillows and blankets',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Shower gel',
      amenityDescription: '',
      subheader: 'Bed and bath',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Carbon monoxide alarm',
      amenityDescription: '',
      subheader: 'Safety features',
    },
    {
      iconLink: 'https://picsum.photos/25',
      title: 'Smoke alarm',
      amenityDescription: '',
      subheader: 'Safety features',
    },
  ];
  let amenitiesToPushIn = [];
  let pushedIn = [];
  let randomNumberOfAmenities = Math.floor(Math.random() * amenities.length);
  while (randomNumberOfAmenities) {
    let indexOfAmenity = Math.floor(Math.random() * amenities.length);
    if (pushedIn.indexOf(indexOfAmenity) === -1) {
      amenitiesToPushIn.push(
        amenities[Math.floor(Math.random() * amenities.length)]
      );
    }
    pushedIn.push(indexOfAmenity);
    randomNumberOfAmenities--;
  }
  if (amenitiesToPushIn.length < 11) {
    return amenitiesToPushIn.concat(amenities.slice(0, 12));
  } else {
    return amenitiesToPushIn;
  }
}

function getRandomThingsToDo() {
  let numberOfThingsToDo = [6, 12, 18, 24, 30, 36, 42, 48];
  let activities = [];
  let randomAmount =
    numberOfThingsToDo[Math.floor(Math.random() * numberOfThingsToDo.length)];
  for (let i = 0; i < randomAmount; i++) {
    activities.push({
      numberOfReviews: Math.floor(Math.random() * 1000) + 100,
      activityPhoto: 'https://picsum.photos/107/142',
      activityDescription: faker.lorem.sentence(),
      pricePerPerson: getRandomInt(50, 300),
      stars: Number((Math.random() + 4).toFixed(2)),
    });
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return activities;
}

function getRandomDescriptions() {
  let randomNumberOfDescriptions = Math.floor(Math.random() * 10) + 1;
  let descriptions = [];

  for (let i = 0; i < randomNumberOfDescriptions; i++) {
    descriptions.push({
      header: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
    });
  }
  return descriptions;
}

function getRandomSaeftyItemsAndHouseRules() {
  let numBetween5And10 = Math.floor(Math.random() * 6) + 5;
  let safetyOrHouseRules = [];
  for (let i = 0; i < numBetween5And10; i++) {
    safetyOrHouseRules.push({
      iconLink: 'https://picsum.photos/100',
      safetyDescription: faker.lorem.sentence(),
      subheader: faker.lorem.sentence(),
    });
  }
  return safetyOrHouseRules;
}

module.exports = {
  getRandomAmenities,
  getSleepingArrangements,
  typeOfPlace,
  getRandomThingsToDo,
  getRandomDescriptions,
  getRandomSaeftyItemsAndHouseRules,
};
