'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genre extends Model {
  videos () {
    return this.belongsToMany('App/Models/Video')
               .withPivot(['name'])
  }
}

module.exports = Genre
