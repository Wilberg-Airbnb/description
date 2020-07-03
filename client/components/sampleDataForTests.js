const sampleDescriptions = [
  {
    header: 'Quae est molestias est qui.',
    description:
      'Sunt officiis aliquid enim nam adipisci. Vel omnis ut eius rerum sint nostrum maiores sed. Voluptatem ut voluptatem ab nihil reprehenderit quo harum.',
  },
  {
    header: 'Eos vel dolorem numquam commodi.',
    description:
      'Id quibusdam nihil qui eaque in non et sit hic. Omnis eos reiciendis iure iste et sit. Architecto consequatur odio.',
  },
  {
    header: 'Deserunt voluptatem quis aut.',
    description:
      'Repellendus libero beatae consequatur et in voluptas repellendus. Quia nostrum perferendis. Qui dolores numquam. Maxime sint adipisci ea.',
  },
];

const sampleAmenities = [
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

const hostAndRoomsEntirePlace = {
  name: 'Cindy Shields',
  maxNumberOfGuests: 5,
  typeOfPlace: 'House',
  entirePlace: true,
  bedNumber: 3,
  bathNumber: 2,
  rooms: 3,
  hosts: 'Wilber Jacobi Sr.',
  photoUrl: 'https://picsum.photos/100',
};

const hostAndRoomsNotEntirePlace = {
  name: 'Cindy Shields',
  maxNumberOfGuests: 5,
  typeOfPlace: 'House',
  entirePlace: false,
  bedNumber: 3,
  bathNumber: 2,
  rooms: 3,
  hosts: 'Wilber Jacobi Sr.',
  photoUrl: 'https://picsum.photos/100',
};

const thingsToDo = [
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Expedita consequuntur laboriosam.',
    pricePerPerson: 147,
    stars: 4,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Repellat amet rem nulla non.',
    pricePerPerson: 140,
    stars: 3,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Sunt doloribus earum blanditiis totam laboriosam.',
    pricePerPerson: 77,
    stars: 4,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription:
      'Qui quidem debitis quam eum quisquam doloribus totam quod eum.',
    pricePerPerson: 243,
    stars: 5,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Vel sint ipsa voluptatem.',
    pricePerPerson: 156,
    stars: 0,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Praesentium odit facilis exercitationem.',
    pricePerPerson: 248,
    stars: 0,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription:
      'Quo veniam eveniet iusto dolorum rerum magnam nihil provident.',
    pricePerPerson: 199,
    stars: 2,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Quisquam quisquam amet dolores fuga asperiores.',
    pricePerPerson: 96,
    stars: 5,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Adipisci et rerum dolor et repellendus.',
    pricePerPerson: 185,
    stars: 4,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription:
      'Magni sint magnam rerum ea ut soluta quaerat veniam nisi.',
    pricePerPerson: 219,
    stars: 3,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Unde laborum accusantium in nisi commodi.',
    pricePerPerson: 169,
    stars: 0,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Vero soluta sint est id est nobis dicta.',
    pricePerPerson: 219,
    stars: 1,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Hic amet in.',
    pricePerPerson: 96,
    stars: 1,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Animi hic veniam.',
    pricePerPerson: 196,
    stars: 0,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription:
      'Ipsum debitis enim eos nobis voluptatibus beatae delectus et culpa.',
    pricePerPerson: 166,
    stars: 3,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Qui nostrum et.',
    pricePerPerson: 131,
    stars: 4,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Rem velit delectus eum deleniti porro et.',
    pricePerPerson: 271,
    stars: 2,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription:
      'Et ex omnis tempora omnis natus necessitatibus fuga et blanditiis.',
    pricePerPerson: 299,
    stars: 1,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription:
      'Eum nesciunt et eligendi ullam illo deserunt qui pariatur.',
    pricePerPerson: 299,
    stars: 1,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Et odio odio ipsum nesciunt doloremque.',
    pricePerPerson: 203,
    stars: 5,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Magnam optio laborum ut.',
    pricePerPerson: 239,
    stars: 4,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Culpa tenetur ipsum voluptas saepe qui quo eos.',
    pricePerPerson: 183,
    stars: 5,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Rerum illum ea dolor sint unde recusandae.',
    pricePerPerson: 267,
    stars: 0,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Velit amet et doloribus et et dolore veritatis.',
    pricePerPerson: 97,
    stars: 2,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Ea amet neque inventore fugit sequi.',
    pricePerPerson: 116,
    stars: 1,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription:
      'Rerum commodi est necessitatibus deserunt earum autem amet.',
    pricePerPerson: 53,
    stars: 5,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Maxime natus omnis rem et.',
    pricePerPerson: 123,
    stars: 3,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription:
      'Qui sit quia officia aspernatur iusto tempora voluptatem.',
    pricePerPerson: 261,
    stars: 2,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Illo aut impedit a quidem nisi minus sed nobis.',
    pricePerPerson: 84,
    stars: 5,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Repudiandae odio laborum esse dicta unde.',
    pricePerPerson: 284,
    stars: 4,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Et dolorem dolore voluptate.',
    pricePerPerson: 255,
    stars: 1,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Et in sapiente ducimus sint.',
    pricePerPerson: 193,
    stars: 4,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Ducimus fugit aut tempora sed quaerat et ab.',
    pricePerPerson: 124,
    stars: 2,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Sequi culpa sapiente consequuntur omnis non.',
    pricePerPerson: 80,
    stars: 0,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Dolorem qui eos nam sed magni.',
    pricePerPerson: 237,
    stars: 5,
  },
  {
    activityPhoto: 'https://picsum.photos/150/100',
    activityDescription: 'Est autem aliquam minus.',
    pricePerPerson: 166,
    stars: 1,
  },
];

const sleepingArrangements = [
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
    bedroomDescription: '1 couch',
  },
];

const cancellationPolicy = [
  {
    _id: ObjectId('5ef94ff02940e20fa872372d'),
    flexible: false,
    moderate: true,
    strict: true,
    timeBeforeCancellation: 24,
    percentRefund: 50,
  },
];

const houseRules = [
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Voluptas a at.',
    subheader: 'At perspiciatis perferendis.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Quos aut distinctio voluptatem nisi quia.',
    subheader: 'Perspiciatis non ut officia autem modi possimus.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Facere ex aperiam sit culpa.',
    subheader: 'Voluptatem ex eos.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Voluptas et accusantium.',
    subheader: 'Omnis et et et veniam quia dolorem praesentium qui.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Totam atque non id aliquam.',
    subheader: 'Laboriosam sed commodi quis quaerat a debitis.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Dignissimos et nostrum recusandae nam voluptate.',
    subheader:
      'Dolor quasi eaque qui sit accusamus harum quisquam ea praesentium.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Debitis et in ea et culpa fuga et necessitatibus hic.',
    subheader: 'Vero ea aliquid.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Itaque qui ipsam.',
    subheader: 'Vitae qui voluptatem nemo.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription:
      'Rem rerum suscipit debitis suscipit inventore pariatur fuga.',
    subheader:
      'Optio quis aspernatur eligendi soluta doloribus amet libero veritatis consequatur.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription:
      'Illum vel praesentium corporis et ut et sapiente reiciendis in.',
    subheader:
      'Autem sequi quia illo deleniti ea quia recusandae fugit debitis.',
  },
];

const safety = [
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Voluptatem ut ducimus quod ut.',
    subheader:
      'Recusandae magnam dolor iusto nobis voluptas laudantium saepe.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription:
      'Amet sed omnis soluta alias dignissimos magni expedita architecto.',
    subheader: 'Aut facilis et aut qui.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Ad neque qui provident.',
    subheader: 'Saepe sit veniam quis voluptates illo odio ab.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Quod et doloribus hic non minima necessitatibus.',
    subheader:
      'Omnis ut praesentium similique et illo suscipit nostrum dolor architecto.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription: 'Velit adipisci consequatur vel illum est.',
    subheader: 'Voluptatem corporis neque.',
  },
  {
    iconLink: 'https://picsum.photos/100',
    safetyDescription:
      'Unde eum unde et quisquam enim sunt deserunt incidunt.',
    subheader:
      'Beatae molestiae aut reiciendis atque laudantium labore ipsum.',
  },
],

export {
  sampleDescriptions,
  sampleAmenities,
  hostAndRoomsEntirePlace,
  hostAndRoomsNotEntirePlace,
  thingsToDo,
  sleepingArrangements,
  cancellationPolicy,
  safety,
  houseRules,
};
