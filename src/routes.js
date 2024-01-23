const express = require('express');
const router = express.Router();

const user = require('./controllers/index');

//Para Listar todos os Usuarios
router.get('/users', user.buscarTodos);

//Para Listar um Unico Usuario
router.get('/user/:id', user.buscarUnico);

//Para Adicionar novo Usuario
router.post('/user', user.inserir);

// Alterar usuario
router.put('/user/:id', user.alterar)

module.exports = router;