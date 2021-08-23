var mysql = require('mysql');
// using local environment variables 
require('dotenv').config({path: __dirname + '/.env'})
const db_user = process.env['DATABASE_USER'];
const db_pwd = process.env['DATABASE_PWD'];
console.log(db_user);

var con = mysql.createConnection({
  host: "localhost",
  user: db_user,
  password: db_pwd
});

// basic connection to mysql server

// con.connect(function(err) {
//    if (err) throw err;
//    console.log("Connected!");
//    var query = "SHOW DATABASES";
//    con.query(query, function (err, result) {
//      if (err) throw err;
//      console.log("Result: " + result.toString());
//    });
//  });

// creating table on mysql server

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE test_db", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//     setTimeout(() => process.exit('process.exit()'), 2000);
//   });
// });

// drop table 

con.connect(function (err) {
  if (err) throw err;
  var sql = "DROP DATABASE test_db";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("DB deleted");
    setTimeout(() => {
      process.exit('process.exit()');
    }, 1000);
  });
});
