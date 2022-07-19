# Space Invaders replica game


## A simple ES6 Webpack based reconstruction of the Space Invaders game as a base showcase application for [ConfigCat Feature Flag](https://configcat.com) testing with [melonJS](https://github.com/melonjs/melonJS).


This is a companion app for the [Space Invaders game with melonJS and Feature Flags](https://configcat.com/blog/2022/02/19/feature-flags-in-melonjs/) ConfigCat blogpost.



## How to run

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


Step by step tutorial from MelonJS and other useful resources:
-------------------------------------------------------------------------------

  - [Space_Invaders_Tutorial](https://melonjs.github.io/tutorial-space-invaders/)
  - [ConfigCat_documentation](https://configcat.com/docs/)
  - [melonJS 2](https://github.com/melonjs/melonJS)

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/)

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author
[Manuel Popa](https://github.com/ManuelPopa)

## Contributions
Contributions are welcome!
