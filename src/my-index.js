import { merge } from './utils/helper.js'
import { PLATFORM } from './config/config.js'
import { setting, mpSetting } from './config/setting.js'
import { objectProtoType } from './utils/type.js'
import BaseCanvasPosterSprite from './core/base-canvas.js'

import { canvasToTempFilePath } from './canvas-api/my-canvas-api.js'
import { canvasApi, setCanvasEvnApi } from './canvas-api/env-canvas-api.js'
import { canvasCtxApi, setCanvasCtxApiEnv } from './canvas-api/ctx-canvas-api.js'

//设置平台环境
let platform = PLATFORM.MY;
setCanvasCtxApiEnv(platform);

//设置原生Api
setCanvasEvnApi({
  __getImageInfo__: my.getImageInfo,                   //下载图片
  __createCanvasContext__: my.createCanvasContext,     //创建canvas的ctx

  //没有my.canvasToTempFilePath, 而是ctx.toTempFilePath
  // __canvasToTempFilePath__: my.canvasToTempFilePath,   //保存本地路径
});
//改写
canvasApi.canvasToTempFilePath = canvasToTempFilePath;

class CanvasPosterSprite extends BaseCanvasPosterSprite{
	constructor(options){
		if(!objectProtoType.isObject(options)){
	      console.error("参数错误，参数必须是对象！");
	      return;
		}
		let opts = merge({}, setting, mpSetting, options);
		super(opts, {
			platform,
			canvasApi,
			canvasCtxApi
		});
		this.options = opts;	
		
		//准备就绪，合成海报
		this.canvas();
		return this;
	}
}

export default CanvasPosterSprite;