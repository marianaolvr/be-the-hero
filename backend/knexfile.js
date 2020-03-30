// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite' //arquivo que vai armazenar os dados da minha base
    },
    migrations:{ //configuração
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, //valor padrão das colunas de DB seja sempre nulo 
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite' //arquivo que vai armazenar os dados da minha base
    },
    migrations:{ //configuração
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, //valor padrão das colunas de DB seja sempre nulo 
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
