'use strict'

/*
|--------------------------------------------------------------------------
| GenreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const GenreModel = use('App/Models/Genre')

class GenreSeeder {
  async run () {
    await GenreModel.create({
      name: "Adventure"
    })
    await GenreModel.create({
      name: "Action"
    })
    await GenreModel.create({
      name: "Drama"
    })
    await GenreModel.create({
      name: "Comedy"
    })
    await GenreModel.create({
      name: "Thriller"
    })
    await GenreModel.create({
      name: "Suspense"
    })
    await GenreModel.create({
      name: "Horror"
    })
    await GenreModel.create({
      name: "Romantic Comedy"
    })
    await GenreModel.create({
      name: "Musical"
    })
    await GenreModel.create({
      name: "Documentary"
    })
  }
}

module.exports = GenreSeeder
