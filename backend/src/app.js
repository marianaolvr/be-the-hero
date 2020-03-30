const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors()); //como estamos em desenvolvimento, fica apenas assim para todas as aplicações frontend possam acessar esse backend. 
app.use(express.json()); // antes das rotas, falando para o express ir para o corpo da requisição e transformar o json em um objeto do JS
app.use(routes);
app.use(errors());


module.exports = app;   



