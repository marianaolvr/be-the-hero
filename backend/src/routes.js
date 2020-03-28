const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); //desacoplando o módulo de rotas express em uma nova variavel

//Rota LOGIN - criar uma sessão
routes.post('/sessions', SessionController.create);

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
//Incidentes de uma única ong
routes.get('/profile', ProfileController.index);


module.exports = routes; //exportar para usar no index.js
