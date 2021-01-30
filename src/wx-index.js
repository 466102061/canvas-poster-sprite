import { merge } from './utils/helper.js'
import { setting, fnSetting } from './config/setting.js'
import { objectProtoType } from './utils/type.js'
import DrawPath from './draw-path/base-draw-path.js'
import DrawText from './draw-text/base-draw-text.js'
import BaseCanvasPosterSprite from './core/base-canvas.js'
import { drawApiMap, canvasBaseApiMap } from './canvas-api/wx-canvas-api-map.js'

class CanvasPosterSprite extends BaseCanvasPosterSprite{
	constructor(options){
		if(!objectProtoType.isObject(options)){
	      console.error("参数错误，参数必须是对象！");
	      return;
		}
		let opts = merge({}, setting, fnSetting, options);
		super(opts);
		this.options = opts;						 //配置
		this.drawPath = new DrawPath(drawApiMap);	 //路径方法
		this.drawText = new DrawText(drawApiMap);	 //文本方法
		this.canvasApi = {							 //画布api
			...drawApiMap,
			...canvasBaseApiMap			 
		}
		//准备就绪，合成海报
		this.canvas();
		return this;
	}
}

export default CanvasPosterSprite;