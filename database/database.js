const Sequeliza = require("sequelize");
const connection = new Sequeliza("guiaperguntas", "root", "******", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
