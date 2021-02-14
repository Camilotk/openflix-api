'use strict'

/*
|--------------------------------------------------------------------------
| TagSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const TagModel = use('App/Models/Tag')

class TagSeeder {
  async run () {
    await TagModel.create({
      name: "Wine and Beverage"
    })
    await TagModel.create({
      name: "Independent"
    })
    await TagModel.create({
      name: "Understated Movie"
    })
    await TagModel.create({
      name: "Critically Acclaimed"
    })
    await TagModel.create({
      name: "Animal Tales"
    })
    await TagModel.create({
      name: "Social-Issue"
    })
    await TagModel.create({
      name: "Teen"
    })
    await TagModel.create({
      name: "Inspiring"
    })
    await TagModel.create({
      name: "Crime Thrillers"
    })
    await TagModel.create({
      name: "Sports"
    })
    await TagModel.create({
      name: "Faith and Spirituality"
    })
    await TagModel.create({
      name: "Kids"
    })
    await TagModel.create({
      name: "Romance"
    })
    await TagModel.create({
      name: "Campy Movies"
    })
    await TagModel.create({
      name: "Courtroom"
    })
    await TagModel.create({
      name: "Based on Book"
    })
    await TagModel.create({
      name: "Romantic"
    })
    await TagModel.create({
      name: "Satire"
    })
    await TagModel.create({
      name: "Period piece"
    })
    await TagModel.create({
      name: "Tearjerker"
    })
    await TagModel.create({
      name: "Scream"
    })
    await TagModel.create({
      name: "Western"
    })
    await TagModel.create({
      name: "Screwball Comedy"
    })
    await TagModel.create({
      name: "Cult"
    })
    await TagModel.create({
      name: "Showbiz"
    })
  }
}

module.exports = TagSeeder
