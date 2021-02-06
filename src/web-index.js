import { merge } from './utils/helper.js'
import { setting } from './config/setting.js'
import { objectProtoType } from './utils/type.js'
import DrawPath from './draw-path/base-draw-path.js'
import DrawText from './draw-text/base-draw-text.js'
import BaseCanvasPosterSprite from './core/base-canvas.js'

import { canvasApi } from './canvas-api/web-canvas-api.js'
import { canvasCtxApi, setCanvasCtxApiEnv } from './canvas-api/ctx-canvas-api.js'

//设置平台环境
let platform = 'web';
setCanvasCtxApiEnv(platform);

class CanvasPosterSprite extends BaseCanvasPosterSprite{
	constructor(options){
		if(!objectProtoType.isObject(options)){
	      console.error("参数错误，参数必须是对象！");   
	      return;
		}
		let opts = merge({}, setting, options);

		//导出图片类型处理
		let fileType = opts.fileType || "image/jpeg";
		if(fileType.lastIndexOf("image/") == -1){
			fileType = "image/"+fileType;
		}
		opts.fileType = fileType;

		super(opts);
		this.options = opts;						 //配置
		this.__platform__ = platform;			 	 //canvas-平台
		this.drawPath = new DrawPath(canvasCtxApi);	 //路径方法
		this.drawText = new DrawText(canvasCtxApi);	 //文本方法
		this.canvasApi = {							 //画布api
			...canvasCtxApi,
			...canvasApi			 
		}
		//准备就绪，合成海报
		this.canvas();
		return this;
	}
	//画图
	drawImg(ctx, target){
		let drawPath = this.drawPath || {};
		let w = target.img.width;
		let h = target.img.height;
		
		//放缩
		let scale_x = 1;
		let scale_y = 1;
		if(target['w']){
			scale_x = target['w'] / target.img.width;
		}
		if(target['h']){
			scale_y = target['h'] / target.img.height;
		}
		let x = target.x/scale_x;
		let y = target.y/scale_y;
		if(target['r'] || target['angle']){//添加圆倒角 || 旋转
			drawPath.rect && drawPath.rect(ctx, {
				x : target['x'],
				y : target['y'],
				w : target['w'],
				h : target['h'],
				r : target['r'],
				angle : target['angle'],
				callback : function(res){
					ctx.drawImage(target.img, res.x, res.y, res.w, res.h);
				}
			});
		} else {
			ctx.scale(scale_x, scale_y);
			ctx.drawImage(target.img, x, y, w, h);
			//还原画布大小
			ctx.scale(1/scale_x, 1/scale_y);
		}
	}
}

export default CanvasPosterSprite;