const morgan = require("morgan");

const expressLoader = require("./express");
const sequelizeLoader = require("../loaders/sequelize");
const routerLoader = require("./router");

module.exports = ({ app }) => {
  app.use(morgan("dev"));

  expressLoader({ app, routerLoader, sequelizeLoader });
};
