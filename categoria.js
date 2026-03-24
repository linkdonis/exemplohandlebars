const express = require('express')
const Categoria = require('./../models/Categoria')

const router = express.Router()

router.post('/', (requisicao, resposta) => {
    Categoria.create({ nome: "Games" })
        .then((categoria) => {
            console.log('Inseriu nova categoria');
            // Escolha apenas UMA linha abaixo:
            return resposta.json(categoria); 
        })
        .catch((erro) => {
            console.log(erro);
            return resposta.status(500).json({ erro: "Erro ao criar categoria" });
        });
});

module.exports = router