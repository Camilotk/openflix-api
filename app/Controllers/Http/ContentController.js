'use strict'

const Helpers = use('Helpers')

class ContentController {
    async showThumbnail ({ params, response }) {
        return response.download(Helpers.tmpPath(`thumbnails/${params.thumbnail}`))
    }

    async showVideo ({ params, response }) {
        return response.download(Helpers.tmpPath(`uploads/${params.path}/${params.video}`))
    }
}

module.exports = ContentController
