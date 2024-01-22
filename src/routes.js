const express = require('express');
const router = express.Router();

const user = require('./controllers/index');

//Para Listar todos os Usuarios
router.get('/users', user.buscarTodos)

module.exports = router;