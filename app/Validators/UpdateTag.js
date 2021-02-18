'use strict'

class CreateTag {
  get rules () {
    return {
      // validation rules
      name: 'string|min:3'
    }
  }

  get validateAll () {
    return true
  }

  get messages () {
    return {
      'name.required': 'You must provide a name',
      'name.string': 'Invalid input type for name',
      'name.min': 'The name must have at least 4 characters'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json(errorMessages)
  }
}

module.exports = CreateTag
