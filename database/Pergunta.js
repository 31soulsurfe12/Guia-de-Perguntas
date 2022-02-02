const Sequeliza = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("perguntas", {
  titulo: {
    type: Sequeliza.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequeliza.TEXT,
    allowNull: false,
  },
});

Pergunta.sync({ force: false }).then(() => {});

module.exports = Pergunta;

//Criando tabela no banco de Dados.
