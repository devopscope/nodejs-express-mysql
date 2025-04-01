module.exports = {
  HOST: process.env.MYSQL_HOST || "localhost",
  USER: process.env.MYSQL_USER || "root",
  PASSWORD: process.env.MYSQL_PASSWORD || "123456",
  DB: process.env.MYSQL_DATABASE || "testdb",
  PORT: process.env.MYSQL_PORT || 3306
};