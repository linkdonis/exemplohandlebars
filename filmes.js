const express = require('express')
const router = express.Router()
const Filmes = require('../models/Filmes')

// Listar filmes
router.get('/', async (req, res) => {
    const filmes = await Filmes.findAll({ raw: true })
res.render('filmes', { filmes })
})

// Formulário
router.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

// Cadastro dos filmes
router.post('/', async (req, res) => {
    console.log(req.body)

    const { titulo, diretor, ano, genero, descricao } = req.body

    await Filmes.create({
        titulo,
        diretor,
        ano,
        genero,
        descricao
    })

    res.redirect('/filmes')
})

module.exports = router