const functions = require("firebase-functions");

// HTTP function that generates a random number and returns it
exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100);
  res.send(number.toString());
});

