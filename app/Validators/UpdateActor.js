'use strict'

class UpdateActor {
  get rules () {
    return {
      // validation rules
      name: 'string',
      image_url: 'string'
    }
  }

  get validateAll () {
    return true
  }

  get messages () {
    return {
      'name.required': 'You must provide a name',
      'name.string': 'Invalid input type for name',
      'image_url.string': 'Invalid input type for name'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).json(errorMessages)
  }
}

module.exports = UpdateActor
