const db = require('../db/db')
const Sequelize = require('sequelize')

const Filmes = db.define('filmes', {
    titulo: {
        type: Sequelize.STRING
    },
    diretor: {
        type: Sequelize.STRING
    },
    ano: {
        type: Sequelize.INTEGER
    },
    genero: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.TEXT
    }
})

module.exports = Filmes