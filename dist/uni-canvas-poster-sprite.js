/*! For license information please see uni-canvas-poster-sprite.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CanvasPosterSprite=t():e.CanvasPosterSprite=t()}(self,(function(){return(()=>{"use strict";var e={691:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r,o={TASK:{CODE:1001,MSG:"异步并行任务失败，获取图片资源失败！"},DRAW:{CODE:1002,MSG:"canvas海报绘制失败!"},SAVE:{CODE:1003,MSG:"海报保存为临时文件失败!"},GETIMG:{CODE:1004,MSG:"图片资源下载到本地失败!"},TOBASE64:{CODE:1005,MSG:"本地图片转换base64失败!"}},i={line:"line",rect:"rect",circle:"circle",triangle:"triangle",polygon:"polygon"},a={width:640,height:640,bgColor:"white",fileType:"jpeg",quality:1,version:n(306).version,pics:[],texts:[],paths:{},callback:function(e,t){}},s={self:"",canvasId:""},l={appPlus:!1,pixelRatio:2},c=(r={},["String","Object","Number","Array","Undefined","Function","Null"].forEach((function(e){r["is"+e]=function(t){return Object.prototype.toString.call(t)=="[object "+e+"]"}})),r);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const f=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,n;return t=e,(n=[{key:"triangle",value:function(e,t){t.points&&0!=t.points.length?t.points.length=3:t.points=[{x:0,y:0},{x:8,y:8},{x:16,y:0}],this.polygon(e,t)}},{key:"circle",value:function(e,t){this.rect(e,{x:t.x,y:t.y,r:t.r,w:2*t.r,h:2*t.r,type:t.type,color:t.color,angle:t.angle,callback:t.callback})}},{key:"rect",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.x||0,o=t.y||0,i=t.w||0,a=t.h||0,s=t.r||0,l=t.callback||function(e){},c=t.type||"stroke",u=t.angle||null;n.setFillStyle&&n.setFillStyle(e,t.color||"white"),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white");var f=/^\d+\.\d+$/;f.test(r)||(r+=.5),f.test(o)||(o+=.5),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),u&&(e.translate(r+.5*i,o+.5*a),e.rotate(u*Math.PI/180),r=-.5*i,o=-.5*a),e.beginPath(),s>0?(e.moveTo(r+s,o),e.lineTo(r+i-s,o),e.arc(r+i-s,o+s,s,-.5*Math.PI,0,!1),e.lineTo(r+i,o+a-s),e.arc(r+i-s,o+a-s,s,0,.5*Math.PI,!1),e.lineTo(r+s,o+a),e.arc(r+s,o+a-s,s,.5*Math.PI,Math.PI,!1),e.lineTo(r,o+s),e.arc(r+s,o+s,s,Math.PI,1.5*Math.PI,!1)):(e.moveTo(r,o),e.lineTo(r+i,o),e.lineTo(r+i,o+a),e.lineTo(r,o+a),e.lineTo(r,o)),e.clip(),e.closePath(),"stroke"==c?e.stroke():e.fill(),e.save(),l({x:r,y:o,w:i,h:a}),e.restore(),e.restore()}},{key:"line",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.x1||0,o=t.y1||0,i=t.x2||0,a=t.y2||0,s=/^\d+\.\d+$/;s.test(r)||(r+=.5),s.test(o)||(o+=.5),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white"),n.setLineJoin&&n.setLineJoin(e,t.lineJoin||"miter"),n.setLineCap&&n.setLineCap(e,t.lineCap||"butt"),t.dash&&n.setLineDash&&n.setLineDash(e,t.dash,t.offset||5),e.beginPath(),e.moveTo(r,o),e.lineTo(i,a),e.closePath(),e.stroke(),e.restore()}},{key:"polygon",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.type||"stroke",o=t.points||[];0!=o.length&&(e.beginPath(),o.forEach((function(t,n){0==n&&e.moveTo(t.x,t.y),e.lineTo(t.x,t.y)})),e.closePath(),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),n.setFillStyle&&n.setFillStyle(e,t.color||"white"),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white"),"stroke"==r?e.stroke():e.fill(),e.restore())}}])&&u(t.prototype,n),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const d=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,n;return t=e,(n=[{key:"textAlign",value:function(e,t){var n=t.font||14,r=this.canvasApi||{};e.save(),r.setFontSize&&r.setFontSize(e,n),r.setFillStyle&&r.setFillStyle(e,t.color||"black"),r.setTextBaseline&&r.setTextBaseline(e,t.baseline||"middle");var o=t.x||0,i=t.y||0,a=t.w||0,s=o,l=t.lineHeight||20,c=t.angle||null,u=t.align||"left",f=t.text?t.text.toString():"",p=this.measureText(e,f,n);a>0&&"center"==u?s=o+.5*(a-p):a>0&&"right"==u&&(s=o+(a-p)),c?(e.translate(s+.5*p,i+.5*l),e.rotate(c*Math.PI/180),e.fillText(f,-.5*p,-.5*l)):e.fillText(f,s,i),e.restore()}},{key:"wordwrap",value:function(e,t){var n=t.font||14,r=this.canvasApi||{};e.save(),r.setFontSize&&r.setFontSize(e,n),r.setFillStyle&&r.setFillStyle(e,t.color||"black"),r.setTextBaseline&&r.setTextBaseline(e,t.baseline||"middle");var o=t.x||0,i=t.y||0,a=t.w||0,s=t.lineHeight||24,l=t.clamp||-1,c="",u=[],f=t.text||"";f=f.toString().split("");for(var p=0;p<f.length;p++)this.measureText(e,c,n)<a&&this.measureText(e,c+f[p],n)<=a?c+=f[p]:(u.push(c),c=f[p]);u.push(c);var d=u.length;if(l>0&&l<d)for(var y=0;y<l;y++){var h=u[y];y==l-1&&(h=h.substring(0,h.length-1)+"..."),e.fillText(h,o,i+(y+1)*s)}else for(var b=0;b<d;b++)e.fillText(u[b],o,i+(b+1)*s);e.restore()}},{key:"measureText",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14;if(!t)return 0;var r=e.measureText(t).width;return r>0?r:r=t.toString().length*parseInt(n)}}])&&p(t.prototype,n),e}();function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const g=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c.isObject(t))return this.options=t||{},this.drawPath={},this.drawText={},this.canvasApi={},this.resCallbacks=[],this.canvasResult={isEmit:!1,err:null,res:null},c.isFunction(this.options.callback)&&this.resCallbacks.push(this.options.callback),this;console.error("参数错误，参数必须是对象！")}var t,n;return t=e,(n=[{key:"then",value:function(e){return c.isFunction(e)&&(this.resCallbacks.push(e),this.canvasResult.isEmit&&e(this.canvasResult.err,this.canvasResult.res)),this}},{key:"drawImg",value:function(e,t){var n=this.drawPath||{};t.r||t.angle?n.rect&&n.rect(e,{x:t.x,y:t.y,w:t.w,h:t.h,r:t.r,angle:t.angle,callback:function(n){e.drawImage(t.img,n.x,n.y,n.w,n.h)}}):e.drawImage(t.img,t.x,t.y,t.w,t.h)}},{key:"canvas",value:function(){var e=this.options,t=this.drawImg.bind(this),n=this.drawPath||{},r=this.drawText||{},a=this.canvasApi||{},s=this.__platform__;e.preload=[];var l={},u=this,f=this.resCallbacks||[];function p(e,t){f.forEach((function(n){c.isFunction(n)&&n(e,t)})),u.canvasResult={err:e,res:t,isEmit:!0}}if(c.isArray(e.pics))for(var d=function(t){var n=Math.random().toString(16).substr(2),r=e.pics[t];l[n]=function(t){a.getImageInfos&&a.getImageInfos({opts:e,ERROR_TYPE:o,src:r.src,callback:function(n,o){if(n)p(n,null);else{var i=r.preload||!1,a={img:o.path,x:r.x,y:r.y,w:r.w,h:r.h,r:r.r,preload:i,angle:r.angle};i&&e.preload.push(a),t(null,a)}}})}},y=0;y<e.pics.length;y++)d(y);!function(e,t){var n={},r={};if(0!=Object.getOwnPropertyNames(e).length){for(var o in e)n[o]=null,r[o]={complate:!1};var i=function(e,o,i){o?t(o,null):(r[e].complate=!0,n[e]=i,function(){var e=!0;for(var t in r)if(!r[t].complate){e=!1;break}return e}()&&t(null,n))};for(var o in e)(0,e[o])(i.bind(null,o))}else t(null,null)}(l,(function(l,u){if(l)p({code:o.TASK.CODE,msg:o.TASK.MSG,err:JSON.stringify(l),src:""},null);else if(a.createCanvasContext){var f=a.createCanvasContext(e),d=f.ctx,y=f.canvas;if(d.__platform__=s,y.__platform__=s,d.rect(0,0,e.width,e.height),a.setFillStyle&&a.setFillStyle(d,e.bgColor||"white"),d.fill(),e.preload.length>0)for(var b in e.preload)t&&t(d,e.preload[b]);if(Object.getOwnPropertyNames(e.paths).length>0)for(var v in e.paths){var g=e.paths[v];for(var m in g){var w=g[m],S=i[v];n[S]&&n[S](d,w)}}if(u)for(var O in u){var _=u[O];_.preload||t&&t(d,_)}if(c.isArray(e.texts))for(var x in e.texts){var T=e.texts[x];T.multiple&&T.w?r.wordwrap&&r.wordwrap(d,T):r.textAlign&&r.textAlign(d,T)}a.canvasToTempFilePath&&a.canvasToTempFilePath({ctx:d,opts:e,canvas:y,ERROR_TYPE:o,callback:function(e,t){p(e,h(h({},t),{},{canvas:y}))}})}}))}}])&&v(t.prototype,n),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n){if("object"==("undefined"==typeof plus?"undefined":w(plus))){var r="_downloads/image/pic_"+Math.random().toString(16).substr(2)+"_.png";plus.downloader.createDownload(e,{method:"GET",filename:r},(function(r,o){var i;200==o?(i=r.filename,new Promise((function(e,t){if("object"===("undefined"==typeof window?"undefined":m(window))&&"document"in window){if("function"==typeof FileReader){var n=new XMLHttpRequest;return n.open("GET",i,!0),n.responseType="blob",n.onload=function(){if(200===this.status){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.onerror=t,n.readAsDataURL(this.response)}},n.onerror=t,void n.send()}var r=document.createElement("canvas"),o=r.getContext("2d"),a=new Image;return a.onload=function(){r.width=a.width,r.height=a.height,o.drawImage(a,0,0),e(r.toDataURL()),r.height=r.width=0},a.onerror=t,void(a.src=i)}"object"!==("undefined"==typeof plus?"undefined":m(plus))?"object"===("undefined"==typeof wx?"undefined":m(wx))&&wx.canIUse("getFileSystemManager")?wx.getFileSystemManager().readFile({filePath:i,encoding:"base64",success:function(t){e("data:image/png;base64,"+t.data)},fail:function(e){t(e)}}):t(new Error("not support")):plus.io.resolveLocalFileSystemURL(function(e){if(0===e.indexOf("_www")||0===e.indexOf("_doc")||0===e.indexOf("_documents")||0===e.indexOf("_downloads"))return e;if(0===e.indexOf("file://"))return e;if(0===e.indexOf("/storage/emulated/0/"))return e;if(0===e.indexOf("/")){var t=plus.io.convertAbsoluteFileSystem(e);if(t!==e)return t;e=e.substr(1)}return"_www/"+e}(i),(function(n){n.file((function(n){var r=new plus.io.FileReader;r.onload=function(t){e(t.target.result)},r.onerror=function(e){t(e)},r.readAsDataURL(n)}),(function(e){t(e)}))}),(function(e){t(e)}))}))).then((function(e){n(null,{path:e})})).catch((function(n){opts.callback({desc:"转base64图片出错.",err:JSON.stringify(n),code:t.TOBASE64.CODE,msg:t.TOBASE64.MSG,src:e},null)})):opts.callback({desc:"下载失败.",err:JSON.stringify(r),code:t.GETIMG.CODE,msg:t.GETIMG.MSG,src:e},null)})).start()}}var O={__getImageInfo__:function(){},__createCanvasContext__:function(){},__canvasToTempFilePath__:function(){}},_=O,x=!1,T={createCanvasContext:function(e){if(_.__createCanvasContext__){var t=e.self||{};return{ctx:_.__createCanvasContext__(e.canvasId,e.self),canvas:t}}},canvasToTempFilePath:function(e){var t=e.ctx,n=e.opts,r=e.ERROR_TYPE,o=e.callback;if(_.__canvasToTempFilePath__)try{t.draw(!0,(function(){_.__canvasToTempFilePath__({fileType:n.fileType||"jpg",quality:n.quality||1,canvasId:n.canvasId,success:function(e){o(null,e)},fail:function(e){o({desc:"海报保存失败.",err:JSON.stringify(e),code:r.SAVE.CODE,msg:r.SAVE.MSG,src:""},null)}},n.self)}))}catch(e){o({desc:"canva海报绘制失败.",err:JSON.stringify(e),code:r.DRAW.CODE,msg:r.DRAW.MSG,src:""},null)}},getImageInfos:function(e){var t=e.src,n=e.ERROR_TYPE,r=e.callback;_.__getImageInfo__&&_.__getImageInfo__({src:t,fail:function(e){r({desc:"图片下载失败.",err:JSON.stringify(e),code:n.GETIMG.CODE,msg:n.GETIMG.MSG,src:t},null)},success:function(e){r(null,e)}})}},P={},j=!1,k=!0;function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}P.setLineWidth=function(e,t){k?e.setLineWidth(t):e.lineWidth=t},P.setLineCap=function(e,t){k?e.setLineCap(t):e.lineCap=t},P.setLineJoin=function(e,t){k?e.setLineJoin(t):e.lineJoin=t},P.setLineDash=function(e,t,n){k?e.setLineDash(t,n):e.setLineDash(t)},P.setFillStyle=function(e,t){k?e.setFillStyle(t):e.fillStyle=t},P.setStrokeStyle=function(e,t){k?e.setStrokeStyle(t):e.strokeStyle=t},P.setFontSize=function(e,t){k?e.setFontSize(t):e.font=t},P.setTextBaseline=function(e,t){k?e.setTextBaseline(t):e.textBaseline=t};var G,L="uni-app";j?console.error("You have already set __setByMethod__ and cannot change it."):(k=!0,j=!0),G={__getImageInfo__:uni.getImageInfo,__createCanvasContext__:uni.createCanvasContext,__canvasToTempFilePath__:uni.canvasToTempFilePath},x?console.error("You have already set canvasEnvApi and cannot change it."):(_=G||O,x=!0),T.getImageInfos=function(e){var t=e.src,n=e.opts,r=e.ERROR_TYPE,o=e.callback;n&&n.appPlus?S(t,r,o):function(e,t,n){uni.getImageInfo({src:e,fail:function(r){n({desc:"图片下载失败.",err:JSON.stringify(r),code:t.GETIMG.CODE,msg:t.GETIMG.MSG,src:e},null)},success:function(e){n(null,e)}})}(t,r,o)};const W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=A(t);if(n){var o=A(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return M(this,e)});function o(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),!c.isObject(e))return console.error("参数错误，参数必须是对象！"),M(t);var n=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=[].concat(n);return 0==o.length||o.forEach((function(t,n){for(var r in t)e[r]=t[r]})),e}({},a,s,l,e);return(t=r.call(this,n)).options=n,t.__platform__=L,t.drawPath=new f(P),t.drawText=new d(P),t.canvasApi=C(C({},P),T),t.canvas(),M(t,D(t))}return o}(g)},306:e=>{e.exports=JSON.parse('{"name":"canvas-poster-sprite","version":"1.0.2","description":"A poster plugin that can draw texts, paths and pictures to canvas, and export picture data.","main":"dis/web-canvas-poster-sprite.js","directories":{"example":"examples"},"scripts":{"my-build":"node build/my-build.js","qq-build":"node build/qq-build.js","swan-build":"node build/swan-build.js","tt-build":"node build/tt-build.js","uni-build":"node build/uni-build.js","web-build":"node build/web-build.js","wx-build":"node build/wx-build.js","pack":"webpack --config webpack.config.js","build":"node --max_semi_space_size=64 build/build.js","test":"echo \\"Error: no test specified\\" && exit 1"},"keywords":["canvas","poster","sprite"],"author":"小小咖","email":"466102061@qq.com","license":"MIT","devDependencies":{"@babel/core":"^7.12.10","@babel/preset-env":"^7.12.11","babel-loader":"^8.2.2","chalk":"^4.1.0","ora":"^5.3.0","rimraf":"^3.0.2","webpack":"^5.17.0","webpack-cli":"^4.4.0"}}')}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(691)})()}));