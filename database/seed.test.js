const db = require('./connection');
const Descriptions = require('./Description');

describe('Seeding script', () => {
  test('It should expect one hundred users in the database', () => {
    return Descriptions.countDocuments({}).then((response) => {
      expect(response).toEqual(100);
    });
  });
});
