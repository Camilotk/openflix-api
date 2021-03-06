'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')
const Env = use('Env')

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
    this.methods = ['update', 'delete']
    let list_actors_link = {
      "rel": "index", 
      "href": `${Env.get('APP_URL')}/actors`,
      "method": "GET"

    }
    return {
      name: model.name,
      image: model.image_url,
      links: this.mountLinksWith('actors', model.id).addLink(list_actors_link).getHateoas()
    }
  }
}

module.exports = ActorsTransformer
