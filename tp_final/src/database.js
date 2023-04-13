const mysql= require("mysql2");
const util= require("util");
require('dotenv').config();

let pool = mysql.createPool({ 
 connectionLimit: 10,
 host: process.env.MYSQL_HOST,
 user: process.env.MYSQL_USER,
 password: process.env.MYSQL_PASSWORD,
 database: process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);

const employees = pool
 .query("SELECT * FROM courses")
 .then((result) => {
   // console.log(result);
   return result;
 });


module.exports = pool;