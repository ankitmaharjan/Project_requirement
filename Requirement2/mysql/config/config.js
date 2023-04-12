'use strict';
const path = require('path');
const dotenv= require('dotenv');
dotenv.config({
  path:path.join(process.cwd(),'.env')
});
module.exports={
  development: {
    username:process.env.MYSQL_DB_USER,
    host:process.env.MYSQL_DB_HOST,
    port:process.env.MYSQL_DB_PORT,
    database:process.env.MYSQL_DB_NAME,
    dialect: "mysql"
  },
  test: {
    username:process.env.MYSQL_DB_USER,
    host:process.env.MYSQL_DB_HOST,
    port:process.env.MYSQL_DB_PORT,
    database:process.env.MYSQL_DB_NAME,
    dialect: "mysql"
  },
  production: {
    username:process.env.MYSQL_DB_USER,
    host:process.env.MYSQL_DB_HOST,
    port:process.env.MYSQL_DB_PORT,
    database:process.env.MYSQL_DB_NAME,
    dialect: "mysql"
  }
}
