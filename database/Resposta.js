const Sequeliza = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas", {
  corpo: {
    type: Sequeliza.TEXT,
    allowNull: false,
  },
  perguntaId: {
    type: Sequeliza.INTEGER,
    allowNull: false,
  },
});

Resposta.sync({ force: false });

module.exports = Resposta;
