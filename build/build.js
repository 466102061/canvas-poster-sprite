const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const webpackOutput = require('./output.js')
const webpackConfig = require('../webpack.config.js')
// console.log("webpack-配置：", webpackConfig);

const spinner = ora('building for production...')
spinner.start()

rm(path.resolve(__dirname, '../dist'), err =>{
	if(err) throw err;
	webpackOutput(webpackConfig, spinner);
})