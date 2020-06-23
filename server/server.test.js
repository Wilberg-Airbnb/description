const { MongoClient } = require('mongodb');
const request = require('supertest');
const dummyData = require('../database/dummyData');
const app = require('./app');
const Description = require('../database/dummyData');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('Should succesfully grab an object', async () => {
    const expected = [
      'listingId',
      'nameOfListing',
      'hostAndRooms',
      'overview',
      'description',
      'sleepingArrangements',
      'amenities',
      'houseRules',
      'safety',
      'thingsToDo',
      'cancellationPolicy',
    ];
    const descriptions = db.collection('descriptions');
    await descriptions.insertMany(dummyData);
    const object = await request(app).get('/api/description/0');
    expect(JSON.parse(object.text).listingId).toEqual(0);
    expect(Object.keys(JSON.parse(object.text))).toEqual(
      expect.arrayContaining(expected)
    );
  });

  it('Should succesfully grab the name of an object', async () => {
    const object = await request(app).get('/api/description/nameOfListing/0');
    expect(Object.keys(JSON.parse(object.text)).length).toEqual(1);
    expect(typeof JSON.parse(object.text).nameOfListing).toBe('string');
  });
});
