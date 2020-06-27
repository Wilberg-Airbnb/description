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

export {
  sampleDescriptions,
  sampleAmenities,
  hostAndRoomsEntirePlace,
  hostAndRoomsNotEntirePlace,
};
