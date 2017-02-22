'use strict';

console.log(`
3.
---

We need to create a route that downloads the entire database to a .csv file.
The endpoint must be set to: GET /users

Make sure to have an instance of MongoDB running at: mongodb://localhost

Run the database seed with:
$ node utils/seed.js

-> Warning: It contains hundreds of entities and our production server is quite small
`);

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const json2csv = require('json2csv');
const fs = require('fs');

// Setup database
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/mediastream-challenge');
const User = require('./models/User');

// Setup Express.js app
const app = express();

// TODO
// get all the users
User.find({}, function(err, users) {
  if (err) throw err;
  // object of all the users
  var fields = ['_id', '__v', 'name', 'email'];
  console.log("Get users: ", users.length);
  var csv = json2csv({ data: users, fields: fields });

  fs.writeFile('users.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });

});

app.listen(3000);
