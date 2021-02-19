'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')

/**
 * DirectorsTransformer class
 *
 * @class DirectorsTransformer
 * @constructor
 */
class DirectorsTransformer extends OpenflixTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      name: model.name,
      image: model.image_url,
      links: this.mountLinksWith('directors', model.id).getHateoas()
    }
  }
}

module.exports = DirectorsTransformer
