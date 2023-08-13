const axios = require('axios');
const async = require('async');

const targetURL = 'https://api.fuelwatch.xyz/api/test'; // Replace with your actual API endpoint URL
const concurrencyLevel = 150; // Number of concurrent requests

const makeRequest = async () => {
  try {
    const response = await axios.get(targetURL);
    console.log(`Request status: ${response.status}`);
  } catch (error) {
    if (error.response && error.response.data.message === "Too many requests from this IP, please try again later.") {
      console.log('Rate limit message received:', error.response.data.message);
    } else {
      console.error('Error making request:', error.message);
    }
  }
};

const runStressTest = () => {
  console.log(`Starting stress test with ${concurrencyLevel} concurrent requests...`);

  async.timesLimit(concurrencyLevel, concurrencyLevel, async () => {
    await makeRequest();
  }, (err) => {
    if (err) {
      console.error('Stress test encountered an error:', err);
    } else {
      console.log('Stress test completed successfully.');
    }
  });
};

runStressTest();


// const axios = require('axios');
// const async = require('async');

// const targetURL = 'http://your-website-url.com/endpoint'; // Change this to your actual endpoint URL
// const concurrencyLevel = 50; // Number of concurrent requests

// const dataSizeBytes = 1024; // Size of data to send in bytes

// const makeRequest = async () => {
//   const requestData = Buffer.alloc(dataSizeBytes); // Creating a buffer with the specified size

//   try {
//     const response = await axios.post(targetURL, requestData);
//     console.log(`Request status: ${response.status}`);
//   } catch (error) {
//     console.error('Error making request:', error.message);
//   }
// };

// const runStressTest = () => {
//   console.log(`Starting stress test with ${concurrencyLevel} concurrent requests...`);

//   async.timesLimit(concurrencyLevel, concurrencyLevel, async () => {
//     await makeRequest();
//   }, (err) => {
//     if (err) {
//       console.error('Stress test encountered an error:', err);
//     } else {
//       console.log('Stress test completed successfully.');
//     }
//   });
// };

// runStressTest();
