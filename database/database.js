const Sequeliza = require("sequelize");
const connection = new Sequeliza("guiaperguntas", "root", "souldo3112", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
