const { Sequelize } = require('sequelize');
const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT } = require('../config');
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  port: DB_PORT,
  dialect: "mysql"
});

module.exports = sequelize;