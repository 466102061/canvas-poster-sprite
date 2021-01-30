/**
** @desc web-canvas 以属性赋值的方式
**/

//设置线宽
function setLineWidth(ctx, lineWidth){
	ctx.lineWidth = lineWidth;
}
//设置背景颜色-实心
function setFillStyle(ctx, color){
	ctx.fillStyle = color;
}
//设置背景颜色-空心
function setStrokeStyle(ctx, color){
	ctx.strokeStyle = color;
}
//设置字体大小
function setFontSize(ctx, font){
	ctx.font = font;
}
//设置对齐文本基线
function setTextBaseline(ctx, baseline){
	ctx.textBaseline = baseline;
}

//创建一个canvas画布,返回ctx
function createCanvasContext(opts){
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = opts.width;
	canvas.height = opts.height;
	return {
		ctx,
		canvas
	}
}

//导出画布：图片格式为base64
function canvasToTempFilePath({
	canvas, 
	opts,
	ERROR_TYPE,
	callback
}){
	try{
		var tempFilePath = canvas.toDataURL(opts.fileType, opts.quality);
		callback(null, { tempFilePath });
	}catch(e){
	    callback({
	    	desc: "canva海报导出失败.",
	      	err: JSON.stringify(e),
            code: ERROR_TYPE.TOBASE64.CODE,
            msg: ERROR_TYPE.TOBASE64.MSG,
	      	src: ""
	    }, null);
	}
}

export {
	setLineWidth,
	setFillStyle,
	setStrokeStyle,
	setFontSize,
	setTextBaseline,
	createCanvasContext,
	canvasToTempFilePath
}