const functions = require('firebase-functions');

// HTTP function that generates a random number and returns it
exports.randomNumber = functions.https.onRequest((req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
  res.status(200).send(`Random Number: ${randomNum}`);
});
