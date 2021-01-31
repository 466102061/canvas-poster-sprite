### canvas海报合成精灵
一个canvas海报合成插件，可以绘制文本，路径和图片到画布，并导出图片数据。

#### 功能简介 | [English](https://github.com/466102061/canvas-poster-sprite#readme)
+ 多端支持：[web-h5 | wx-微信小程序 | uni-uniapp](https://github.com/466102061/canvas-poster-sprite/tree/main/dist)
+ 功能支持：图片、路径(矩形、圆形、三角/多边形)、文本(单行、多行)
+ 画布层级：优先级高的图(preload=true) < 路径 < 图片 < 文本

#### 注意事项
+ 文本暂不支持艺术体，艺术体可用图片代替
+ 图片资源支持(http|https注意跨域问题)，只有web端支持本地资源(本地service，请用require导入)
+ 海报背景图片加上preload=true字段，以保证第一个被画上
+ 画布的宽高最好设置成海报图的宽和高，这样最终合成的图不会有多余的空白
+ 可通过字段fileType和quality，来控制导出图片质量大小，一般jpeg格式图片质量相对较低
+ uni版本，内部封装的是uni的API，理论上来说，应该是支持app-vue(已验证)、web(未验证)、小程序(未验证)

#### 使用说明
+ install：npm i canvas-poster-sprite  or yarn add canvas-poster-sprite
+ web导入：import CanvasPosterSprite from 'canvas-poster-sprite'
+ wx导入：import CanvasPosterSprite from 'canvas-poster-sprite/dist/wx-canvas-poster-sprite.js'
+ uni导入：import CanvasPosterSprite from 'canvas-poster-sprite/dis/uni-canvas-poster-sprite.js'
+ 初始化实例：new CanvasPosterSprite(setting)
```
new CanvasPosterSprite({
   /* wx|uni */
   self: this, 
   canvasId: 'canvas-id',

   /* web|wx|uni */
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
     {text: '466102061@qq.com', font: '20px Arial', color: '#333', x: 340, y: 490, w: 200, align: "center"}
   ],
   callback: function(err, res){
     if(err){
       console.log("canvas-fail：", err);
       return;
     }
     let { tempFilePath, canvas } = res;
     console.log("canvas-success：", res);
  }
})
```

#### 参考案例
+ web端：[examples/index.html](https://github.com/466102061/canvas-poster-sprite/tree/main/examples)
+ wx端：[examples/components/wx-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
+ uni端：[examples/components/uni-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
#### 参数(setting)说明

+ web | wx | uni

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| width | Number | -- | 640 | 画布宽度 |
| height | Number | -- | 640 | 画布高度 |
| bgColor | String | -- | #fff | 画布背景色 |
| fileType | String | -- | jpeg | 图片格式(jpeg、png、gif) |
| quality | Number | -- | 1 | 导出图片质量 |
| pics | Array | -- | -- | 图片资源 |
| pics[i].preload | Boolean | -- | -- | 是否【优先】加载并在画布画上 |
| pics[i].src | String | yes | -- | 图片-src |
| pics[i].x | Number | yes | -- | 图片-x轴位置 |
| pics[i].y | Number | yes | -- | 图片-y轴位置 |
| pics[i].w | Number | -- | -- | 图片-宽度 |
| pics[i].h | Number | -- | -- | 图片-高度 |
| paths | Object | -- | -- | 路径，[参考doc文件夹下draw-path.md](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-path.md) |
| texts | Array | -- | -- | 文本，[参考doc文件夹下draw-text.md](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-text.md) |
| callback | Function | -- | -- | 回调，返回(err, res) |

+ wx | uni

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| self | Object | yes | -- | 当前运行环境 - this |
| canvasId | String | yes | -- | canvas组件实例 - canvas-id |

+ uni

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| appPlus | Boolean | -- | false | app端，是否先把图片转换成base64，再画图，[fix：Android10 真机 uni.canvasToTempFilePath报错](https://ask.dcloud.net.cn/question/103303) |
| pixelRatio | Number | -- | 2 | (app真机)设备分辨率 |

#### 效果预览

+ 基础用法：二维码(底部中间)海报  
![avatar](https://github.com/466102061/canvas-poster-sprite/blob/main/screenshot/demo-1.png)
+ 高级用法：(商品列表)海报    
![avatar](https://github.com/466102061/canvas-poster-sprite/blob/main/screenshot/demo-2.png)

