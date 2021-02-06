const path = require('path')
const ora = require('ora')
const webpackOutput = require('./output.js')
const webpackConfig = require('../webpack.config.js')
webpackConfig.entry = {
    'qq-canvas-poster-sprite' : path.resolve(__dirname, '../src/qq-index.js')
}

const spinner = ora('qq building for production...')
spinner.start()

// console.log('配置：', webpackConfig);
webpackOutput(webpackConfig, spinner);