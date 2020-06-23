const { MongoClient } = require('mongodb');
const dummyData = require('./dummyData');
const Description = require('./Description');

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

  it('should insert 100 documents into a collection', async () => {
    const descriptions = db.collection('descriptions');
    await descriptions.deleteMany({});
    await descriptions.insertMany(dummyData);
    const numberOfUsers = await descriptions.count({});
    expect(numberOfUsers).toEqual(100);
  });
});
