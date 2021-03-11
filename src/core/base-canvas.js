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
			hasEmit : false,				//是否已经执行回调
			err : null,						//canvas-异常
			res : null,						//canvas-结果
		}	
		this.__platform__ = "";				//当前运行平台
		this.context = {
			ctx : null,						//当前canvas实例的ctx对象
			canvas : null,					//当前canvas实例对象
		}
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
			if(this.canvasResult.hasEmit){
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
	    let self = this;
		let opts = this.options;
		let drawImg = this.drawImg.bind(this);
		let drawPath = this.drawPath || {};
		let drawText = this.drawText || {};
		let canvasApi = this.canvasApi || {};
		let __platform__ = this.__platform__;
		let resCallbacks = this.resCallbacks || [];

		//图片资源为有效数组
		let hasPics = objectProtoType.isArray(opts.pics) && opts.pics.length > 0;
	    //没有图片资源，直接执行绘制任务
	    if (!hasPics){
	    	exeCanvasTask({
	    		paths : opts.paths,
	    		texts : opts.texts
	    	});
	    	return;
	    }

	    //执行下载图片资源任务
	    let {pics, picTasks, preloadPics} = packPicTasks();
	    parallelTasks(picTasks, function (err, res) {
	        //console.log('所有已下载的图片资源：', res);
	        //下载异常直接返回
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
	    	exeCanvasTask({
	    		pics,
	    		preloadPics,
	    		paths : opts.paths,
	    		texts : opts.texts
	    	});
		});

	    //封装：回调处理
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
      			hasEmit : true
      		}
		}

		//封装：执行canvas绘制任务
		function exeCanvasTask({
			paths = {},				//路径
			texts = [],				//文本
			pics = [],				//图片
			preloadPics = [],		//预加载的图片
		}){
		  //1.新建canvas元素
		  if(!canvasApi['createCanvasContext']) return;
		  let { ctx, canvas } = canvasApi['createCanvasContext'](opts);
		  //注入平台信息
		  ctx.__platform__ = __platform__;
		  canvas.__platform__ = __platform__;
		  self.context.ctx = ctx;
		  self.context.canvas = canvas;

		  //2.设置画布区域
		  ctx.rect(0, 0, opts.width, opts.height);
		  canvasApi['setFillStyle'] && canvasApi['setFillStyle'](ctx, opts.bgColor || "white");
		  ctx.fill();
		  
		  // 3.绘制背景图片或者预加载图片
		  if (objectProtoType.isArray(preloadPics) && preloadPics.length > 0) {
		    // console.log("预加载：",preloadPics);
		    for (let key in preloadPics) {
		      drawImg && drawImg(ctx, preloadPics[key]);
		    }
		  }

		  //4.绘制路径
		  let pathKeys = objectProtoType.isObject(paths) ? Object.getOwnPropertyNames(paths) : [];
		  if (pathKeys.length > 0) {
		    for (let key in paths) {
		      let pathItem = paths[key];
		      for (let i in pathItem) {
		        let item = pathItem[i];
		        let methodKey = PATHS_MAP[key];
		        drawPath[methodKey] && drawPath[methodKey](ctx, item);
		      }
		    }
		  }

		  //5.绘制图片
		  if (objectProtoType.isArray(pics) && pics.length > 0) {
		    for (let key in pics) {
			  drawImg && drawImg(ctx, pics[key]);
		    }
		  }

		  //6.绘制文字描述
		  if (objectProtoType.isArray(texts) && texts.length > 0) {
		    for (let key in texts) {
		      let textItem = texts[key];
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
		}

	    //封装：图片下载任务
	    function packPicTasks(){
		    let pics = [];				//一般图片资源
		    let	preloadPics = [];		//预加载图片资源
	    	let picTasks = {};			//图片资源下载任务
	    	opts.pics.forEach((pic, index)=>{
	    		let key = mathRandomHash();
	    		picTasks[key] = function (cb) {
	    			canvasApi['getImageInfos'] && canvasApi['getImageInfos']({
	    				opts,
	    				ERROR_TYPE, 
	    				src : pic.src, 
	    				callback : (err, info)=>{
		    			  if(err){
		    			  	emitResCallbacks(err, null);
		    			  	return;
		    			  }
						  let preload = pic['preload'] || false;//是否是预加载图片
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
						    preloadPics.push(res);
						  }else{
						  	pics.push(res);
						  }
						  cb(null, res);
						}
	    			})
	    		}
	    	});
	    	//console.log('picTasks', picTasks);
	    	return {
	    		pics,
	    		picTasks,
	    		preloadPics
	    	}
	    }

	    //end-canvas
	}
}
export default CanvasPosterSprite;