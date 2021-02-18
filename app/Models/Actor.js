'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Actor extends Model {
  movies() {
    return this.belongsToMany('App/Models/Video')
  }
}

module.exports = Actor
