'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Helpers = use('Helpers')
const Video = use('App/Models/Video')
const Env = use('Env')

const { exec } = require('child_process')

/**
 * Resourceful controller for interacting with videos
 */
class VideoController {
  /**
   * Show a list of all videos.
   * GET videos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async index ({ request, transform }) {
    
  }

  async index ({ request, transform }) {

    const page = request.input('page', 1)
    const limit = request.input('limit', 15)
    const videos = await Video.query().paginate(page, limit)
    return transform.paginate(videos, 'VideosTransformer')
  }

  /**
   * Render a form to be used for creating a new video.
   * GET videos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, auth, view }) {

    const { title } = request.only(['title'])
    console.log(title)

    const videoFile = request.file('video', {
      types: ['video'],
      size: '2gb'
    })

    await videoFile.move(Helpers.tmpPath(`uploads`), { overwrite: true })

    if(!videoFile.moved()) {
      return videoFile.error() 
    }

    console.log("Started the video enconding!")
    
    const encodeStatus = exec('npm run encode')

    encodeStatus.stdout.on('data', function(data) {
      console.log(data); 
    });

    const imageFile = request.file('thumbnail', {
      types: ['image'],
      size: '500mb'
    })

    let thumbnail = request.file('thumbnail') || false

    if (thumbnail && Object.keys(thumbnail).length > 0){
      await imageFile.move(Helpers.tmpPath(`thumbnails`), { 
        name: `${title}.${imageFile.extname}`, 
        overwrite: true
      })

      if(!imageFile.moved()) {
        return imageFile.error() 
      }
      const image_name = videoFile.fileName.split('.').slice(0, -1).join('.')
      thumbnail = imageFile.fileName
    } else {
      thumbnail = 'default.jpg'
    }
  
    const video = await Video.create({
      ...request.all(),
      title: title,
      thumbnail_url: thumbnail
    })
    
    const video_name = videoFile.fileName.split('.').slice(0, -1).join('.')

    await video.links().create({ 
      url: `${video_name}/${videoFile.fileName}`, 
      url_720: `${video_name}/${video_name}-720.${videoFile.extname}`,
      url_360: `${video_name}/${video_name}-360.${videoFile.extname}`,
      url_140: `${video_name}/${video_name}-140.${videoFile.extname}`
    })
    
    return { status: "Ok" }
  }

  /**
   * Create/save a new video.
   * POST videos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single video.
   * GET videos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing video.
   * GET videos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update video details.
   * PUT or PATCH videos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a video with id.
   * DELETE videos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = VideoController
