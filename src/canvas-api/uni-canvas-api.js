import { pathToBase64, base64ToPath } from '../libs/uni-image-tools.js'

//uni下载图片：本地、网络
function getImageInfos({
	src, 
	opts,
	ERROR_TYPE, 
	callback
}){
	if(opts && opts.appPlus){//app
  		plusDownLoader(src, ERROR_TYPE, callback);
	}else{//小程序 | h5
  		uniGetImageInfo(src, ERROR_TYPE, callback);
	}
}

/**
* @desc 下载图片到本地
* @param {Object} src
* @param {Object} cb
* @param {Object} callback
* 
* @desc 局限性：app下载二维码等图片，保存的图片名称没有后缀名，解析不是图片格式，导致drawImge会报错
*/
function uniGetImageInfo(src, ERROR_TYPE, callback) {
	uni.getImageInfo({
	  src: src,
	  fail: function (err) {
	    callback({
	      desc : "图片下载失败.",
	      err: JSON.stringify(err),
            code: ERROR_TYPE.GETIMG.CODE,
            msg: ERROR_TYPE.GETIMG.MSG,
	      src: src
	    }, null);
	  },
	  success(res) {
	    callback(null, res);
	  }
	})
}

// app-plus 下载图片到本地，并且指定路径与图片名称
function plusDownLoader(src, ERROR_TYPE, callback){
	if(typeof plus != 'object'){
		return;
	}
	var id = Math.random().toString(16).substr(2);
	//保存文件路径仅支持以"_downloads/"、"_doc/"、"_documents/"开头的字符串
	//如果指定的文件已经存在，则自动在文件名后面加"(i)"，其中i为数字，如果文件名称后面已经是此格式，则数字i递增
	var downloadPath = '_downloads/image/pic_'+id+'_.png';
	var downLoader = plus.downloader.createDownload(src, {  
		method: 'GET',  
		filename: downloadPath  
	}, function(res, status) {  
		if(status == 200){
			// if(!opts.isAndroid){
			// 	callback(null, {path : res.filename});
			// 	return;
			// }
			//部分android转换base64做兼容
			/**
			 * @desc 一加手机 导出画布失败
			 * @bug https://ask.dcloud.net.cn/question/103303
			 * @date 2020-09-15
			 */
			pathToBase64(res.filename)
			  .then(base64 => {
			    // console.log(base64)
				callback(null, { path : base64 });
			  })
			  .catch(error => {
				opts.callback({
				  desc : "转base64图片出错.",
				  err: JSON.stringify(error),
		          code: ERROR_TYPE.TOBASE64.CODE,
		          msg: ERROR_TYPE.TOBASE64.MSG,
				  src: src
				}, null);
			  })
		}else{
			opts.callback({
			  desc : "下载失败.",
			  err: JSON.stringify(res),
              code: ERROR_TYPE.GETIMG.CODE,
              msg: ERROR_TYPE.GETIMG.MSG,
			  src: src
			}, null);
		} 
	});  
	downLoader.start();
}

export {
	getImageInfos
}