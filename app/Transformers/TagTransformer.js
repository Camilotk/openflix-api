'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')
const Env = use('Env')

/**
 * TagTransformer class
 *
 * @class TagTransformer
 * @constructor
 */
class TagTransformer extends OpenflixTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    let videos_link = {
      "rel": "get_videos",
      "href": `${Env.get('APP_URL')}/tags/videos`,
      "metod": "GET"
    } 
    return {
     // add your transformation object here
     name: model.name,
     links: this.mountLinksWith('tags', model.id).addLink(videos_link).getHateoas()
    }
  }
}

module.exports = TagTransformer
