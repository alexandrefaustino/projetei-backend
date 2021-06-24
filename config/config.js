require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER_PRODUCTION,
    "password": process.env.MYSQL_PASSWORD_PRODUCTION,
    "database": process.env.DATABASE_PRODUCTION,
    "host": process.env.HOST_NAME_PRODUCTION,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER_PRODUCTION,
    "password": process.env.MYSQL_PASSWORD_PRODUCTION,
    "database": process.env.DATABASE_PRODUCTION,
    "host": process.env.HOST_NAME_PRODUCTION,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}


