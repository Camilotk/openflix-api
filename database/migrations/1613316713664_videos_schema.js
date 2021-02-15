'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideosSchema extends Schema {
  up () {
    this.create('videos', (table) => {
      table.increments()
      table.string('title', 200).notNullable()
      table.text('description')
      table.string('imdb_id')
      table.integer('duration_seconds').unsigned()
      table.string('thumbnail_url')
      table.string('poster_url')
      table.date('release')
      table.string('maturity_rating', 10)
      table.boolean('subtitle')
      table.integer('director_id').unsigned().references('id').inTable('directors')
      table.timestamps()
    })
  }

  down () {
    this.drop('videos')
  }
}

module.exports = VideosSchema
