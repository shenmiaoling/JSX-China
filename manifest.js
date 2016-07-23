const webpackAssets = require('./assets/webpack-assets')

module.exports = process.env.NODE_ENV == 'production' ? {
  index: {
    js: `/assets/${webpackAssets.index.js}`,
    css: `/assets/${webpackAssets.index.css}`
  },
  vendors: {
    js: `/assets/${webpackAssets.vendors.js}`
  }
} : {
  index: {
    js: '/assets/application.js',
    css: '/assets/application.css'
  },
  vendors: {
    js: '/assets/vendors.js'
  }
}
