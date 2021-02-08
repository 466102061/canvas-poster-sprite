/**
** @desc web canva-api
**/
let canvasApi = {
	// getImageInfos: ()=>{},			//下载图片
	// createCanvasContext: ()=>{},		//创建canvas
	// canvasToTempFilePath: ()=>{},    //导出base64
}

//创建一个canvas画布,返回ctx
canvasApi.createCanvasContext = function(opts){
	let canvas = document.createElement("canvas");
	let ctx = canvas.getContext("2d");
	canvas.width = opts.width;
	canvas.height = opts.height;
	return {
		ctx,
		canvas
	}
}

//导出画布：图片格式为base64
canvasApi.canvasToTempFilePath = function({
	canvas, 
	opts,
	ERROR_TYPE,
	callback
}){
	try{
		let tempFilePath = canvas.toDataURL(opts.fileType, opts.quality);
		callback(null, { tempFilePath });
	}catch(e){
	    callback({
	    	desc: "canva海报导出失败.",
	      	err: JSON.stringify(e),
            code: ERROR_TYPE.TOBASE64.CODE,
            msg: ERROR_TYPE.TOBASE64.MSG,
	      	src: ""
	    }, null);
	}
}

/**
** @desc 获取image信息
** @param {String} src 					//图片地址(http|https|本地)
** @param {Function} callback 			//回调
** @param {Function} ERROR_TYPE  		//错误映射表
**/
canvasApi.getImageInfos = function({
	src, 
	ERROR_TYPE, 
	callback
}){
	if(isNetworkSrc(src)){
		// console.log("http或者https图片:",src);
		getImageBlob(src, ERROR_TYPE, callback);
	}else{
        // console.log("本地图片:",src);
		getImageSelf(src, ERROR_TYPE, callback);
	}
}

//判断src是否是http或者https
function isNetworkSrc(src){
	let flag = false;
	let isHttp = (src && src.lastIndexOf("http://") > -1);
	let isHttps = (src && src.lastIndexOf("https://") > -1);
	if(isHttp || isHttps){
		flag = true;
	}
	return flag;
}

//把https/http的图像,转换成blob文件对象
function getImageBlob (url, ERROR_TYPE, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (this.status == 200) {
        //这里面可以直接通过URL的api将其转换，然后赋值给img.src
        let image = new Image();
        image.setAttribute("crossOrigin",'Anonymous');
        image.src = URL.createObjectURL(this.response);
        image.onload = function(){
            callback(null, {path : image});
        }
		image.onerror = function(e){
			callback({
				src : src,
				err : JSON.stringify(e),
				desc : "blob图片资源素材加载失败.",
		        code: ERROR_TYPE.GETIMG.CODE,
		        msg: ERROR_TYPE.GETIMG.MSG,
			}, null);
		}
      }
    };    
    xhr.send();    
}

//原样返回
function getImageSelf(src, ERROR_TYPE, callback){
	let image = new Image();
    // image.setAttribute("crossOrigin",'Anonymous');
	image.src = src;
	image.onload = function(){
		callback(null, {path : image});
	}
	image.onerror = function(e){
		callback({
			src : src,
			err : JSON.stringify(e),
			desc : "图片资源素材加载失败.",
            code: ERROR_TYPE.GETIMG.CODE,
            msg: ERROR_TYPE.GETIMG.MSG,
		}, null);
	}
}

export {
	canvasApi
}