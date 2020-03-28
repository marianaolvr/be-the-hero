const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); // antes das rotas, falando para o express ir para o corpo da requisição e transformar o json em um objeto do JS

app.use(routes);

app.listen(3333);