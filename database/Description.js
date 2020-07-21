const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
  listingId: Number,
  nameOfListing: String,
  hostAndRooms: [
    {
      name: String, //GET request to Krissy's service
      maxNumberOfGuests: Number,
      typeOfPlace: String,
      entirePlace: Boolean,
      bedNumber: Number,
      bathNumber: Number,
      rooms: Number,
      hosts: String,
      photoUrl: String, //GET request to Krissy's service
    },
  ],
  overview: [
    {
      mainHeader: String,
      description: String,
    },
  ],
  description: [
    {
      header: String,
      description: String,
    },
  ],
  sleepingArrangements: [
    {
      iconLink: String,
      bedroomHeader: String,
      bedroomDescription: String,
    },
  ],
  amenities: [
    {
      iconLink: String,
      title: String,
      amenityDescription: String,
      subheader: String,
    },
  ],
  houseRules: [
    {
      iconLink: String,
      description: String,
      subheader: String,
    },
  ],
  safety: [
    {
      iconLink: String,
      safetyDescription: String,
      subheader: String,
    },
  ],
  thingsToDo: [
    {
      activityPhoto: String,
      activityDescription: String,
      pricePerPerson: String,
      stars: Number,
    },
  ],
  cancellationPolicy: [
    {
      flexible: Boolean,
      moderate: Boolean,
      strict: Boolean,
      timeBeforeCancellation: Number,
      percentRefund: Number,
    },
  ],
});

const Descriptions = mongoose.model('Description', descriptionSchema);

module.exports = Descriptions;
