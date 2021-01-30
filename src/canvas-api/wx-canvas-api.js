
//创建一个canvas画布,返回ctx
function createCanvasContext(opts){
	let canvas = opts.self || {};
	var ctx = wx.createCanvasContext(opts.canvasId, opts.self);
	return {
		ctx,
		canvas
	}
}

//导出画布：图片格式为本地路径
function canvasToTempFilePath({
	ctx, 
	opts,
	ERROR_TYPE,
	callback
}){
 try {
    ctx.draw(true, function () {
      wx.canvasToTempFilePath({
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

//微信下载图片：本地、网络
function getImageInfos({
  src, 
  ERROR_TYPE, 
  callback
}){
    wx.getImageInfo({
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

export {
	getImageInfos,
	createCanvasContext,
	canvasToTempFilePath
}