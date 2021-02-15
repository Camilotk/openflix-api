![Openflix Logo](https://i.ibb.co/ZcKq5Rk/openflix-logo.png)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![](https://img.shields.io/badge/node->=%20v8.8.0-yellow)]()
![](https://img.shields.io/github/last-commit/Camilotk/openflix-api)
<hr>
This is the backend api of a open source video CMS licenced under MIT license. You can use it as you want, including making your own modifications and even close the source without any cost or warranty. The main goal of this code is to serve for anyone who wants to start a project of a Video Plataform, Streamming or OTT.

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
