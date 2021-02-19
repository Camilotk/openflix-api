'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')
const Env = use('Env')

/**
 * DirectorTransformer class
 *
 * @class DirectorTransformer
 * @constructor
 */
class DirectorTransformer extends OpenflixTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    this.methods = ['update', 'delete']
    let list_actors_link = {
      "rel": "index", 
      "href": `${Env.get('APP_URL')}/directors`,
      "method": "GET"

    }
    return {
      name: model.name,
      image: model.image_url,
      links: this.mountLinksWith('directors', model.id).addLink(list_actors_link).getHateoas()
    }
  }
}

module.exports = DirectorTransformer
