### canvas海报合成精灵

#### 功能简介
+ 多端支持：uni-uniapp | wx-微信小程序 | web-h5
+ 功能支持：图片、路径(矩形、圆形、三角/多边形)、文本(单行、多行)
+ 画布层级：优先级高的图(preload=true) < 路径 < 图片 < 文本

#### 注意事项
+ 文本暂不支持艺术体，艺术体可用图片代替
+ 图片资源支持(http|https注意跨域问题)，只有web端支持本地资源(本地service，请用require导入)
+ 海报背景图片加上preload=true字段，以保证第一个被画上
+ 画布的宽高最好设置成海报图的宽和高，这样最终合成的图不会有多余的空白
+ 可通过字段fileType和quality，来控制导出图片质量大小，一般jpeg格式图片质量相对较低

#### 使用说明
+ uni导入：import CanvasPosterSprite from 'dis/uni-canvas-poster-sprite.js'
+ wx导入：import CanvasPosterSprite from 'dist/wx-canvas-poster-sprite.js'
+ web导入：import CanvasPosterSprite from 'dist/web-canvas-poster-sprite.js'
+ 初始化实例：new CanvasPosterSprite(setting)

#### 参考案例
+ uni端：examples/components/uni-canvas
+ wx端：examples/components/wx-canvas
+ web端：examples/index.html
#### 参数(setting)说明
+ uni

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| appPlus | Boolean | -- | false | app端，是否先把图片转换成base64，再画图，[fix：Android10 真机 uni.canvasToTempFilePath报错](https://ask.dcloud.net.cn/question/103303) |
| pixelRatio | Number | -- | 2 | (app真机)设备分辨率 |

+ uni | wx

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| self | Object | yes | -- | 当前运行环境 - this |
| canvasId | String | yes | -- | canvas组件实例 - canvas-id |

+ uni | wx | web

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| width | Number | -- | 640 | 画布宽度 |
| height | Number | -- | 640 | 画布宽度 |
| bgColor | String | -- | #fff | 画布背景 |
| fileType | String | -- | jpeg | 图片格式(jpeg、png、gif) |
| quality | Number | -- | 1 | 导出图片质量 |
| pics | Array | -- | -- | 图片资源 |
| pics[i].preload | Boolean | -- | -- | 是否【优先】加载并在画布画上 |
| pics[i].src | String | yes | -- | 图片-src |
| pics[i].x | String | yes | -- | 图片-x轴位置 |
| pics[i].y | String | yes | -- | 图片-y轴位置 |
| pics[i].w | String | -- | -- | 图片-宽度 |
| pics[i].h | String | -- | -- | 图片-高度 |
| texts | Array | -- | -- | 文本，参考doc文件夹下draw-text.md |
| paths | Object | -- | -- | 路径，参考doc文件夹下draw-path.md |
| callback | Function | -- | -- | 回调，返回(err, res) |

#### 效果预览
+ 基础用法：二维码(底部中间)海报
+ 高级用法：(商品列表)海报

