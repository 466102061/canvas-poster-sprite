/**
** @desc canvas 文本方法处理 - 基类
**/
class DrawPath{
	constructor(canvasApi){
		this.canvasApi = canvasApi || {};
		return this;
	}
	// 绘制三角形
	triangle(ctx, triangle){
	    if(!triangle.points || triangle.points.length == 0){
	        triangle.points = [
	            {x: 0, y:0},
	            {x: 8, y:8},
	            {x: 16, y:0},
	        ]
	    }else{
	        triangle.points.length = 3;
	    }
	    this.polygon(ctx, triangle);
	}
	/**
	* @desc 圆形(空心、实心)
	* @param {Object|Require} ctx         canvas上下文ctx
	* @param {Object|Require} circle      文字对象
	* @param {Number|Require} circle.x    x坐标
	* @param {Number|Require} circle.y    y坐标
	* @param {Number|Require} circle.r    半径
	* @param {String} circle.type         类型：默认空心(stroke)
	* @param {String} circle.color        填充颜色：默认白色
	* @param {String} circle.angle        旋转角度
	* @param {Function} circle.callback   回调
	*/
	circle(ctx, circle){
		this.rect(ctx, {
			  x: circle['x'],
			  y: circle['y'],
			  r: circle['r'],
			  w: 2 * circle['r'],
			  h: 2 * circle['r'],
			  type: circle['type'],
			  color: circle['color'],
			  angle: circle['angle'],
			  callback: circle['callback']
		});
	}
	/**
	* @desc 矩形/圆形(圆角、空心、实心、旋转一定角度)
	* @param {Object|Require} ctx       canvas上下文ctx
	* @param {Object|Require} rect      文字对象
	* @param {Number|Require} rect.x    x坐标
	* @param {Number|Require} rect.y    y坐标
	* @param {Number|Require} rect.w    宽度
	* @param {Number|Require} rect.h    高度
	* @param {Number} rect.r            圆角-半径
	* @param {Number} rect.angle        旋转角度 
	* @param {String} rect.type         类型：默认空心(stroke)
	* @param {String} rect.color        填充颜色：默认白色
	* @param {String} rect.lineWidth    画笔宽度，默认1px
	* @param {Function} rect.callback   回调-可以在矩形之内做其他事情
	*/
	rect(ctx, rect) {
		let canvasApi = this.canvasApi || {};
		//保存该方法之前的状态
		ctx.save();
		let x = rect['x'] || 0;
		let y = rect['y'] || 0;
		let w = rect['w'] || 0;
		let h = rect['h'] || 0;
		let r = rect['r'] || 0;//圆角
		let callback = rect['callback'] || function (res) { };
		let type = rect['type'] || "stroke";//默认空心
		let angle = rect['angle'] || null;//旋转角度

		//web
		// ctx.fillStyle = rect['color'] || "white";
		// ctx.strokeStyle = rect['color'] || "white";

		//wx && uni
		// ctx.setFillStyle(rect['color'] || "white");
		// ctx.setStrokeStyle(rect['color'] || "white");

		canvasApi['setFillStyle'] && canvasApi['setFillStyle'](ctx, rect['color'] || "white");
		canvasApi['setStrokeStyle'] && canvasApi['setStrokeStyle'](ctx, rect['color'] || "white");

		//处理canvas画布1px问题
		let reg = /^\d+\.\d+$/;
		if (!reg.test(x)) {
		  x += 0.5;
		}
		if (!reg.test(y)) {
		  y += 0.5;
		}

		//web
		// ctx.lineWidth = rect['lineWidth'] || 1;

		//uni && wx
		// ctx.setLineWidth(rect['lineWidth'] || 1);

		canvasApi['setLineWidth'] && canvasApi['setLineWidth'](ctx, rect['lineWidth'] || 1);

		if (angle) {//旋转角度
		  //旋转原地(0,0)移至中心点
		  ctx.translate(x + 0.5 * w, y + 0.5 * h);
		  ctx.rotate(angle * Math.PI / 180);
		  x = -0.5 * w;
		  y = -0.5 * h;
		}

		ctx.beginPath();

		if (r > 0) {//圆角
		  ctx.moveTo(x + r, y);
		  ctx.lineTo(x + w - r, y);
		  //右上
		  ctx.arc(x + w - r, y + r, r, -0.5*Math.PI, 0, false);
		  ctx.lineTo(x + w, y + h - r);

		  //右下
		  ctx.arc(x + w - r, y + h - r, r, 0, 0.5*Math.PI, false);
		  ctx.lineTo(x + r, y + h);

		  //左下
		  ctx.arc(x + r, y + h -r, r, 0.5*Math.PI, Math.PI, false);
		  ctx.lineTo(x, y + r);

		  //左上
		  ctx.arc(x + r, y + r, r, Math.PI, 1.5*Math.PI, false);

		   // tt | my | swan 不支持 arcTo方法
		  // ctx.moveTo(x + r, y);
		  // ctx.lineTo(x + w - r, y);
		  // //右上
		  // ctx.arcTo(x + w, y, x + w, y + r, r);
		  // ctx.lineTo(x + w, y + h - r);
		  // //右下
		  // ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
		  // ctx.lineTo(x + r, y + h);
		  // //左下
		  // ctx.arcTo(x, y + h, x, y + h - r, r);
		  // ctx.lineTo(x, y + h - r);
		  // //左上
		  // ctx.arcTo(x, y, x + r, y, r);
		} else {
		  ctx.moveTo(x, y);
		  ctx.lineTo(x + w, y);
		  ctx.lineTo(x + w, y + h);
		  ctx.lineTo(x, y + h);
		  ctx.lineTo(x, y);
		}

		ctx.clip();
		ctx.closePath();
		if (type == "stroke") {
		  ctx.stroke();
		} else {
		  ctx.fill();
		}

		//保存回调之前的状态
		ctx.save();
		callback({
		  x: x,
		  y: y,
		  w: w,
		  h: h
		});
		//恢复保存之前的状态
		ctx.restore();

		//恢复该方法之前的状态
		ctx.restore();
	}
	/**
	* @desc 线段
	* @param {Object|Require} ctx        canvas上下文ctx
	* @param {Object|Require} line       文字对象
	* @param {Number|Require} line.x1    x1坐标
	* @param {Number|Require} line.y1    y1坐标
	* @param {Number|Require} line.x2    x2坐标
	* @param {Number|Require} line.y2    y2坐标
	* @param {String} line.color         填充颜色：默认白色
	* @param {String} line.lineWidth     画笔宽度，默认1px
	* @param {String} line.lineCap       线条的端点样式: butt-末端添加平直的边缘 | round-末端添加圆形线帽 | square-末端添加正方形线帽 , 默认butt
	* @param {String} line.lineJoin      线条的交点样式: bevel-斜角 | round-圆角 | miter-尖角, 默认miter
	* @param {Array} line.dash           虚线配置
	* @param {Array} line.offset         虚线配置-偏移量-(小程序字段)
	*/
	line(ctx, line) {
		let canvasApi = this.canvasApi || {};
		ctx.save();
		let x1 = line['x1'] || 0;
		let y1 = line['y1'] || 0;
		let x2 = line['x2'] || 0;
		let y2 = line['y2'] || 0;

		//处理canvas画布1px问题
		let reg = /^\d+\.\d+$/;
		if (!reg.test(x1)) {
		  x1 += 0.5;
		}
		if (!reg.test(y1)) {
		  y1 += 0.5;
		}

		//web
		// ctx.lineWidth = line['lineWidth'] || 1;
		// ctx.strokeStyle = line['color'] || "white";

		//uni && wx
		// ctx.setLineWidth(line['lineWidth'] || 1);
		// ctx.setStrokeStyle(line['color'] || "white");

		canvasApi['setLineWidth'] && canvasApi['setLineWidth'](ctx, line['lineWidth'] || 1);
		canvasApi['setStrokeStyle'] && canvasApi['setStrokeStyle'](ctx, line['color'] || "white");

		canvasApi['setLineJoin'] && canvasApi['setLineJoin'](ctx, line['lineJoin'] || 'miter');
		canvasApi['setLineCap'] && canvasApi['setLineCap'](ctx, line['lineCap'] || 'butt');

		//设置虚线
	    if(line['dash']){
	    	canvasApi['setLineDash'] && canvasApi['setLineDash'](ctx, line['dash'], line['offset'] || 5);
	    }

		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	}
	/**
	** @desc 多边形
	* @param {Object|Require} ctx       		canvas上下文ctx
	* @param {Object|Require} polygon   		多边形对象
	* @param {Array|Require} polygon.points     点坐标
	* @param {Array|Require} polygon.points[] = {x, y}
	* @param {String} rect.type         		类型：默认空心(stroke)
	* @param {String} rect.color        		填充颜色：默认白色
	* @param {String} rect.lineWidth    		画笔宽度，默认1px
	**/
	polygon(ctx, polygon){
		let canvasApi = this.canvasApi || {};
	    ctx.save();
		let type = polygon.type || "stroke";
		let points = polygon.points || [];
		if(points.length == 0) return;
	    ctx.beginPath();
	    points.forEach((point, index)=>{
	    	if(index == 0){
	    		ctx.moveTo(point.x, point.y) //起点
	    	}
	    	ctx.lineTo(point.x, point.y) //其他点
	    })
	    ctx.closePath();

		canvasApi['setLineWidth'] && canvasApi['setLineWidth'](ctx, polygon['lineWidth'] || 1);
		canvasApi['setFillStyle'] && canvasApi['setFillStyle'](ctx, polygon['color'] || "white");
		canvasApi['setStrokeStyle'] && canvasApi['setStrokeStyle'](ctx, polygon['color'] || "white");

		if(type == "stroke"){
			ctx.stroke();
		}else{
			ctx.fill();
		}

	    ctx.restore();
	}
}
export default DrawPath;