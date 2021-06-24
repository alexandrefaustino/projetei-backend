
module.exports = {
  "development": {
    "username": MYSQL_USER_PRODUCTION,
    "password": MYSQL_PASSWORD_PRODUCTION,
    "database": DATABASE_PRODUCTION,
    "host": HOST_NAME_PRODUCTION,
    "dialect": "mysql"
  },
  "production": {
    "username": MYSQL_USER_PRODUCTION,
    "password": MYSQL_PASSWORD_PRODUCTION,
    "database": DATABASE_PRODUCTION,
    "host": HOST_NAME_PRODUCTION,
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


