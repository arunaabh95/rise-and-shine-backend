# Rise and Shine (Backend)
### A weather data service

## Purpose
The Weather Data Service is a Node.js application that provides weather data for a given city using the weatherapi.com API. It serves as the backend for the weather application and exposes RESTful API endpoints to fetch weather information.

## Getting Started
To run the application and test it locally, follow the steps below:

1. Clone the repository:
   ```shell
   git clone https://github.com/arunaabh95/rise-and-shine-backend.git
   ```
2. Set up environment variables:

    Create a .env file in the root directory of the project.
    Add your API key for weatherapi.com as API_KEY=your-api-key.

3. Start the application:

```shell

    npm start
```
The application will now be running at http://localhost:3000.

4. API Endpoints

The following API endpoints are available:
```
    GET /weather/:city: Retrieves the current weather data for the specified city.
    GET /forecast/:city: Retrieves the weather forecast data for the specified city (3-day forecast).
```

Make requests to the above endpoints by replacing `:city` with the desired city name.
## Dependencies

The Weather Data Service relies on the following dependencies:

    Express.js: A web framework for Node.js to handle HTTP requests and routes.
    Axios: A promise-based HTTP client for making API requests.
    Dotenv: A module to load environment variables from a .env file.

## Testing

To run the unit tests for the application, execute the following command:

```shell

npm test
```
The tests are written using the Mocha testing framework and can be found in the test directory.


## Notes

This application uses the weatherapi.com API internally to fetch weather data. Ensure you have a valid API key from weatherapi.com and configure it in the .env file.
You can test the output of the api using weatherapi.com [api explorer](https://www.weatherapi.com/api-explorer.aspx#current)

## Hosting
The app is hosted on GCP. You can test using following endpoints

1 Health Check
```
https://us-central1-rise-and-shine-backend.cloudfunctions.net/gcp-func-rasb/
```

2 Current Weather Data
```
https://us-central1-rise-and-shine-backend.cloudfunctions.net/gcp-func-rasb/weather/london
```

3 Forecast for 3 days (currently hardcoded)
```
https://us-central1-rise-and-shine-backend.cloudfunctions.net/gcp-func-rasb/forecast/london
```
