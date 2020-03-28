const knex = require('knex'); 
const configuration = require('../../knexfile'); //importa a configuração do DB

const connection = knex(configuration.development); //cria a conexão usando o knex e passando como parâmetros a conexão de desenvolvimento no knexfile.js

module.exports = connection; //exporta a conexão