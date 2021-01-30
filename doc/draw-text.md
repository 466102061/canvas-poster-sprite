### canvas-文本(text)
+ 单行
+ 多行(文字自动换行)
a
#### 一、单行

+ 参数说明： 

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| x | Number | yes | -- | x轴位置 |
| y | Number | yes | -- | y轴位置 |
| w | Number | -- | -- | 宽度, 文字居(中、右)必须传 |
| text | String | yes | -- | 文本 |
| angle | Number | -- | -- | 字体(以正中点)旋转角度 |
| align | String | -- | left | 对齐方式：left、center、right |
| font | String | -- | 14 | 字体、大小等 |
| color | String | -- | black | 字体颜色 |
| baseline | String | -- | middle | 字体对齐方式(y轴) |
| lineHeight | Number | -- | 20 | 行高 |

#### 二、多行(文字自动换行)

+ 参数说明： 

| 参数 | 类型 | 是否必须 | 默认值 | 字段备注 |
| :----: | :----: | :----: | :----: | :---- |
| x | Number | yes | -- | x轴位置 |
| y | Number | yes | -- | y轴位置 |
| w | Number | yes | -- | 宽度 |
| text | String | yes | -- | 文本 |
| multiple | Boolean | yes | false | 控制是否显示多行 |
| clamp | Number | -- | -1 | 大于0，显示clamp行,外加... |
| font | String | -- | 14 | 字体、大小等 |
| color | String | -- | black | 字体颜色 |
| baseline | String | -- | middle | 字体对齐方式(y轴) |
| lineHeight | Number | -- | 24 | 行高 |
