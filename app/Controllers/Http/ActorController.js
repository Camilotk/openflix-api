'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Actor = use('App/Models/Actor')

/**
 * Resourceful controller for interacting with actors
 */
class ActorController {
  /**
   * Show a list of all actors.
   * GET actors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, transform }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 15)
    const actors = await Actor.query().paginate(page, limit)
    return transform.paginate(actors, 'ActorTransformer')
  }

  /**
   * Create/save a new actor.
   * POST actors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) { 
    const actor = await Actor.create(request.all())
    return response.status(201).send(actor)
  }

  /**
   * Display a single actor.
   * GET actors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view, transform }) {
    const actor = await Actor.findOrFail(params.id)
    return actor
  }

  /**
   * Render a form to update an existing actor.
   * GET actors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update actor details.
   * PUT or PATCH actors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a actor with id.
   * DELETE actors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ActorController
