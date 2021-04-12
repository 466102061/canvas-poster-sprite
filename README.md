### canvas-poster-sprite
A poster plugin that can draw texts, paths and pictures to canvas, and export picture data.

#### Introduction | [简体中文](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/README-ZH.md)
+ Multiterminal support：[web-h5 | uni-app | wx-miniprogram | my-miniprogram | tt-miniprogram | swan-miniprogram | qq-miniprogram](https://github.com/466102061/canvas-poster-sprite/tree/main/dist)
+ Canvas support：draw texts, paths and pictures to canvas
+ Canvas z-index：pictures(preload=true) < paths < pictures < texts

#### Notes | [Update](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/update.md)
+ Text does not support art form, art form can be replaced by pictures.
+ Pictures resources support | HTTPS (HTTP attention to the problem of cross domain), only the web side support local resources (local service, please use the require import).
+ Pictures(preload=true)，can be first drawed to canvas.
+ The width and height of the canvas should be the same as the width and height of the poster image, so that the final composite image will not have excess white space.
+ The quality of exported images can be controlled through fields FileType and Quality. Generally, the quality of JPEG images is relatively low.
+ Inside uni, we call uni's API, it should be support app-vue, web and miniprogram. 

#### Useage
+ install：npm i canvas-poster-sprite  or yarn add canvas-poster-sprite
+ web：import CanvasPosterSprite from 'canvas-poster-sprite'
+ uni：import CanvasPosterSprite from 'canvas-poster-sprite/dist/uni-canvas-poster-sprite.js'
+ wx：import CanvasPosterSprite from 'canvas-poster-sprite/dist/wx-canvas-poster-sprite.js'
+ my：import CanvasPosterSprite from 'canvas-poster-sprite/dist/my-canvas-poster-sprite.js'
+ tt：import CanvasPosterSprite from 'canvas-poster-sprite/dist/tt-canvas-poster-sprite.js'
+ swan：import CanvasPosterSprite from 'canvas-poster-sprite/dist/swan-canvas-poster-sprite.js'
+ qq：import CanvasPosterSprite from 'canvas-poster-sprite/dist/qq-canvas-poster-sprite.js'
+ instance：new CanvasPosterSprite(setting)
```
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
})
```
#### examples
+ [screenshot](https://github.com/466102061/canvas-poster-sprite/tree/main/screenshot)
+ web：[examples/index.html](https://github.com/466102061/canvas-poster-sprite/tree/main/examples)
+ uni：[examples/components/uni-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
+ wx：[examples/components/wx-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
+ my：[examples/components/my-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
+ tt：[examples/components/tt-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
+ swan：[examples/components/swan-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
+ qq：[examples/components/qq-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
#### Configuration
+ let spriter = new CanvasPosterSprite(options)
+ options
+ web | uni | wx | my | tt | swan | qq

| param | type | require | default | desc |
| :----: | :----: | :----: | :----: | :---- |
| width | Number | -- | 640 | canvas width. |
| height | Number | -- | 640 | canvas height. |
| bgColor | String | -- | #fff | canvas background color. |
| fileType | String | -- | jpeg | type of pictures. eg.jpeg、png、gif |
| quality | Number | -- | 1 | quality of pictures. |
| pics | Array | -- | -- | pictures. [More](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-pic.md) |
| paths | Object | -- | -- | paths. [More](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-path.md) |
| texts | Array | -- | -- | texts. [More](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-text.md) |

+  uni | wx | my | tt | swan | qq

| param | type | require | default | desc |
| :----: | :----: | :----: | :----: | :---- |
| self | Object | yes | -- | content - this |
| canvasId | String | yes | -- | canvas-id |

+ uni

| param | type | require | default | desc |
| :----: | :----: | :----: | :----: | :---- |
| appPlus | Boolean | -- | false | app，whether transform pictures to base64 first，and draw to canvas，[fix：Android10 uni.canvasToTempFilePath Error.](https://ask.dcloud.net.cn/question/103303) |
| pixelRatio | Number | -- | 2 | app pixelRatio. |

+ spriter

| method | desc |
| :----:| :---- |
| spriter.then(callback) | callback(err, res) |

