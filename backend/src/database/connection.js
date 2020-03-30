const knex = require('knex'); 
const configuration = require('../../knexfile'); //importa a configuração do DB

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; //variáveis de ambiente - TESTE


const connection = knex(config); //cria a conexão usando o knex e passando como parâmetros a conexão de desenvolvimento no knexfile.js

module.exports = connection; //exporta a conexão