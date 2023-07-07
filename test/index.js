const assert = require('assert');
const request = require('supertest');
const app = require('../index').app; // done to accomodate gcp

describe('Weather API', () => {
  
    it('should return weather data for a valid city', async () => {  
      const city = 'London';
      const response = await request(app).get(`/weather/${city}`).expect(200);
  
      assert.strictEqual(response.body.location.name, 'London');
      assert.strictEqual(typeof response.body.data.temp_c, 'number');
    });
  
    it('should return an error for an invalid city', async () => {  
      const city = 'InvalidCity';
      const response = await request(app).get(`/weather/${city}`).expect(400);
  
      assert.strictEqual(response.body.message, 'No matching location found.');
      assert.strictEqual(response.body.code, 1006);
    });
  });

  describe('Forecast API', () => {
  
    it('should return forecast data for a valid city', async () => {  
      const city = 'London';
      const response = await request(app).get(`/forecast/${city}`).expect(200);
      assert.strictEqual(response.body.location.name, 'London');
    });

    it('should have forecast for exactly 3 days', async () => {  
      const city = 'London';
      const response = await request(app).get(`/forecast/${city}`).expect(200);
      assert.strictEqual(response.body.data.length, 3)
    });
  
    it('should return an error for an invalid city', async () => {  
      const city = 'InvalidCity';
      const response = await request(app).get(`/weather/${city}`).expect(400);
  
      assert.strictEqual(response.body.message, 'No matching location found.');
      assert.strictEqual(response.body.code, 1006);
    });
  });
