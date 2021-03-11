import { merge } from './utils/helper.js'
import { PLATFORM } from './config/config.js'
import { setting } from './config/setting.js'
import { objectProtoType } from './utils/type.js'
import DrawPath from './draw-path/base-draw-path.js'
import DrawText from './draw-text/base-draw-text.js'
import BaseCanvasPosterSprite from './core/base-canvas.js'

import { canvasApi } from './canvas-api/web-canvas-api.js'
import { canvasCtxApi, setCanvasCtxApiEnv } from './canvas-api/ctx-canvas-api.js'

//设置平台环境
let platform = PLATFORM.WEB;
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
}

export default CanvasPosterSprite;