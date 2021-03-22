'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')
const Env = use('Env')

/**
 * VideosTransformer class
 *
 * @class VideosTransformer
 * @constructor
 */
class VideosTransformer extends OpenflixTransformer {
  /**
   * This method is used to transform the data.
   */
  static get defaultInclude () {
    return [
      'links'
    ]
  }

  transform (model) {
    return {
      title: model.title,
      description: model.description,
      thumbnail: `${Env.get('APP_URL')}/content/thumbnails/${model.thumbnail_url}`,
    }
  }

  includeLinks (video) {
    return this.item(video.getRelated('links'), 'LinkTransformer')
  }
}

module.exports = VideosTransformer
