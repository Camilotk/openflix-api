'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tag = use('App/Models/Tag')

/**
 * Resourceful controller for interacting with tags
 */
class TagController {
  /**
   * Show a list of all tags.
   * GET tags
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, transform }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 15)
    const tags = await Tag.query().paginate(page, limit)
    return transform.paginate(tags, 'TagsTransformer')
  }

  /**
   * Create/save a new tag.
   * POST tags
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const tag = await Tag.create(request.all())
    return response.status(201).send(tag)
  }

  /**
   * Display a single tag.
   * GET tags/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, transform }) {
    const tag = await Tag.findOrFail(params.id)
    return transform.item(tag, 'TagTransformer')
  }

  /**
   * Update tag details.
   * PUT or PATCH tags/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const tag = await Tag.findOrFail(params.id)
    tag.merge(request.all())
    await tag.save()
    return tag
  }

  /**
   * Delete a tag with id.
   * DELETE tags/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const tag = await Tag.findOrFail(params.id)
    await tag.delete()
    return response.status(204).send()
  }

  /**
   * Return all videos from tag.
   * GET tags/:id/videos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async videos({params, response}) {
    const tag = await Tag.findOrFail(params.id)
    const videos = tag.videos().fetch()
    return videos
  }
}

module.exports = TagController
