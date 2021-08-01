const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "production";
const config = require("../config/mysql.js")[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;
