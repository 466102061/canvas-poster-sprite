import { merge } from './utils/helper.js'
import { setting, fnSetting } from './config/setting.js'
import { objectProtoType } from './utils/type.js'
import DrawPath from './draw-path/base-draw-path.js'
import DrawText from './draw-text/base-draw-text.js'
import BaseCanvasPosterSprite from './core/base-canvas.js'

import { canvasApi, setCanvasEvnCtx } from './canvas-api/env-canvas-api.js'
import { canvasCtxApi, setCanvasCtxApiEnv } from './canvas-api/ctx-canvas-api.js'

//设置平台环境
let platform = 'swan-Miniprogram';
setCanvasCtxApiEnv(platform);

//设置原生Api
setCanvasEvnCtx({
  __getImageInfo__: swan.getImageInfo,                   //下载图片
  __createCanvasContext__: swan.createCanvasContext,     //创建canvas的ctx
  __canvasToTempFilePath__: swan.canvasToTempFilePath,   //保存本地路径
});

class CanvasPosterSprite extends BaseCanvasPosterSprite{
	constructor(options){
		if(!objectProtoType.isObject(options)){
	      console.error("参数错误，参数必须是对象！");
	      return;
		}
		let opts = merge({}, setting, fnSetting, options);
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