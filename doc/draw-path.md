### canvas-路径(path)
+ 矩形(rect)
+ 圆形(circle)
+ 三角形(triangle)或多边形(polygon)
+ 分割线-实线或者虚线(line)

#### 一、矩形(rect)

+ 参数说明： 

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| x | Number | yes | -- | x轴位置 |
| y | Number | yes | -- | y轴位置 |
| w | Number | yes | -- | 宽度 |
| h | Number | yes | -- | 高度 |
| r | Number | -- | -- | 圆角 |
| angle | Number | -- | -- | (以正中点)旋转角度 |
| type | String | -- | stroke | 空心(stroke)、实心(fill) |
| color | String | -- | white | 填充颜色 |
| lineWidth | Number | -- | 1 | 线宽 |

#### 二、圆形(circle)

+ 参数说明： 

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| x | Number | yes | -- | x轴位置 |
| y | Number | yes | -- | y轴位置 |
| r | Number | yes | -- | 半径 |
| type | String | -- | stroke | 空心(stroke)、实心(fill) |
| color | String | -- | white | 填充颜色 |
| lineWidth | Number | -- | 1 | 线宽 |

#### 三、三角形(triangle)或多边形(polygon)

+ 参数说明： 

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| points | Array | yes | -- | 多边形顶点 |
| points[i].x | Number | yes | -- | x轴位置 |
| points[i].y | Number | yes | -- | y轴位置 |
| type | String | -- | stroke | 空心(stroke)、实心(fill) |
| color | String | -- | white | 填充颜色 |
| lineWidth | Number | -- | 1 | 线宽 |


#### 四、分割线-实线或者虚线(line)

+ 参数说明： 

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| x1 | Number | yes | -- | x1位置 |
| y1 | Number | yes | -- | y1位置 |
| x2 | Number | yes | -- | x2位置 |
| y2 | Number | yes | -- | y2位置 |
| color | String | -- | white | 填充颜色 |
| lineWidth | Number | -- | 1 | 线宽 |
| lineCap | String | -- | butt | 线条的端点样式: butt-末端添加平直的边缘、round-末端添加圆形线帽、square-末端添加正方形线帽  |
| lineJoin | String | -- | miter | 线条的交点样式: bevel-斜角、round-圆角、miter-尖角 |
| dash | Array | -- | -- | 虚线配置(不设置该字段，则为实线)：一组描述交替绘制线段和间距（坐标空间单位）长度的数字，如：[10,5] |
| offset | Number | -- | 5 | 虚线偏移量(小程序与uni特有的字段) |
