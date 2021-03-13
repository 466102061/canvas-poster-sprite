let defaultApi = {
  __getImageInfo__: ()=>{},            //下载图片
  __createCanvasContext__: ()=>{},     //创建canvas的ctx
  __canvasToTempFilePath__: ()=>{},   //保存本地路径
}

//各平台对应的原生api
let canvasEnvApi = defaultApi;    //各平台原生Api
let __isConfig__ = false;         //是否已经设置过环境对象

//设置各平台对应的原生Api
function setCanvasEvnApi(targetApi){
  if(__isConfig__){
    console.error(`You have already set canvasEnvApi and cannot change it.`);
    return;
  }
  canvasEnvApi = targetApi || defaultApi;
  __isConfig__ = true;
}



//封装的方法，如平台差异，可重写对应的method
let canvasApi = {
  // getImageInfos: ()=>{},     //下载图片
  // createCanvasContext: ()=>{},   //创建canvas
  // canvasToTempFilePath: ()=>{},    //导出base64
}

//创建一个canvas画布,返回ctx,canvas
canvasApi.createCanvasContext = function(opts){
	if(!canvasEnvApi.__createCanvasContext__) return;
	let ctx = canvasEnvApi.__createCanvasContext__(opts.canvasId, opts.self);
	return {
		ctx,
		canvas : ctx
	}
}

//导出画布：图片格式为本地路径
canvasApi.canvasToTempFilePath = function({
	ctx, 
	opts,
	ERROR_TYPE,
	callback
}){
 if(!canvasEnvApi.__canvasToTempFilePath__) return;
 try {
    //setTimeout:修复uni,没有图片资源，ctx.draw不进入回调的bug
    //bug描述：https://ask.dcloud.net.cn/question/115206
    setTimeout(()=>{
      ctx.draw(true, function () {
        canvasEnvApi.__canvasToTempFilePath__({
          fileType : opts.fileType || "jpg",
          quality : opts.quality || 1,
          canvasId: opts.canvasId,
          success: function (res) {
            callback(null, res);
          },
          fail: function (err) {
            callback({
              desc : "海报保存失败.",
              err: JSON.stringify(err),
              code: ERROR_TYPE.SAVE.CODE,
              msg: ERROR_TYPE.SAVE.MSG,
              src: ""
            }, null);
          }
        }, opts.self);
      });
    }, 250);
  } catch (e) {
    callback({
    	  desc : "canva海报绘制失败.",
      	err: JSON.stringify(e),
        code: ERROR_TYPE.DRAW.CODE,
        msg: ERROR_TYPE.DRAW.MSG,
      	src: ""
    }, null);
  }
}

//各小程序(或uni)平台，下载网络图片的api
canvasApi.getImageInfos = function({
  src, 
  ERROR_TYPE, 
  callback
}){
	if(!canvasEnvApi.__getImageInfo__) return;
    canvasEnvApi.__getImageInfo__({
      src: src,
      fail: function (err) {
        callback({
          desc : '图片下载失败.',
          err: JSON.stringify(err),
          code: ERROR_TYPE.GETIMG.CODE,
          msg: ERROR_TYPE.GETIMG.MSG,
          src: src
        }, null);
      },
      success(res) {
        callback(null, res);
        // console.log("图片信息:", res);
      }
    })
}

export{
	canvasApi,
	setCanvasEvnApi
}