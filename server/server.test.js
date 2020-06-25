const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
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
    return request(app)
      .get('/api/description/0')
      .then((response) => {
        const keyValues = Object.keys(JSON.parse(response.text));
        expect(typeof JSON.parse(response.text)).toBe('object');
        expect(keyValues).toEqual(expect.arrayContaining(expected));
      });
  });
});
