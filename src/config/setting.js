const pkg = require('../../package.json')

//默认参数
let setting = {
	width: 640,				//画布宽度
	height: 640,			//画布高度
	bgColor: "white",		//画布背景
	fileType: "jpeg",		//图片格式(jpeg|png|gif)
	quality: 1,				//导出图片质量
	version : pkg.version,	//版本号
	pics: [],				//需绘制的-图片(或icon)
	texts: [],				//需绘制的-文本
	paths: {},				//需绘制的-路径：矩形、圆形等(空心、实心)
	callback: function (err, res) {},
}

//uni-app(wx-微信小程序)等特有参数
let fnSetting = {
	self : '',				//当前运行环境 - this
	canvasId : '',			//(组件)canvas-id
}

//uni额外参数
let uniSetting = {
	appPlus: false,			// app端，是否先把图片转换成base64，再画图，fix：【Android10 真机 uni.canvasToTempFilePath报错】https://ask.dcloud.net.cn/question/103303
	pixelRatio : 2,			//设备分辨率(canvas导出分辨率)
}

export {
	setting,
	fnSetting,
	uniSetting
}
