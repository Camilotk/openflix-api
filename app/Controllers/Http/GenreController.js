'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Genre = use('App/Models/Genre')

/**
 * Resourceful controller for interacting with genres
 */
class GenreController {
  /**
   * Show a list of all genres.
   * GET genres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, transform }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 15)
    const genres = await Genre.query().paginate(page, limit)
    return transform.paginate(genres, 'GenresTransformer')
  }

  /**
   * Create/save a new genre.
   * POST genres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const genre = await Genre.create(request.all())
    return response.status(201).send(genre)
  }

  /**
   * Display a single genre.
   * GET genres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, transform }) {
    const genre = await Genre.findOrFail(params.id)
    return transform.item(genre, 'GenreTransformer')
  }

  /**
   * Update genre details.
   * PUT or PATCH genres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const genre = await Genre.findOrFail(params.id)
    genre.merge(request.all())
    await genre.save()
    return genre
  }

  /**
   * Delete a genre with id.
   * DELETE genres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const genre = await Genre.findOrFail(params.id)
    await genre.delete()
    return response.status(204).send()
  }

  /**
   * Return all videos from genre.
   * GET genres/:id/videos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async videos({params, response}) {
    const genre = await Genre.findOrFail(params.id)
    const videos = genre.videos().fetch()
    return videos
  }
}

module.exports = GenreController
