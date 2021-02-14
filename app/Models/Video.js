'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Video extends Model {
  link() {
    return this.hasOne('App/Models/VideoLink')
  }

  director() {
    return this.hasOne('App/Models/Director')
  }

  genres() {
    return this.belongsToMany('App/Models/Genre')
               .withPivot(['name'])
  }

  tags() {
    return this.belongsToMany('App/Models/Tag')
               .withPivot(['name'])
  }

  actors() {
    return this.belongsToMany('App/Models/Actor')
               .withPivot(['name'])
  }
}

module.exports = Video
