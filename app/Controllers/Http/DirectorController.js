'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Director = use('App/Models/Director')

/**
 * Resourceful controller for interacting with directors
 */
class DirectorController {
  /**
   * Show a list of all directors.
   * GET directors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, transform }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 15)
    const directors = await Director.query().paginate(page, limit)
    return transform.paginate(directors, 'DirectorsTransformer')
  }

  /**
   * Create/save a new director.
   * POST directors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const director = await Director.create(request.all())
    return response.status(201).send(director)
  }

  /**
   * Display a single director.
   * GET directors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, transform }) {
    const director = await Director.findOrFail(params.id)
    return transform.item(director, 'DirectorTransformer')
  }

  /**
   * Update director details.
   * PUT or PATCH directors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const director = await Director.findOrFail(params.id)
    director.merge(request.all())
    await director.save()
    return director
  }

  /**
   * Delete a director with id.
   * DELETE directors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const director = await Director.findOrFail(params.id)
    await director.delete()
    return response.status(204).send()
  }

  /**
   * Return all videos from director.
   * GET tags/:id/videos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async videos({ params }) {
    const director = await Director.findOrFail(params.id)
    const videos = director.videos().fetch()
    return videos
  }
}

module.exports = DirectorController
