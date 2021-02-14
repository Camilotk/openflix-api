# OpenFlix

This is the backend api of a open source video CMS licenced under MIT license. You can use it as you want, including making your own modifications and even close the source without any cost or warranty. The main goal of this code is to serve for anyone who wants to start a project of a Video Plataform, Streamming or OTT.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Requirements
- Node.js >= 8.0.0
- npm >= 3.0.0
- git

## Running the project
1. Configure your .env file
2. Run the following command to run startup migrations.

```js
adonis migration:run
```
3. Run the following command to seed the databases.
```js
adonis seed
```
4. Run your project with the following command.
```js
adonis serve --dev
```
