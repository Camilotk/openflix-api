'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VideoLinksSchema extends Schema {
  up () {
    this.create('video_links', (table) => {
      table.increments()
      table.string('url', 200).notNullable()
      table.string('url_140', 200)
      table.string('url_360', 200)
      table.string('url_720', 200)
      table.string('codec', 100)
      table.integer('video_id').unsigned().references('id').inTable('videos')
      table.timestamps()
    })
  }
  down () {
    this.drop('video_links')
  }
}

module.exports = VideoLinksSchema
