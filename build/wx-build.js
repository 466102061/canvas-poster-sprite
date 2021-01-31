const path = require('path')
const ora = require('ora')
const webpackOutput = require('./output.js')
const webpackConfig = require('../webpack.config.js')
webpackConfig.entry = {
    'wx-canvas-poster-sprite' : path.resolve(__dirname, '../src/wx-index.js')
}

const spinner = ora('wx building for production...')
spinner.start()

// console.log('配置：', webpackConfig);
webpackOutput(webpackConfig, spinner);