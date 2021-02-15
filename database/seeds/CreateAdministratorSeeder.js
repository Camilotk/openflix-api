'use strict'

/*
|--------------------------------------------------------------------------
| CreateAdministratorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const UserModel = use('App/Models/User')

class CreateAdministratorSeeder {
  async run () {
    const role = await Factory.model('Adonis/Acl/Role').create()
    const user = await UserModel.create({
      username: 'admin',
      email: 'admin@admin.com',
      password: 'admin'
    })

    await user.roles().attach([role.id])
  }
}

module.exports = CreateAdministratorSeeder
