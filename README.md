### canvas-poster-sprite
A poster plugin that can draw texts, paths and pictures to canvas, and export picture data.

#### Introduction | [简体中文](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/README-ZH.md)
+ Multiterminal support：[uni-uniapp | wx-miniprogram | web-h5](https://github.com/466102061/canvas-poster-sprite/tree/main/dist)
+ Canvas support：draw texts, paths and pictures to canvas
+ Canvas z-index：pictures(preload=true) < paths < pictures < texts

#### Notes
+ Text does not support art form, art form can be replaced by pictures.
+ Pictures resources support | HTTPS (HTTP attention to the problem of cross domain), only the web side support local resources (local service, please use the require import)
+ Pictures(preload=true)，can be first drawed to canvas.
+ The width and height of the canvas should be the same as the width and height of the poster image, so that the final composite image will not have excess white space
+ The quality of exported images can be controlled through fields FileType and Quality. Generally, the quality of JPEG images is relatively low.

#### Useage
+ install：npm i canvas-poster-sprite  or yarn add canvas-poster-sprite
+ web：import CanvasPosterSprite from 'canvas-poster-sprite'
+ wx：import CanvasPosterSprite from 'canvas-poster-sprite/dist/wx-canvas-poster-sprite.js'
+ uni：import CanvasPosterSprite from 'canvas-poster-sprite/dist/uni-canvas-poster-sprite.js'
+ instance：new CanvasPosterSprite(setting)

#### examples
+ uni：[examples/components/uni-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
+ wx：[examples/components/wx-canvas](https://github.com/466102061/canvas-poster-sprite/tree/main/examples/components)
+ web：[examples/index.html](https://github.com/466102061/canvas-poster-sprite/tree/main/examples)
#### setting
+ uni

| param | type | require | default | desc |
| :----: | :----: | :----: | :----: | :---- |
| appPlus | Boolean | -- | false | app，whether transform pictures to base64 first，and draw to canvas，[fix：Android10 uni.canvasToTempFilePath Error.](https://ask.dcloud.net.cn/question/103303) |
| pixelRatio | Number | -- | 2 | app pixelRatio. |

+ uni | wx

| param | type | require | default | desc |
| :----: | :----: | :----: | :----: | :---- |
| self | Object | yes | -- | content - this |
| canvasId | String | yes | -- | canvas-id |

+ uni | wx | web

| param | type | require | default | desc |
| :----: | :----: | :----: | :----: | :---- |
| width | Number | -- | 640 | canvas width. |
| height | Number | -- | 640 | canvas height. |
| bgColor | String | -- | #fff | canvas background color. |
| fileType | String | -- | jpeg | type of pictures. eg.jpeg、png、gif |
| quality | Number | -- | 1 | quality of pictures. |
| pics | Array | -- | -- | pictures |
| pics[i].preload | Boolean | -- | -- | Whether draw first to canvas. |
| pics[i].src | String | yes | -- | pictures src. |
| pics[i].x | String | yes | -- | pictures x-axis. |
| pics[i].y | String | yes | -- | pictures y-axis. |
| pics[i].w | String | -- | -- | pictures width. |
| pics[i].h | String | -- | -- | pictures width. |
| texts | Array | -- | -- | texts. [More](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-text.md) |
| paths | Object | -- | -- | paths. [More](https://github.com/466102061/canvas-poster-sprite/blob/main/doc/draw-path.md) |
| callback | Function | -- | -- | callback (err, res) |


#### screenshot

+ Basic usage  
![avatar](https://github.com/466102061/canvas-poster-sprite/blob/main/screenshot/demo-1.png)
+ Advanced Usage   
![avatar](https://github.com/466102061/canvas-poster-sprite/blob/main/screenshot/demo-2.png)

