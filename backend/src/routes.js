const express = require('express');

//importa o controler com a função de criar
const OngController = require('./controllers/OngController');

const routes = express.Router(); //desacoplando o módulo de rotas express em uma nova variavel


//rota para listar todas as ongs do banco de dados
routes.get('/ongs', OngController.index);

//rota de cadastro
routes.post('/ongs', OngController.create);





module.exports = routes; //exportar para usar no index.js