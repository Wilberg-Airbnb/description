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
  return amenitiesToPushIn;
}

module.exports = {
  getRandomAmenities,
  getSleepingArrangements,
  typeOfPlace,
};
