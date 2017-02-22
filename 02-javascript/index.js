'use strict';

console.log(`
2.
---

Take a look at the 'requester' function.

- What it does? Call a Url by any HTTP METHOD, FOR EAMPLE GET
- How it's used? Add different use-case examples that covers every functionality.
- How it is called this design pattern or technique? API REST

HINT: Use https://api.github.com/users/mediastream
`);

// Add fetch polyfill for Node.js
require('es6-promise').polyfill();
require('isomorphic-fetch'); // See: https://github.com/matthew-andrews/isomorphic-fetch

function requester(method, base, headers = { Accept: '*/*' }) {
  return (path = []) => fetch((base ? [base, ...path] : path).join('/'), { method, headers })
    .then(r => {
      return r.json();
    });
}

 //requester('GET', 'https://api.github.com/users/mediastream');
