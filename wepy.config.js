const path = require('path');
var prod = process.env.NODE_ENV === 'production';
const PluginUglifyjs = require('@wepy/plugin-uglifyjs')

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  build: {
  },
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
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator',
        '@babel/plugin-proposal-class-properties'
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
