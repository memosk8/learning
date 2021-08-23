const bcrypt = require('bcrypt');

const genPass = (pwd_unhash) => {
   const salt = bcrypt.genSaltSync();
   const securePwd = bcrypt.hashSync(pwd_unhash, salt);
   return securePwd;
}

module.exports = {genPass}