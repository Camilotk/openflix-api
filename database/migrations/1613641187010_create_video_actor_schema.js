'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateVideoActorSchema extends Schema {
  up () {
    this.create('video_actors', (table) => {
      table.increments()
      table.integer('video_id').unsigned().index()
      table.integer('actor_id').unsigned().index()
      table.foreign('video_id').references('id').on('videos').onDelete('cascade')
      table.foreign('actor_id').references('id').on('actors').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('video_actors')
  }
}

module.exports = CreateVideoActorSchema
