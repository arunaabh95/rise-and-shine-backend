const axios = require('axios');
const API_KEY = process.env.API_KEY || "dda4e4afe42f4012998200535230507"
require('dotenv').config();


async function getWeatherByCity(city) {
  const apiString = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  try {
    const response = await axios.get(apiString);
    if (response.status === 200) {
      const weatherData = {
        data: response.data?.current,
        location: response.data?.location,
      };
      return weatherData;
    } else if (response.status === 400) {
      throw createErrorResponse(response.data.error);
    }
  } catch (error) {
    // violating DRY principle to propgate error
    if (error.response && error.response.status === 400) {
      throw createErrorResponse(error.response.data.error);
    } else {
      throw error;
    }
  }
}

async function getWeatherByCity(city) {
  const apiString = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  try {
    const response = await axios.get(apiString);
    if (response.status === 200) {
      const weatherData = {
        data: response.data?.current,
        location: response.data?.location,
      };
      return weatherData;
    } else if (response.status === 400) {
      throw createErrorResponse(response.data.error);
    }
  } catch (error) {
    // violating DRY principle to propgate error
    if (error.response && error.response.status === 400) {
      throw createErrorResponse(error.response.data.error);
    } else {
      throw error;
    }
  }
}

async function getForecastByCity(city) {
  const apiString = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`
  try {
    const response = await axios.get(apiString);
    if (response.status === 200) {
      const weatherData = {
        data: response.data?.forecast.forecastday,
        location: response.data?.location,
      };
      return weatherData;
    } else if (response.status === 400) {
      throw createErrorResponse(response.data.error);
    }
  } catch (error) {
    // violating DRY principle to propgate error
    if (error.response && error.response.status === 400) {
      throw createErrorResponse(error.response.data.error);
    } else {
      throw error;
    }
  }
}

function createErrorResponse(error) {
  const { code, message } = error;
  return {
    status: 400,
    code,
    message,
  };
}

module.exports = {
  getWeatherByCity,
  getForecastByCity
};
