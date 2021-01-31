const path = require('path')
const ora = require('ora')
const webpackOutput = require('./output.js')
const webpackConfig = require('../webpack.config.js')
webpackConfig.entry = {
    'web-canvas-poster-sprite' : path.resolve(__dirname, '../src/web-index.js')
}

const spinner = ora('web building for production...')
spinner.start()

// console.log('配置：', webpackConfig);
webpackOutput(webpackConfig, spinner);