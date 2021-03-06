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
    this.methods = ['update', 'delete']
    let list_tags_link = {
      "rel": "index", 
      "href": `${Env.get('APP_URL')}/tags`,
      "method": "GET"

    }
    let videos_link = {
      "rel": "videos",
      "href": `${Env.get('APP_URL')}/tags/${model.id}/videos`,
      "metod": "GET"
    } 
    return {
     // add your transformation object here
     name: model.name,
     links: this.mountLinksWith('tags', model.id)
                .addLink(list_tags_link)
                .addLink(videos_link)
                .getHateoas()
    }
  }
}

module.exports = TagTransformer
