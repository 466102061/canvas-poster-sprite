/**
** @desc 支付宝小程序api
**/
//导出画布：图片格式为本地路径
function canvasToTempFilePath({
	ctx, 
	opts,
	ERROR_TYPE,
	callback
}){
 try {
    ctx.draw(true, function () {
      ctx.toTempFilePath({
        fileType : opts.fileType || "jpg",
        quality : opts.quality || 1,
        success: function (res) {
          let { 
          	tempFilePath, 	//客户端内部路径。例如“/sdcard/xxx”，小程序内不识别。
          	apFilePath,  //http 协议临时路径。例如“http://res/xxx.image”，小程序内可正常使用。 
          } = res;
          callback(null, {
            res : res,
          	tempFilePath: apFilePath
          });
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

export {
	canvasToTempFilePath
}