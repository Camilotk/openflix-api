'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const Env = use('Env')

/**
 * LinkTransformer class
 *
 * @class LinkTransformer
 * @constructor
 */
class LinkTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      url_1080: `${Env.get('APP_URL')}/content/video/${model.url}`,
      url_720: `${Env.get('APP_URL')}/content/video/${model.url_720}`,
      url_360: model.url_360,
      url_140: model.url_140
    }
  }
}

module.exports = LinkTransformer
