const express = require("express")
const exphbs = require("express-handlebars")
const path = require("path")

const db = require('./db/db')
db.sync()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/categoria', require('./routes/categoria'))
app.use('/filmes', require('./routes/filmes'))

db.authenticate()

    .then(() => {
        console.log('Conectado no banco')
    })

    .catch(erro => {
        console.log("Deu erro: ", erro)
    })

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})