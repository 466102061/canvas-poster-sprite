import { merge } from './utils/helper.js'
import { PLATFORM } from './config/config.js'
import { setting, mpSetting } from './config/setting.js'
import { objectProtoType } from './utils/type.js'
import BaseCanvasPosterSprite from './core/base-canvas.js'

import { canvasApi, setCanvasEvnApi } from './canvas-api/env-canvas-api.js'
import { canvasCtxApi, setCanvasCtxApiEnv } from './canvas-api/ctx-canvas-api.js'

//设置平台环境
let platform = PLATFORM.TT;
setCanvasCtxApiEnv(platform);

//设置原生Api
setCanvasEvnApi({
  __getImageInfo__: tt.getImageInfo,                   //下载图片
  __createCanvasContext__: tt.createCanvasContext,     //创建canvas的ctx
  __canvasToTempFilePath__: tt.canvasToTempFilePath,   //保存本地路径
});

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