'use strict'

const OpenflixTransformer = use('App/Transformers/OpenflixTransformer')

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
      thumbnail: 'http://localhost:3333/content/thumbnail/default.jpg',
    }
  }

  includeLinks (video) {
    return this.item(video.getRelated('links'), 'LinkTransformer')
  }
}

module.exports = VideosTransformer
