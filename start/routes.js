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
  Route.post('/', 'UserController.store').validator('CreateUser')
  Route.put('/:id', 'UserController.update').validator('UpdateUser').middleware('auth')
  Route.delete('/:id', 'UserController.destroy').middleware('auth')
}).prefix('users')

Route.group(() => {
  Route.get('/', 'ActorController.index')
  Route.get('/:id', 'ActorController.show')
  Route.post('/', 'ActorController.store').validator('CreateActor')
  Route.put('/:id', 'ActorController.update').validator('UpdateActor')
  Route.delete('/:id', 'ActorController.destroy')
}).prefix('actors').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'DirectorController.index')
  Route.get('/:id', 'DirectorController.show')
  Route.post('/', 'DirectorController.store').validator('CreateDirector')
  Route.put('/:id', 'DirectorController.update').validator('UpdateDirector')
  Route.delete('/:id', 'DirectorController.destroy')
  Route.get('/:id/videos', 'GenreController.videos')
}).prefix('directors').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'GenreController.index')
  Route.get('/:id', 'GenreController.show')
  Route.post('/', 'GenreController.store').validator('CreateGenre')
  Route.put('/:id', 'GenreController.update').validator('UpdateGenre')
  Route.delete('/:id', 'GenreController.destroy')
  Route.get('/:id/videos', 'GenreController.videos')
}).prefix('genres').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'TagController.index')
  Route.get('/:id', 'TagController.show')
  Route.post('/', 'TagController.store').validator('CreateTag')
  Route.put('/:id', 'TagController.update').validator('UpdateTag')
  Route.delete('/:id', 'TagController.destroy')
  Route.get('/:id/videos', 'TagController.videos')
}).prefix('tags').middleware(['auth', 'is:administrator'])

Route.group(() => {
  Route.get('/', 'VideoController.index')
  Route.get('/:id', 'VideoController.show')
  Route.post('/',  'VideoController.create')
  Route.put('/:id', 'VideoController.update').validator('UpdateVideo')
  Route.delete('/:id', 'VideoController.destroy')
}).prefix('videos')

Route.group(() => {
  Route.get('/', 'VideoLinkController.index')
  Route.get('/:id', 'VideoLinkController.show')
  Route.post('/', 'VideoLinkController.store').validator('CreateLink')
  Route.put('/:id', 'VideoLinkController.update').validator('UpdateLink')
  Route.delete('/:id', 'VideoLinkController.destroy')
}).prefix('links')

Route.group(() => {
  Route.get('/thumbnails/:thumbnail', 'ContentController.showThumbnail')
  Route.get('/video/:path/:video', 'ContentController.showVideo')
}).prefix('content')
