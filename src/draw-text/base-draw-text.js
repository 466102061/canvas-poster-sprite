import { fontFormat } from '../utils/env.js'
/**
** @desc canvas 文本方法处理 - 基类
**/
class DrawText{
	constructor(canvasApi){
		this.canvasApi = canvasApi || {};
		return this;
	}
	/**
	* @desc 文字对齐方式：left || center || right
	* @param {Object|Require} ctx       canvas上下文ctx
	*
	* @param {Object|Require} text      文字对象
	* @param {Number|Require} text.x    x坐标
	* @param {Number|Require} text.y    y坐标
	* @param {Number|Require} text.w    宽度
	* @param {String|Require} text.text
	* @param {String} text.align         文字对齐方式
	* @param {Number} text.font
	* @param {String} text.color
	* @param {String} text.baseline
	* @param {String} text.angle         旋转角度,旋转点为文字正中点
	* @param {String} text.lineHeight    文字行高
	*/
	textAlign(ctx, text){
		let font = fontFormat(ctx, text['font']);
		let canvasApi = this.canvasApi || {};
		//保存画布之前环境
		ctx.save();

		//文字基本属性
		canvasApi['setFontSize'] && canvasApi['setFontSize'](ctx, font);//小程序无法设置字体
		canvasApi['setFillStyle'] && canvasApi['setFillStyle'](ctx, text['color'] || "black");
		canvasApi['setTextBaseline'] && canvasApi['setTextBaseline'](ctx, text['baseline'] || "middle");

		//wx&uni
		// ctx.setFontSize(text['font'] || 14);//小程序无法设置字体
		// ctx.setFillStyle(text['color'] || "black");
		// ctx.setTextBaseline(text['baseline'] || "middle");

		//h5
		// ctx.font = text['font'] || "14px Arial";
		// ctx.fillStyle = text['color'] || "black";
		// ctx.textBaseline = text['baseline'] || "middle";

		//文字对齐方式，属性计算
		let x = text['x'] || 0;
		let y = text['y'] || 0;
		let w = text['w'] || 0;
		let x_1 = x;
		let lineHeight = text['lineHeight'] || 20;//文字行高
		let angle = text['angle'] || null;//文字旋转角度
		let type = text['align'] || 'left';//left || center || right
		let str = text['text'] ? (text['text']).toString() : '';
		let d = this.measureText(ctx, str, font);

		if (w > 0 && type == 'center') {
		  x_1 = x + 0.5 * (w - d);
		  // console.log("kkk:",x_1,x, w, d);
		} else if (w > 0 && type == 'right') {
		  x_1 = x + (w - d);
		}
		if (angle) {//文字旋转
		  //旋转原地(0,0)移至文字中心点
		  ctx.translate(x_1 + 0.5 * d, y + 0.5 * lineHeight);
		  ctx.rotate(angle * Math.PI / 180);
		  ctx.fillText(str, -.5 * d, -0.5 * lineHeight);
		} else {
		  ctx.fillText(str, x_1, y);
		}

		//回复画布之前环境
		ctx.restore();
	}
	/**
	* @desc 文字自动换行(或要显示的行数,外加...)
	* @param {Object|Require} ctx       canvas上下文ctx
	*
	* @param {Object|Require} text      文字对象
	* @param {Number|Require} text.x    x坐标
	* @param {Number|Require} text.y    y坐标
	* @param {Number|Require} text.w    宽度
	* @param {String|Require} text.text
	* @param {Number} text.clamp        要显示的行数,外加... 
	* @param {Number} text.font
	* @param {String} text.color
	* @param {String} text.baseline
	*/
	wordwrap(ctx, text){
		let self = this;
		let font = fontFormat(ctx, text['font']);
		let canvasApi = this.canvasApi || {};
		//保存画布之前环境
		ctx.save();

		//文字基本属性
		canvasApi['setFontSize'] && canvasApi['setFontSize'](ctx, font);//小程序无法设置字体
		canvasApi['setFillStyle'] && canvasApi['setFillStyle'](ctx, text['color'] || "black");
		canvasApi['setTextBaseline'] && canvasApi['setTextBaseline'](ctx, text['baseline'] || "middle");

		//wx&uni
		// ctx.setFontSize(text['font'] || 14);//小程序无法设置字体
		// ctx.setFillStyle(text['color'] || "black");
		// ctx.setTextBaseline(text['baseline'] || "middle");

		//h5
		// ctx.font = text['font'] || "14px Arial";
		// ctx.fillStyle = text['color'] || "black";
		// ctx.textBaseline = text['baseline'] || "middle";

		//自动换行属性计算
		let x = text['x'] || 0;
		let y = text['y'] || 0;
		let w = text['w'] || 0;
		let lineHeight = text['lineHeight'] || 24;//行高24
		let n = text['clamp'] || -1;//显示n行,外加...
		let temp = "";
		let row = [];
		
		let chr = text['text'] || "";
		chr = chr.toString().split("");
		//文字换行
		for (let a = 0; a < chr.length; a++) {
		  //ctx.measureText(text).width  测量文本text的宽度
		  // if (ctx.measureText(temp).width < w && ctx.measureText(temp + (chr[a])).width <= w) {
		  if (self.measureText(ctx, temp, font) < w && self.measureText(ctx, temp + (chr[a]), font) <= w) {
		    temp += chr[a];
		  } else {
		    row.push(temp);
		    temp = chr[a];
		  }
		}
		row.push(temp);

		//渲染
		let len = row.length;
		if (n > 0 && n < len) {
		  // 只显示n行，外加...
		  for (let b = 0; b < n; b++) {
		    let str = row[b];
		    if (b == n - 1) {
		      str = str.substring(0, str.length - 1) + '...';
		    }
		    ctx.fillText(str, x, y + (b + 1) * lineHeight);
		  }
		} else {
		  for (let b = 0; b < len; b++) {
		    ctx.fillText(row[b], x, y + (b + 1) * lineHeight);
		  }
		}
		//回复画布之前环境
		ctx.restore();
	}
	/**
	* @desc 测量文本宽度
	* @param {Object|Require} ctx       canvas上下文ctx
	* @param {String} str      		    文字
	* @param {Number} font      		文字大小
	* @return {Number} width
	*/
	measureText(ctx, str, font = 14){
		if(!str) return 0;

		if(ctx.measureText){
			let width = ctx.measureText(str).width;//(App端自定义组件编译模式暂时不可用)
			if(width > 0) return width;
		}

		//简单修复不兼容ctx.measureText方法
		let numReg = /(\d+\.?\d*)/g; //字符串中，取出数字
		let nums = (font.toString()).match(numReg);
		let fontSize = nums ? (nums[0] ? Number(nums[0]) : 14) : 14;
		width = str.toString().length * fontSize;
		return width;	
	}
}

export default DrawText;
