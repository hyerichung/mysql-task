const sequelize = require("../db");

module.exports = () => {
  sequelize.sync({ force: false })
    .then(() => {
      console.log("mySQL is connected");
    }).catch((err) => {
      console.error(err);
    });
};
