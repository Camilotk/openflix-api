'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')
const Env = use('Env')

/**
 * GenresTransformer class
 *
 * @class GenresTransformer
 * @constructor
 */
class GenresTransformer extends OpenflixTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    let videos_link = {
      "rel": "videos",
      "href": `${Env.get('APP_URL')}/genres/${model.id}/videos`,
      "metod": "GET"
    } 
    return {
     // add your transformation object here
     name: model.name,
     links: this.mountLinksWith('tags', model.id).addLink(videos_link).getHateoas()
    }
  }
}

module.exports = GenresTransformer
