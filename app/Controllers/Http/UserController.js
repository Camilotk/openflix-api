'use strict'

const User = use("App/Models/User")

class UserController {
  async index({ request, transform }) {
    const users = await User.all()
    return transform.collection(users, 'UserTransformer')
  }

  async store({ request, response }) {
     const user = await User.create(request.all())
     return response.status(201).send(user)
  }
}

module.exports = UserController
