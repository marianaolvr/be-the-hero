const express = require('express');

//importa o controler com a função de criar
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router(); //desacoplando o módulo de rotas express em uma nova variavel

//ROTAS ONG
//listar
routes.get('/ongs', OngController.index);
//cadastrar
routes.post('/ongs', OngController.create);

//ROTAS INCIDENTS
//listar
routes.get('/incidents', IncidentController.index);
//cadastrar
routes.post('/incidents', IncidentController.create);
//deletar
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; //exportar para usar no index.js