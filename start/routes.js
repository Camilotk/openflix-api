'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/sessions', 'SessionController.create')

Route.group(() => {
  Route.get('/', 'UserController.index').middleware('auth')
  Route.get('/:id', 'UserController.show').middleware('auth')
  Route.post('/', 'UserController.create').validator('CreateUser')
  Route.put('/:id', 'UserController.update').validator('UpdateUser').middleware('auth')
  Route.delete('/:id', 'UserController.delete').middleware('auth')
}).prefix('users')

Route.group(() => {
  Route.get('/', 'ActorController.index')
  Route.get('/:id', 'ActorController.show')
  Route.post('/', 'ActorController.create').validator('CreateActor')
  Route.put('/:id', 'ActorController.update').validator('UpdateActor')
  Route.delete('/:id', 'ActorController.delete')
}).prefix('actors').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'DirectorController.index')
  Route.get('/:id', 'DirectorController.show')
  Route.post('/', 'DirectorController.create').validator('CreateDirector')
  Route.put('/:id', 'DirectorController.update').validator('UpdateDirector')
  Route.delete('/:id', 'DirectorController.delete')
}).prefix('directors').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'GenreController.index')
  Route.get('/:id', 'GenreController.show')
  Route.post('/', 'GenreController.create').validator('CreateGenre')
  Route.put('/:id', 'GenreController.update').validator('UpdateGenre')
  Route.delete('/:id', 'GenreController.delete')
}).prefix('genres').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'TagController.index')
  Route.get('/:id', 'TagController.show')
  Route.post('/', 'TagController.create').validator('CreateTag')
  Route.put('/:id', 'TagController.update').validator('UpdateTag')
  Route.delete('/:id', 'TagController.delete')
}).prefix('tags').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'VideoController.index')
  Route.get('/:id', 'VideoController.show')
  Route.post('/', 'VideoController.create').validator('CreateVideo')
  Route.put('/:id', 'VideoController.update').validator('UpdateVideo')
  Route.delete('/:id', 'VideoController.delete')
}).prefix('video').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'VideoLinkController.index')
  Route.get('/:id', 'VideoLinkController.show')
  Route.post('/', 'VideoLinkController.create').validator('CreateLink')
  Route.put('/:id', 'VideoLinkController.update').validator('UpdateLink')
  Route.delete('/:id', 'VideoLinkController.delete')
}).prefix('links').middleware(['auth', 'is:administrator'])
