const path = require('path')

module.exports = {
  devServer: {
    port: 4044
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/styles/variables.less')]
    }
  }
}
