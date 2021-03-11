### canvas-poster-sprite
一个canvas海报合成插件，可以绘制文本，路径和图片到画布，并导出图片数据。

#### 功能简介 | [English](https://github.com/466102061/canvas-poster-sprite#readme)
+ 多端支持：[web-h5 | uni-uniapp | wx-微信小程序 | my-支付宝小程序 | tt-头条小程序 | swan-百度小程序 | qq-qq小程序](https://github.com/466102061/canvas-poster-sprite/tree/main/dist)
+ 功能支持：图片、路径(矩形、圆形、三角/多边形、分割线-实线或者虚线)、文本(单行、多行)
+ 画布层级：优先级高的图(preload=true) < 路径 < 图片 < 文本

#### 注意事项
+ 文本暂不支持艺术体，艺术体可用图片代替
+ 图片资源支持http|https(web注意跨域问题，小程序需要添加dowanload域名白名单)，只有web端支持本地资源(本地service，请用require导入)
+ 海报背景图片加上preload=true字段，以保证第一个被画上
+ 画布的宽高最好设置成海报图的宽和高，这样最终合成的图不会有多余的空白
+ 可通过字段fileType和quality，来控制导出图片质量大小，一般jpeg格式图片质量相对较低
+ uni版本，内部封装的是uni的API，理论上来说，应该是支持app-vue(已验证)、web(未验证)、小程序(未验证)

#### 使用说明
+ install：npm i canvas-poster-sprite  or yarn add canvas-poster-sprite
+ web导入：import CanvasPosterSprite from 'canvas-poster-sprite'
+ uni：import CanvasPosterSprite from 'canvas-poster-sprite/dist/uni-canvas-poster-sprite.js'
+ wx：import CanvasPosterSprite from 'canvas-poster-sprite/dist/wx-canvas-poster-sprite.js'
+ my：import CanvasPosterSprite from 'canvas-poster-sprite/dist/my-canvas-poster-sprite.js'
+ tt：import CanvasPosterSprite from 'canvas-poster-sprite/dist/tt-canvas-poster-sprite.js'
+ swan：import CanvasPosterSprite from 'canvas-poster-sprite/dist/swan-canvas-poster-sprite.js'
+ qq：import CanvasPosterSprite from 'canvas-poster-sprite/dist/qq-canvas-poster-sprite.js'
+ 初始化实例：new CanvasPosterSprite(options)
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
      {x: 214, y: 1158, w: 56, h: 56, r: 28, type: "fill", color: "#ffffff"}
    ],
    rect : [
      {x: 324, y: 1244, w: 252, h: 252, type: "fill", color: "#e6e6e6"},
      {x: 325, y: 1245, w: 250, h: 250, type: "fill", color: "#ffffff"},
      {x: 206, y: 1152, w: 488, h: 68, r: 34, type: "fill", color: "rgba(0, 0, 0, .15)"}
    ],
    triangle : [
      {points : [{x: 450, y: 1233}, {x: 462, y: 1220}, {x: 439, y: 1220}], type: "fill", color: "rgba(0, 0, 0, .15)"}
    ]
  },
  /*pics : [
    {x: 0, y: 0, w: 900, h: 1600, preload: true, src: "./img/bg-zm.jpg"},
    {x: 328, y: 1248, w: 244, h: 244, src: "./img/qrcode-zm.png"},
    {x: 215, y: 1159, w: 54, h: 54, r: 27, src: "./img/icon.jpeg"}
  ],*/
  texts: [
    {x: 328, y: 1538, w: 250, font: "28px 微软雅黑", align: "center", color: "#000000", text: "联系方式：466102061@qq.com"},
    {x: 280, y: 1187, font: "26px 微软雅黑", color: "#FFE506", text: "小小咖侠侣店"},
    {x: 436, y: 1187, font: "26px 微软雅黑", color: "#ffffff", text: "邀请你注册侠侣联盟"}
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

#### 参考案例
+ [各端展示](https://github.com/466102061/canvas-poster-sprite/tree/main/screenshot)
+ web端：[examples/index.html](https://github.com/466102061/canvas-poster-sprite/tree/main/examples)
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

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| width | Number | -- | 640 | 画布宽度 |
| height | Number | -- | 640 | 画布高度 |
| bgColor | String | -- | #fff | 画布背景色 |
| fileType | String | -- | jpeg | 图片格式(jpeg、png、gif) |
| quality | Number | -- | 1 | 导出图片质量 |
| pics | Array | -- | -- | 图片资源，[参考draw-pic.md](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-pic.md) |
| paths | Object | -- | -- | 路径，[参考draw-path.md](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-path.md) |
| texts | Array | -- | -- | 文本，[参考draw-text.md](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-text.md) |

+  uni | wx | my | tt | swan | qq

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| self | Object | yes | -- | 当前运行环境 - this |
| canvasId | String | yes | -- | canvas组件实例 - canvas-id |

+ uni

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| appPlus | Boolean | -- | false | app端，是否先把图片转换成base64，再画图，[fix：Android10 真机 uni.canvasToTempFilePath报错](https://ask.dcloud.net.cn/question/103303) |
| pixelRatio | Number | -- | 2 | (app真机)设备分辨率 |

+ spriter

| 方法 | 描述 |
| :----:| :---- |
| spriter.then(callback) | 回调，返回(err, res) |


