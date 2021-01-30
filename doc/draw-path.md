### canvas-路径(path)
+ 矩形(rect)
+ 圆形(circle)
+ 三角形(triangle)或多边形(polygon)

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

