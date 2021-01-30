/**
** @desc 合并参数
** @param {Object} target
** @param {Object} from
**/
function merge(target, ...reset){
	let from = [...reset];
	if(from.length == 0){
		return target;
	}
	from.forEach((item, index)=>{
		for(let key in item){
			target[key] = item[key];
		}
	});
	return target;
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

/**
** @desc 获取image信息
** @param {String} src 					//图片地址(http|https|本地)
** @param {Function} callback 			//回调
** @param {Function} ERROR_TYPE  		//错误映射表
**/
function getImageInfos({
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

//把https/http的图像,转换成blob文件对象
function getImageBlob (url, ERROR_TYPE, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (this.status == 200) {
        //这里面可以直接通过URL的api将其转换，然后赋值给img.src
        var image = new Image();
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
	var image = new Image();
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

//简单hash值
function mathRandomHash(){
	return Math.random().toString(16).substr(2);
}

export {
	merge,
	isNetworkSrc,
	getImageInfos,
	mathRandomHash
}

