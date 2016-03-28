const request = require('request');

const endPoint = 'http://localhost:3000';

const options = {
  method: 'GET',
  url: `${endPoint}/data/links`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
};

const API = {
  fetchLinks() {
    console.log('1. In API');
    request(options, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        console.log(body);
      }
    });
  },
};

export default API;
