'use strict'

const User = use("App/Models/User")

class UserController {

  async index({ request }) {
    const users = await User.all()
    return users
  }

  async create({ request, response }) {
     const user = await User.create(request.all())
     return response.status(201).send(user)
  }
}

module.exports = UserController
