
//错误配置
let ERROR_TYPE = {
	TASK: { CODE : 1001, MSG : "异步并行任务失败，获取图片资源失败！"},
	DRAW: { CODE: 1002, MSG: "canvas海报绘制失败!" },
	SAVE: { CODE: 1003, MSG: "海报保存为临时文件失败!" },
	GETIMG: { CODE: 1004, MSG: "图片资源下载到本地失败!" },
	TOBASE64: { CODE: 1005, MSG: "本地图片转换base64失败!" },
}

//路径方法映射
let PATHS_MAP = {
	"line" : "line",			//线段
	"rect" : "rect",			//矩形
	"circle" : "circle",        //圆形
	"triangle" : "triangle",	//三角形
	"polygon" : "polygon",		//多边形
}

//平台配置
let PLATFORM = {
	MY: 'my-Miniprogram',
	QQ: 'qq-Miniprogram',
	SWAN: 'swan-Miniprogram',
	TT: 'tt-Miniprogram',
	UNI: 'uni-app',
	WEB: 'web',
	WX: 'wx-Miniprogram'
}

export {
	ERROR_TYPE,
	PATHS_MAP,
	PLATFORM
}