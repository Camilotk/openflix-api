'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')

/**
 * ActorTransformer class
 *
 * @class ActorTransformer
 * @constructor
 */
class ActorsTransformer extends OpenflixTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      name: model.name,
      image: model.image_url,
      links: this.mountLinksWith('actors', model.id).getHateoas()
    }
  }
}

module.exports = ActorsTransformer
