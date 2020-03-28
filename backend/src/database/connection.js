const knex = require('knex'); 
const configuration = require('../../knexfile'); //importa a configuração do DB

//cria a conexão usando o knex e passando como parâmetros a conexão de desenvolvimento no knexfile.js
const connection = knex(configuration.development);

//exporta a conexão
module.exports = connection;