const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const time = require("dayjs")().format("YYYY-M-D HH:mm:ss")
const bannerPlugin = new webpack.BannerPlugin(
`@desc ${ pkg.description }
@version ${ pkg.version }
@author ${ pkg.author + ' ' + pkg.email }
@time ${ time }

@example
new CanvasPosterSprite({
   /* uni */
   appPlus : false,             // app端，是否先把图片转换成base64，再画图，fix：【Android10 真机 uni.canvasToTempFilePath报错】https://ask.dcloud.net.cn/question/103303
   pixelRatio : pixelRatio,     //(app真机)设备分辨率

   /* uni|wx */
   self : this,                 //当前运行环境 - this
   canvasId : 'myCanvas',       //canvas组件实例 - canvas-id

   /* uni|wx|web */
   width : 640,
   height : 640,
   pics:[
   {src : 'posterBg...', x : 0, y : 0, preload : true},
   {src : 'qrcode...', x : 340, y : 500, w: 100, h : 100},
   {src : 'logo...', x : 370, y : 540},
 ],
 texts :[
   {text : '小小咖', font : '25px 微软雅黑', color : 'red', x : 340, y : 490, w : 200, align : "center", multiple : true},
 ],
   paths : {
   rect : [
     {x : 340, y : 500, w : 200, h : 200, r : 10, color : "#000"}
   ],
   circle : [
     {x : 200, y : 200, r : 50, color : "#000",type : "fill"}
   ],
   line : [
     {x1 : 100, y1 : 100, x2 : 300, y2 : 150, color : "#000", lineWidth : 1 }
   ]
 },
 callback : function(err, res){
  if(err){
    console.log("合成失败：",err);
    return;
  }
  console.log("合成成功：",res);
 }
})`
)
module.exports = {
  mode : 'production',
  // target : ['web', 'es5'],
  entry : {
    'wx-canvas-poster-sprite' : path.resolve(__dirname, './src/wx-index.js'),
    'web-canvas-poster-sprite' : path.resolve(__dirname, './src/web-index.js'),
  	'uni-canvas-poster-sprite' : path.resolve(__dirname, './src/uni-index.js'),
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