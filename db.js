const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

module.exports = db