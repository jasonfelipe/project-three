const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)

//set static folder
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'client/build')));

// Add routes, both API and view
app.use('/api', routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectthree");

mongoose.Promise = Promise;

// Start the API server
app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
