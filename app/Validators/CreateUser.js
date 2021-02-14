'use strict'

class CreateUser {
  get rules () {
    return {
      // validation rules
      username: 'required|string|min:3',
      email: 'required|email|unique:users',
      password: 'required|string'
    }
  }

  get validateAll () {
    return true
  }

  get messages () {
    return {
      'username.required': 'You must provide an username',
      'username.string': 'Invalid input type for username',
      'username.min': 'The username must have at least 4 characters',
      'email.required': 'You must provide an email',
      'email.unique': 'This email already exists on our database',
      'password.string': 'Invalid input type for password',
      'password.required': 'You must provide a password'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json(errorMessages)
  }
}

module.exports = CreateUser
