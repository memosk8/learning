const crypto = require('crypto');

const NUM_REQUESTS = 2;

// synchronous
for (let i = 0; i < NUM_REQUESTS; i++) {
   let encrypted1 = crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512');

   let encrypted2 = crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', () => {});
}