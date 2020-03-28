
exports.up = function(knex) { //método up é sempre para a criação da tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
  
};

exports.down = function(knex) { // caso precise voltar atrás na criação de uma tabela, deletar
  return knex.schema.dropTable('ongs');
};
