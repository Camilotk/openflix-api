'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActorsSchema extends Schema {
  up () {
    this.create('actors', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.string('image_url')
      table.timestamps()
    })
  }

  down () {
    this.drop('actors')
  }
}

module.exports = ActorsSchema
