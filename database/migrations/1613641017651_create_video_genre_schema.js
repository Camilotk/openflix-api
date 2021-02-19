'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateVideoGenreSchema extends Schema {
  up () {
    this.create('genre_video', (table) => {
      table.increments()
      table.integer('video_id').unsigned().index()
      table.integer('genre_id').unsigned().index()
      table.foreign('video_id').references('id').on('videos').onDelete('cascade')
      table.foreign('genre_id').references('id').on('genres').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('genre_video')
  }
}

module.exports = CreateVideoGenreSchema
