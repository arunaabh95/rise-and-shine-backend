
const express = require('express');
require('dotenv').config()
const app = express();
const port = 3000 || process.env.PORT; // gcp function ports clashes with port.env.
const weatherApiClient = require('./weatherApiClient'); // Replace with your own weather API client


// Define the route for fetching weather data for a city
app.get('/', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.status(200).send("Ok");
});

app.get('/weather/:city', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const city = req.params.city;

  try {
    const weatherData = await weatherApiClient.getWeatherByCity(city);
    res.status(200).json(weatherData);
  } catch (error) {
    console.log(error);
    if (error.status && error.code && error.message) {
        const {code, message} = error;
        res.status(error.status).json({ code, message });
      } else {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});

app.get('/weather/:city', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const city = req.params.city;

  try {
    const weatherData = await weatherApiClient.getForecastByCity(city);
    res.status(200).json(weatherData);
  } catch (error) {
    console.log(error);
    if (error.status && error.code && error.message) {
        const {code, message} = error;
        res.status(error.status).json({ code, message });
      } else {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});


app.get('/forecast/:city', async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  const city = req.params.city;
  try {
    const weatherData = await weatherApiClient.getForecastByCity(city);
    res.status(200).json(weatherData);
  } catch (error) {
    console.log(error);
    if (error.status && error.code && error.message) {
        const {code, message} = error;
        res.status(error.status).json({ code, message });
      } else {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = { app };