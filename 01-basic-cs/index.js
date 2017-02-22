'use strict';

console.log(`
1.
---

There is database of users and their hats at './database.json'.
Find the total sum of the top-3 most selling hats.
We don't care which hats are.
You can use lodash/underscore (recommended)

What is the complexity in O(n^2) notation of time and space?

IMPORTANT: Find a balance between performance and legibility (more important).

---
Example:
Imagine the following (taken from the real database):

Hat(7adbc650-2a5e-4e59-b88f-97377e0b7e34) sold 7.
Hat(872f5fc4-515f-416d-9ec6-3488da2bd74a) sold 6.
Hat(048d8fbf-7653-461f-a59c-68c73b8855e5) sold 7.
Hat(32266d28-5092-4a69-afb3-90fafd46e04a) sold 9.

-> Expected result: 7 + 7 + 9 => 23
`);

const _ = require('lodash'); // https://lodash.com/docs/4.17.4
const assert = require('assert');

const database = require('./database.json');

var total = 0 // TODO

if(database.length > 0){
  var i = 0;
  var hats = {};
  database.forEach(function(product, index) {
    if(product.hats != undefined && product.hats.length > 0){
      product.hats.forEach(function(hat){
        if(hats[hat.id] == undefined){
          hats[hat.id] = 1;
        }else{
          hats[hat.id] = hats[hat.id] + 1;
        }
      });
    }
  });
  
  var array = [], h;
  for(h in hats){
   array.push([h,hats[h]])
  }
  array.sort(function(a,b){return a[1] - b[1]});
  array.reverse();
  total = array[0][1] + array[1][1] + array[2][1];
  console.log("total ", total, "Result "+array[0][1]+" + "+array[1][1]+" + "+array[2][1]);
}

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`);

console.log('Success!');
