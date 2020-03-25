const path = require('path')
const PluginUglifyjs = require('@wepy/plugin-uglifyjs')
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {},
  static: ['./src/images'],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: ['@babel/preset-env'],
      plugins: [
        '@wepy/babel-plugin-import-regenerator',
        '@babel/plugin-proposal-class-properties',
        ['global-define', {
          __NODE__: process.env.NODE_ENV
        }]
      ]
    }
  },
  plugins: [
    PluginUglifyjs({
      compress: {
        drop_console: false
      }
    })
  ],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
