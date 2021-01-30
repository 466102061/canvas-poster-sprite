/**
** @desc wx(或uni)-canvas 以函数调用(赋值)的方式
**/

//设置线宽
function setLineWidth(ctx, lineWidth){
	ctx.setLineWidth(lineWidth);
}
//设置背景颜色-实心
function setFillStyle(ctx, color){
	ctx.setFillStyle(color);
}
//设置背景颜色-空心
function setStrokeStyle(ctx, color){
	ctx.setStrokeStyle(color);
}

//设置字体大小
function setFontSize(ctx, font){
	ctx.setFontSize(font);
}
//设置对齐文本基线
function setTextBaseline(ctx, baseline){
	ctx.setTextBaseline(baseline);
}

export {
	setLineWidth,
	setFillStyle,
	setStrokeStyle,
	setFontSize,
	setTextBaseline
}