'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  connection: (Env.get('NODE_ENV') === 'development')
                                  ? Env.get('DEV_CONNECTION')
                                  : Env.get('PROD_CONNECTION'),

  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be a good choice for a development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false)
  },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_HOST')
                                      : Env.get('PROD_HOST'),
      port: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_PORT')
                                      : Env.get('PROD_PORT'),
      user: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_USER')
                                      : Env.get('PROD_USER'),
      password: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_PASSWORD')
                                      : Env.get('PROD_PASSWORD'),
      database: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_DATABASE')
                                      : Env.get('PROD_DATABASE')
    },
    debug: Env.get('DB_DEBUG', false)
  },

  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  |
  */
  pg: {
    client: 'pg',
    connection: {
      host: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_HOST')
                                      : Env.get('PROD_HOST'),
      port: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_PORT')
                                      : Env.get('PROD_PORT'),
      user: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_USER')
                                      : Env.get('PROD_USER'),
      password: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_PASSWORD')
                                      : Env.get('PROD_PASSWORD'),
      database: (Env.get('NODE_ENV') === 'development')
                                      ? Env.get('DEV_DATABASE')
                                      : Env.get('PROD_DATABASE')
    },
    debug: Env.get('DB_DEBUG', false)
  }
}
