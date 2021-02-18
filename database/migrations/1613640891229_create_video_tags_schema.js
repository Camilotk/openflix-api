'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTagVideoSchema extends Schema {
  up () {
    this.create('tag_video', (table) => {
      table.increments()
      table.integer('video_id').unsigned().index()
      table.integer('tag_id').unsigned().index()
      table.foreign('video_id').references('id').on('videos').onDelete('cascade')
      table.foreign('tag_id').references('id').on('tags').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('tag_video')
  }
}

module.exports = CreateTagVideoSchema
