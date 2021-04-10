const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const timeFormat = require("./src/utils/time.js")
const bannerPlugin = new webpack.BannerPlugin(
`@desc ${ pkg.description }
@version ${ pkg.version }
@author ${ pkg.author + ' ' + pkg.email }
@update ${ timeFormat("yyyy-MM-dd hh:mm:ss") }

@example
new CanvasPosterSprite({
  /* uni|wx|my|tt|swan|qq */
  self: this, 
  canvasId: 'canvas-id',

  /* web|uni|wx|my|tt|swan|qq */
  width: 900,
  height: 1600,
  bgColor: '#dddddd',
  paths : {
    circle : [
      {x: 214, y: 1123, w: 56, h: 56, r: 28, type: "fill", color: "#ffffff"}
    ],
    rect : [
      {x: 324, y: 1209, w: 252, h: 252, type: "fill", color: "#e6e6e6"},
      {x: 325, y: 1210, w: 250, h: 250, type: "fill", color: "#ffffff"},
      {x: 206, y: 1117, w: 488, h: 68, r: 34, type: "fill", color: "rgba(0, 0, 0, .15)"},
      {x: 376.5, y: 1520.5, w: 152, h: 44, r: 22, lineWidth: 4, color: "#000000"}
    ],
    triangle : [
      {points : [{x: 450, y: 1198}, {x: 462, y: 1185}, {x: 439, y: 1185}], type: "fill", color: "rgba(0, 0, 0, .15)"}
    ],
    line : [
      {x1: 360, y1: 1490.5, x2: 400, y2: 1490.5, lineWidth: 2, color: "#000000"},
      {x1: 505, y1: 1490.5, x2: 545, y2: 1490.5, lineWidth: 2, color: "#000000"}
    ]
  },
  /*pics : [
    {x: 0, y: 0, w: 900, h: 1600, preload: true, src: "./img/bg-zm.jpg"},
    {x: 328, y: 1213, w: 244, h: 244, src: "./img/qrcode-zm.png"},
    {x: 215, y: 1124, w: 54, h: 54, r: 27, src: "./img/icon.jpeg"}
  ],*/
  texts: [
    {x: 280, y: 1152, font: "26px 微软雅黑", color: "#FFE506", text: "小小咖侠侣店"},
    {x: 436, y: 1152, font: "26px 微软雅黑", color: "#ffffff", text: "邀请你注册侠侣联盟"},
    {x: 328, y: 1493, w: 250, font: "24px 微软雅黑", align: "center", color: "#000000", text: "邀 请 码"},
    {x: 328, y: 1543, w: 250, font: "28px Arail", align: "center", color: "#000000", text: "3ZGVTV"}
  ]
}).then((err, res)=>{
   if(err){
     console.log("canvas-fail：", err);
     return;
   }
   let { tempFilePath, canvas } = res;
   console.log("canvas-success：", res);
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