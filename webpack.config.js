const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const timeFormat = require("./src/utils/time.js")
const bannerPlugin = new webpack.BannerPlugin(
`@desc ${ pkg.description }
@version ${ pkg.version }
@author ${ pkg.author + ' ' + pkg.email }
@time ${ timeFormat("yyyy-MM-dd hh:mm:ss") }

@example
new CanvasPosterSprite({
   /* uni|wx|my|tt|swan|qq */
   self: this, 
   canvasId: 'canvas-id',

   /* web|uni|wx|my|tt|swan|qq */
   width: 640,
   height: 640,
   pics: [
     {src: 'poster...', x: 0, y: 0, preload: true},
     {src: 'qrcode...', x: 340, y: 500, w: 100, h: 100},
   ],
   paths: {
     rect: [
        {x: 340, y: 500, w: 200, h: 200, r: 10, color: "#000"}
     ],
     circle: [
        {x: 200, y: 200, r: 50, color: "#000", type: "fill"}
     ],
   },
   texts: [
     {text: '466102061@qq.com', font: 20, color: '#333', x: 340, y: 490, w: 200, align: "center"}
   ],
   callback: function(err, res){
     if(err){
       console.log("canvas-fail：", err);
       return;
     }
     let { tempFilePath, canvas } = res;
     console.log("canvas-success：", res);
  }
})`
)
module.exports = {
  mode : 'production',
  // target : ['web', 'es5'],
  entry : {
  	'my-canvas-poster-sprite' : path.resolve(__dirname, './src/my-index.js'),
    'qq-canvas-poster-sprite' : path.resolve(__dirname, './src/qq-index.js'),
    'swan-canvas-poster-sprite' : path.resolve(__dirname, './src/swan-index.js'),
    'tt-canvas-poster-sprite' : path.resolve(__dirname, './src/tt-index.js'),
    'uni-canvas-poster-sprite' : path.resolve(__dirname, './src/uni-index.js'),
    'web-canvas-poster-sprite' : path.resolve(__dirname, './src/web-index.js'),
    'wx-canvas-poster-sprite' : path.resolve(__dirname, './src/wx-index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget : 'umd',
    library : 'CanvasPosterSprite'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins : [bannerPlugin]
}