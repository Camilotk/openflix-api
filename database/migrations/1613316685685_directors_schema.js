'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DirectorsSchema extends Schema {
  up () {
    this.create('directors', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.string('image_url')
      table.timestamps()
    })
  }

  down () {
    this.drop('directors')
  }
}

module.exports = DirectorsSchema
