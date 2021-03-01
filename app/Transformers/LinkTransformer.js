'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

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
      url_1080: model.url,
      url_720: model.url_720,
      url_360: model.url_360,
      url_140: model.url_140
    }
  }
}

module.exports = LinkTransformer
