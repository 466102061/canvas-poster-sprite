import { merge } from './utils/helper.js'
import { PLATFORM } from './config/config.js'
import { setting, mpSetting, uniSetting } from './config/setting.js'
import { objectProtoType } from './utils/type.js'
import BaseCanvasPosterSprite from './core/base-canvas.js'

import { getImageInfos } from './canvas-api/uni-canvas-api.js'
import { canvasApi, setCanvasEvnApi } from './canvas-api/env-canvas-api.js'
import { canvasCtxApi, setCanvasCtxApiEnv } from './canvas-api/ctx-canvas-api.js'

//设置平台环境
let platform = PLATFORM.UNI;
setCanvasCtxApiEnv(platform);

//设置原生Api
setCanvasEvnApi({
  __getImageInfo__: uni.getImageInfo,                   //下载图片
  __createCanvasContext__: uni.createCanvasContext,     //创建canvas的ctx
  __canvasToTempFilePath__: uni.canvasToTempFilePath,   //保存本地路径
});
//改写 getImageInfos 方法
canvasApi.getImageInfos = getImageInfos;

class CanvasPosterSprite extends BaseCanvasPosterSprite{
	constructor(options){
		if(!objectProtoType.isObject(options)){
	      console.error("参数错误，参数必须是对象！");
	      return;
		}
		let opts = merge({}, setting, mpSetting, uniSetting, options);
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