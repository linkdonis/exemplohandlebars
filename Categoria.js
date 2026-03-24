const Sequelize = require('sequelize')
const db = require('../db/db')

const Categoria = db.define('categoria' ,  {
    nome:{
        type: Sequelize.STRING
    }
})

module.exports = Categoria