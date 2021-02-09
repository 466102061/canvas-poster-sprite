import { PLATFORM } from '../config/config.js'
/**
** @desc 小程序(或uni)-canvas 以函数调用(赋值)的方式
** @desc  web 采用直接赋值的方式
**/
let canvasCtxApi = {};
let __isConfig__ = false;	//是否已经配置过
let	__setByMethod__ = true;  //是否用函数调用的方式设置

//设置线宽
canvasCtxApi.setLineWidth = function(ctx, lineWidth){
	if(__setByMethod__){
		ctx.setLineWidth(lineWidth);
	}else{
		ctx.lineWidth = lineWidth;
	}
}
//设置背景颜色-实心
canvasCtxApi.setFillStyle = function(ctx, color){
	if(__setByMethod__){
		ctx.setFillStyle(color);
	}else{
		ctx.fillStyle = color;
	}
}
//设置背景颜色-空心
canvasCtxApi.setStrokeStyle = function(ctx, color){
	if(__setByMethod__){
		ctx.setStrokeStyle(color);
	}else{
		ctx.strokeStyle = color;
	}
}

/**
** @desc 设置字体大小
** 小程序官方参数为Number类型
** web可以是String类型的参数
**/
canvasCtxApi.setFontSize = function(ctx, font){
	if(__setByMethod__){
		ctx.setFontSize(font);
	}else{
		ctx.font = font;
	}
}

//设置对齐文本基线
canvasCtxApi.setTextBaseline = function(ctx, baseline){
	if(__setByMethod__){
		ctx.setTextBaseline(baseline);
	}else{
		ctx.textBaseline = baseline;
	}
}

//设置环境
function setCanvasCtxApiEnv(platform){
	if(__isConfig__){
		console.error(`You have already set __setByMethod__ and cannot change it.`);
		return;
	}
	__setByMethod__ = (platform !== PLATFORM.WEB);
	__isConfig__ = true;
}

export{
	canvasCtxApi,
	setCanvasCtxApiEnv
}