'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')

/**
 * UserTransformer class
 *
 * @class UserTransformer
 * @constructor
 */
class UserTransformer extends OpenflixTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      name: model.username,
      email: model.email,
      links: this.mountLinksWith('users', model.id).getHateoas()
    }
  }
}

module.exports = UserTransformer
