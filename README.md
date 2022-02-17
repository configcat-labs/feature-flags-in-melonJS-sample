# Space Invaders replica game

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/melonjs/es6-boilerplate/blob/master/LICENSE)

A simple ES6 Webpack based reconstruction of the Space Invaders game as a base showcase application for ConfigCat Feature Flag testing with [melonJS](https://github.com/melonjs/melonJS), built with :
- [melonJS 2](https://github.com/melonjs/melonJS)
- [ECMAScript 6](http://es6-features.org) structure and semantic
- [Webpack](https://webpack.js.org/guides)
- [ConfigCat](https://configcat.com/docs/)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) plugin for local development
- [Hot Reloading](https://webpack.js.org/concepts/hot-module-replacement) dev server
- Basic Asset Build [management](https://webpack.js.org/plugins/copy-webpack-plugin/)
- Minification and Transpiling to ES5 using [Babel](https://babeljs.io/docs/setup/#installation)
- Favicon support using the [favicons Webpack Plugin)](https://www.npmjs.com/package/favicons-webpack-plugin)

## Prerequisites

Ensure you have [Node.js](http://nodejs.org/) installed, then install all the build dependencies in the folder where you cloned the repository :

    $ [sudo] npm install

## Usage

- `npm run dev` to start the dev server on watch mode at `localhost:9000`.

## Folder structure

```none
src
└── data  
|    ├── img
└── js
|    ├── renderables
|    └── stage
├── index.js
├── index.css
├── index.html
├── manifest.js
```

- `src`
  - the root folder for your game source code
  - The entry file is [index.js](src/index.js).
  - [index.css](src/index.css) and [index.html](src/index.html) are default templates that can be customized
  - [manifest.js](src/manifest.js) is a list of asset to be preloaded by melonJS (these won't be automatically imported and bundled by webpack)
- `scr/js`
  - add your source classes here
- `scr/data`
  - where to add your game assets


Step by step tutorial from MelonJS and other usefull resources:
-------------------------------------------------------------------------------
If you need technical support, you can contact us through the following channels :

  - [melonJS developer forum](http://www.html5gamedevs.com/forum/32-melonjs/)
  - [ConfigCat_documentation](https://configcat.com/docs/)
  - [Space_Invaders](https://melonjs.github.io/tutorial-space-invaders/)
