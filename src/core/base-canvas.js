import { ERROR_TYPE, PATHS_MAP } from '../config/config.js'
import { merge, mathRandomHash } from '../utils/helper.js'
import { objectProtoType } from '../utils/type.js'
import { parallelTasks } from '../utils/parallel.js'
import DrawPath from '../draw-path/base-draw-path.js'
import DrawText from '../draw-text/base-draw-text.js'

/**
** @desc canvas合成海报 - 基类
**/
class CanvasPosterSprite{
	constructor(setting, {
		platform,
		canvasApi,
		canvasCtxApi
	}){
		if(!objectProtoType.isObject(setting)){
	      console.error("参数错误，参数必须是对象！");
	      return;
		}
		this.options = setting || {};		//配置
		this.__platform__ = platform;		//当前运行平台
		this.drawPath = new DrawPath(canvasCtxApi);	 //路径方法
		this.drawText = new DrawText(canvasCtxApi);	 //文本方法
		this.canvasApi = {					//画布api
			...canvasApi,
			...canvasCtxApi
		};				
		this.canvasResult = {
			hasEmit : false,				//是否已经执行回调
			err : null,						//canvas-异常
			res : null,						//canvas-结果
		}	
		this.context = {
			ctx : null,						//当前canvas实例的ctx对象
			canvas : null,					//当前canvas实例对象
		}
		this.resCallbacks = [];			    //结果回调
		//是否有回调callback参数
		if(objectProtoType.isFunction(this.options.callback)){
			this.resCallbacks.push(this.options.callback);
		}
		return this;
	}
	//then回调
	then(callback){
		if(objectProtoType.isFunction(callback)){
			this.resCallbacks.push(callback);

			//then调用之前，已经有输出，直接回调给外部
			//应用情形：web没有图片资源的情况下，exeCanvasTask优先then函数执行
			if(this.canvasResult.hasEmit){
				callback(this.canvasResult.err, this.canvasResult.res);
			}
		}
		return this;
	}
	//画图
	drawImg(ctx, target){
		let drawPath = this.drawPath || {};
		let w = target.w || target.img.width;
		let h = target.h || target.img.height;
	    if (target['r'] || target['angle']) {//添加圆倒角 || 旋转
	      drawPath.rect && drawPath.rect(ctx, {
	        x: target['x'],
	        y: target['y'],
	        w: w,
	        h: h,
	        r: target['r'],
	        angle: target['angle'],
	        callback: function (res) {
	          ctx.drawImage(target.img, res.x, res.y, res.w, res.h);
	        }
	      });
	    } else {
	      ctx.drawImage(target.img, target.x, target.y, w, h);
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
	    let picTasks = packPicTasks();
	    parallelTasks(picTasks, function (err, res) {
	        // console.log('已下载的图片资源：', res);
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

	        //区分是预加载图片， 还是普通图片
	        //for in 对key值默认有升序排序(兼容性?)
	        let pics = [],preloadPics = [];
	        for(let key in res){
	        	if(res[key].preload){
	        		preloadPics.push(res[key]);
	        	}else{
	        		pics.push(res[key]);
	        	}
	        }

	        //兼容处理：手动-数组-升序(即数组头部的图片优先canvas)
	        pics.length > 0 && pics.sort((a, b)=>{
	        	return a.zIndex - b.zIndex;
	        });
	        preloadPics.length > 0 && preloadPics.sort((a, b)=>{
	        	return a.zIndex - b.zIndex;
	        });

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
						  cb(null, {
						    img: info.path,
						    x: pic.x,
						    y: pic.y,
						    w: pic['w'],
						    h: pic['h'],
						    r: pic['r'],
						    zIndex : index,						//图片在数组的层级
						    preload: pic['preload'] || false,   //是否是预加载图片
						    angle: pic['angle']
						  });
						}
	    			})
	    		}
	    	});
	    	// console.log('picTasks', picTasks);
	    	return picTasks;
	    }
	}
}
export default CanvasPosterSprite;