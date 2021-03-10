import { ERROR_TYPE, PATHS_MAP } from '../config/config.js'
import { merge, mathRandomHash } from '../utils/helper.js'
import { objectProtoType } from '../utils/type.js'
import { parallelTasks } from '../utils/parallel.js'

/**
** @desc canvas合成海报 - 基类
**/
class CanvasPosterSprite{
	constructor(setting){
		if(!objectProtoType.isObject(setting)){
	      console.error("参数错误，参数必须是对象！");
	      return;
		}
		this.options = setting || {};		//配置
		this.drawPath = {};					//路径方法
		this.drawText = {};					//文本方法
		this.canvasApi = {};				//画布api
		this.resCallbacks = [];			    //结果回调
		this.canvasResult = {
			isEmit : false,					//是否已经执行回调
			err : null,						//canvas-异常
			res : null,						//canvas-结果
		}	
		// this.options.isDebug && console.log("配置：",setting);
		//是否有回调callback参数
		if(objectProtoType.isFunction(this.options.callback)){
			this.resCallbacks.push(this.options.callback);
		}
		return this;
	}
	then(callback){
		if(objectProtoType.isFunction(callback)){
			this.resCallbacks.push(callback);

			//then调用之前，已经有输出，直接回调给外部
			//应用情形：web没有图片资源的情况下，canvasToTempFilePath优先then函数执行
			if(this.canvasResult.isEmit){
				callback(this.canvasResult.err, this.canvasResult.res);
			}
		}
		return this;
	}
	//画图
	drawImg(ctx, target){
		let drawPath = this.drawPath || {};
	    if (target['r'] || target['angle']) {//添加圆倒角 || 旋转
	      drawPath.rect && drawPath.rect(ctx, {
	        x: target['x'],
	        y: target['y'],
	        w: target['w'],
	        h: target['h'],
	        r: target['r'],
	        angle: target['angle'],
	        callback: function (res) {
	          ctx.drawImage(target.img, res.x, res.y, res.w, res.h);
	        }
	      });
	    } else {
	      ctx.drawImage(target.img, target.x, target.y, target.w, target.h);
	    }
	}
	//合成海报
	canvas(){
		let opts = this.options;
		let drawImg = this.drawImg.bind(this);
		let drawPath = this.drawPath || {};
		let drawText = this.drawText || {};
		let canvasApi = this.canvasApi || {};
		let __platform__ = this.__platform__;
	    //图片预加载,存放数组
	    opts['preload'] = [];

	    //任务
	    let tasks = {};

	    //回调处理
	    let self = this;
		let resCallbacks = this.resCallbacks || [];
		function emitResCallbacks(err, res){
      		resCallbacks.forEach((callback)=>{
      			if(objectProtoType.isFunction(callback)){
      				callback(err, res);
      			}
      		});
      		//记录当前的返回结果(包括异常)
      		self.canvasResult = {
      			err,
      			res,
      			isEmit : true
      		}
		}

	    //图片资源(海报背景、logo、二维码等)
	    if (objectProtoType.isArray(opts.pics)) {
	    	for(let i =0; i < opts.pics.length; i++){
	    		let key = mathRandomHash();
	    		let pic = opts.pics[i];
	    		tasks[key] = function (cb) {
	    			canvasApi['getImageInfos'] && canvasApi['getImageInfos']({
	    				opts,
	    				ERROR_TYPE, 
	    				src : pic.src, 
	    				callback : (err, info)=>{
		    			  if(err){
		    			  	emitResCallbacks(err, null);
		    			  	return;
		    			  }
						  let preload = pic['preload'] || false;//是否是背景图片
						  let res = {
						    img: info.path,
						    x: pic.x,
						    y: pic.y,
						    w: pic['w'],
						    h: pic['h'],
						    r: pic['r'],
						    preload: preload,
						    angle: pic['angle']
						  }
						  if (preload) {
						    opts.preload.push(res);
						  }
						  cb(null, res);
						}
	    			})
	    		}
	    	}
	    }
	    //console.log('tasks',tasks);

	    //拿到所有绘制图片资源
	    parallelTasks(tasks, function (err, res) {
	      // opts.isDebug && console.log('imgs：', res);

	      let result = {};
	      //异常直接返回
	      if (err) {
	        emitResCallbacks({
	          code: ERROR_TYPE.TASK.CODE,
	          msg: ERROR_TYPE.TASK.MSG,
	          err: JSON.stringify(err),
	          src: ""
	        }, null);
	        return;
	      }

	      //执行绘制任务
	      //1.新建canvas元素
	      if(!canvasApi['createCanvasContext']) return;
	      let { ctx, canvas } = canvasApi['createCanvasContext'](opts);
	      //注入平台信息
	      ctx.__platform__ = __platform__;
	      canvas.__platform__ = __platform__;

	      //2.设置画布区域
	      ctx.rect(0, 0, opts.width, opts.height);
	      canvasApi['setFillStyle'] && canvasApi['setFillStyle'](ctx, opts.bgColor || "white");
	      ctx.fill();
		  
	      // 3.绘制背景图片或者预加载图片
	      if (opts.preload.length > 0) {
	        // console.log("预加载：",opts.preload);
	        for (let key in opts.preload) {
	          drawImg && drawImg(ctx, opts.preload[key]);
	        }
	      }

	      //4.绘制路径
	      let pathKeys = Object.getOwnPropertyNames(opts.paths);
	      if (pathKeys.length > 0) {
	        for (let key in opts.paths) {
	          let pathItem = opts.paths[key];
	          for (let i in pathItem) {
	            let item = pathItem[i];
	            let methodKey = PATHS_MAP[key];
	            drawPath[methodKey] && drawPath[methodKey](ctx, item);
	          }
	        }
	      }

	      //5.绘制图片
	      if (res) {
	        for (let key in res) {
	          let Item = res[key];
	          if (!Item['preload']) {
				 drawImg && drawImg(ctx, Item);
	          }
	        }
	      }

	      //6.绘制文字描述
	      if (objectProtoType.isArray(opts.texts)) {
	        for (let key in opts.texts) {
	          let textItem = opts.texts[key];
	          if (textItem['multiple'] && textItem['w']) {//多行
	            drawText['wordwrap'] && drawText['wordwrap'](ctx, textItem);
	          } else {//单行
	            drawText['textAlign'] && drawText['textAlign'](ctx, textItem);
	          }
	        }
	      }

	      //7.返回绘制结果
	      canvasApi['canvasToTempFilePath'] && canvasApi['canvasToTempFilePath']({
	      	ctx,
	      	opts,
	      	canvas,
	      	ERROR_TYPE,
	      	callback: (err, res)=>{
	      		//回调
	      		emitResCallbacks(err, {
	      			...res,
	      			canvas
	      		});
	      	}
	      });
		});
	}
}
export default CanvasPosterSprite;