/*! For license information please see my-canvas-poster-sprite.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CanvasPosterSprite=t():e.CanvasPosterSprite=t()}(self,(function(){return(()=>{"use strict";var e={811:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r,i={TASK:{CODE:1001,MSG:"异步并行任务失败，获取图片资源失败！"},DRAW:{CODE:1002,MSG:"canvas海报绘制失败!"},SAVE:{CODE:1003,MSG:"海报保存为临时文件失败!"},GETIMG:{CODE:1004,MSG:"图片资源下载到本地失败!"},TOBASE64:{CODE:1005,MSG:"本地图片转换base64失败!"}},a={line:"line",rect:"rect",circle:"circle",triangle:"triangle",polygon:"polygon"},o={width:640,height:640,bgColor:"white",fileType:"jpeg",quality:1,version:n(306).version,pics:[],texts:[],paths:{},callback:function(e,t){}},s={self:"",canvasId:""},l=(r={},["String","Object","Number","Array","Undefined","Function","Null"].forEach((function(e){r["is"+e]=function(t){return Object.prototype.toString.call(t)=="[object "+e+"]"}})),r);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,n;return t=e,(n=[{key:"triangle",value:function(e,t){t.points&&0!=t.points.length?t.points.length=3:t.points=[{x:0,y:0},{x:8,y:8},{x:16,y:0}],this.polygon(e,t)}},{key:"circle",value:function(e,t){this.rect(e,{x:t.x,y:t.y,r:t.r,w:2*t.r,h:2*t.r,type:t.type,color:t.color,angle:t.angle,callback:t.callback})}},{key:"rect",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.x||0,i=t.y||0,a=t.w||0,o=t.h||0,s=t.r||0,l=t.callback||function(e){},c=t.type||"stroke",u=t.angle||null;n.setFillStyle&&n.setFillStyle(e,t.color||"white"),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white");var f=/^\d+\.\d+$/;f.test(r)||(r+=.5),f.test(i)||(i+=.5),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),u&&(e.translate(r+.5*a,i+.5*o),e.rotate(u*Math.PI/180),r=-.5*a,i=-.5*o),e.beginPath(),s>0?(e.moveTo(r+s,i),e.lineTo(r+a-s,i),e.arc(r+a-s,i+s,s,-.5*Math.PI,0,!1),e.lineTo(r+a,i+o-s),e.arc(r+a-s,i+o-s,s,0,.5*Math.PI,!1),e.lineTo(r+s,i+o),e.arc(r+s,i+o-s,s,.5*Math.PI,Math.PI,!1),e.lineTo(r,i+s),e.arc(r+s,i+s,s,Math.PI,1.5*Math.PI,!1)):(e.moveTo(r,i),e.lineTo(r+a,i),e.lineTo(r+a,i+o),e.lineTo(r,i+o),e.lineTo(r,i)),e.clip(),e.closePath(),"stroke"==c?e.stroke():e.fill(),e.save(),l({x:r,y:i,w:a,h:o}),e.restore(),e.restore()}},{key:"line",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.x1||0,i=t.y1||0,a=t.x2||0,o=t.y2||0,s=/^\d+\.\d+$/;s.test(r)||(r+=.5),s.test(i)||(i+=.5),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white"),n.setLineJoin&&n.setLineJoin(e,t.lineJoin||"miter"),n.setLineCap&&n.setLineCap(e,t.lineCap||"butt"),t.dash&&n.setLineDash&&n.setLineDash(e,t.dash,t.offset||5),e.beginPath(),e.moveTo(r,i),e.lineTo(a,o),e.closePath(),e.stroke(),e.restore()}},{key:"polygon",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.type||"stroke",i=t.points||[];0!=i.length&&(e.beginPath(),i.forEach((function(t,n){0==n&&e.moveTo(t.x,t.y),e.lineTo(t.x,t.y)})),e.closePath(),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),n.setFillStyle&&n.setFillStyle(e,t.color||"white"),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white"),"stroke"==r?e.stroke():e.fill(),e.restore())}}])&&c(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const p=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,n;return t=e,(n=[{key:"textAlign",value:function(e,t){var n=t.font||14,r=this.canvasApi||{};e.save(),r.setFontSize&&r.setFontSize(e,n),r.setFillStyle&&r.setFillStyle(e,t.color||"black"),r.setTextBaseline&&r.setTextBaseline(e,t.baseline||"middle");var i=t.x||0,a=t.y||0,o=t.w||0,s=i,l=t.lineHeight||20,c=t.angle||null,u=t.align||"left",f=t.text?t.text.toString():"",p=this.measureText(e,f,n);o>0&&"center"==u?s=i+.5*(o-p):o>0&&"right"==u&&(s=i+(o-p)),c?(e.translate(s+.5*p,a+.5*l),e.rotate(c*Math.PI/180),e.fillText(f,-.5*p,-.5*l)):e.fillText(f,s,a),e.restore()}},{key:"wordwrap",value:function(e,t){var n=t.font||14,r=this.canvasApi||{};e.save(),r.setFontSize&&r.setFontSize(e,n),r.setFillStyle&&r.setFillStyle(e,t.color||"black"),r.setTextBaseline&&r.setTextBaseline(e,t.baseline||"middle");var i=t.x||0,a=t.y||0,o=t.w||0,s=t.lineHeight||24,l=t.clamp||-1,c="",u=[],f=t.text||"";f=f.toString().split("");for(var p=0;p<f.length;p++)this.measureText(e,c,n)<o&&this.measureText(e,c+f[p],n)<=o?c+=f[p]:(u.push(c),c=f[p]);u.push(c);var h=u.length;if(l>0&&l<h)for(var v=0;v<l;v++){var y=u[v];v==l-1&&(y=y.substring(0,y.length-1)+"..."),e.fillText(y,i,a+(v+1)*s)}else for(var d=0;d<h;d++)e.fillText(u[d],i,a+(d+1)*s);e.restore()}},{key:"measureText",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14;if(!t)return 0;var r=e.measureText(t).width;return r>0?r:r=t.toString().length*parseInt(n)}}])&&f(t.prototype,n),e}();function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const b=function(){function e(t,n){var r=n.platform,i=n.canvasApi,a=n.canvasCtxApi;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l.isObject(t))return this.options=t||{},this.__platform__=r,this.drawPath=new u(a),this.drawText=new p(a),this.canvasApi=v(v({},i),a),this.canvasResult={hasEmit:!1,err:null,res:null},this.context={ctx:null,canvas:null},this.resCallbacks=[],l.isFunction(this.options.callback)&&this.resCallbacks.push(this.options.callback),this;console.error("参数错误，参数必须是对象！")}var t,n;return t=e,(n=[{key:"then",value:function(e){return l.isFunction(e)&&(this.resCallbacks.push(e),this.canvasResult.hasEmit&&e(this.canvasResult.err,this.canvasResult.res)),this}},{key:"drawImg",value:function(e,t){var n=this.drawPath||{},r=t.w||t.img.width,i=t.h||t.img.height;t.r||t.angle?n.rect&&n.rect(e,{x:t.x,y:t.y,w:r,h:i,r:t.r,angle:t.angle,callback:function(n){e.drawImage(t.img,n.x,n.y,n.w,n.h)}}):e.drawImage(t.img,t.x,t.y,r,i)}},{key:"canvas",value:function(){var e,t=this,n=this.options,r=this.drawImg.bind(this),o=this.drawPath||{},s=this.drawText||{},c=this.canvasApi||{},u=this.__platform__,f=this.resCallbacks||[];function p(e,n){f.forEach((function(t){l.isFunction(t)&&t(e,n)})),t.canvasResult={err:e,res:n,hasEmit:!0}}function h(e){var f=e.paths,h=void 0===f?{}:f,y=e.texts,d=void 0===y?[]:y,b=e.pics,g=void 0===b?[]:b,m=e.preloadPics,x=void 0===m?[]:m;if(c.createCanvasContext){var S=c.createCanvasContext(n),_=S.ctx,w=S.canvas;if(_.__platform__=u,w.__platform__=u,t.context.ctx=_,t.context.canvas=w,_.rect(0,0,n.width,n.height),c.setFillStyle&&c.setFillStyle(_,n.bgColor||"white"),_.fill(),l.isArray(x)&&x.length>0)for(var T in x)r&&r(_,x[T]);if((l.isObject(h)?Object.getOwnPropertyNames(h):[]).length>0)for(var O in h){var P=h[O];for(var k in P){var j=P[k],E=a[O];o[E]&&o[E](_,j)}}if(l.isArray(g)&&g.length>0)for(var C in g)r&&r(_,g[C]);if(l.isArray(d)&&d.length>0)for(var I in d){var A=d[I];A.multiple&&A.w?s.wordwrap&&s.wordwrap(_,A):s.textAlign&&s.textAlign(_,A)}c.canvasToTempFilePath&&c.canvasToTempFilePath({ctx:_,opts:n,canvas:w,ERROR_TYPE:i,callback:function(e,t){p(e,v(v({},t),{},{canvas:w}))}})}}l.isArray(n.pics)&&n.pics.length>0?function(e,t){var n={},r={};if(0!=Object.getOwnPropertyNames(e).length){for(var i in e)n[i]=null,r[i]={complate:!1};var a=function(e,i,a){i?t(i,null):(r[e].complate=!0,n[e]=a,function(){var e=!0;for(var t in r)if(!r[t].complate){e=!1;break}return e}()&&t(null,n))};for(var i in e)(0,e[i])(a.bind(null,i))}else t(null,null)}((e={},n.pics.forEach((function(t,r){var a=Math.random().toString(16).substr(2);e[a]=function(e){c.getImageInfos&&c.getImageInfos({opts:n,ERROR_TYPE:i,src:t.src,callback:function(n,i){n?p(n,null):e(null,{img:i.path,x:t.x,y:t.y,w:t.w,h:t.h,r:t.r,zIndex:r,preload:t.preload||!1,angle:t.angle})}})}})),e),(function(e,t){if(e)p({code:i.TASK.CODE,msg:i.TASK.MSG,err:JSON.stringify(e),src:""},null);else{var r=[],a=[];for(var o in t)t[o].preload?a.push(t[o]):r.push(t[o]);r.length>0&&r.sort((function(e,t){return e.zIndex-t.zIndex})),a.length>0&&a.sort((function(e,t){return e.zIndex-t.zIndex})),h({pics:r,preloadPics:a,paths:n.paths,texts:n.texts})}})):h({paths:n.paths,texts:n.texts})}}])&&d(t.prototype,n),e}();var g={__getImageInfo__:function(){},__createCanvasContext__:function(){},__canvasToTempFilePath__:function(){}},m=g,x=!1,S={createCanvasContext:function(e){if(m.__createCanvasContext__){var t=e.self||{};return{ctx:m.__createCanvasContext__(e.canvasId,e.self),canvas:t}}},canvasToTempFilePath:function(e){var t=e.ctx,n=e.opts,r=e.ERROR_TYPE,i=e.callback;if(m.__canvasToTempFilePath__)try{t.draw(!0,(function(){m.__canvasToTempFilePath__({fileType:n.fileType||"jpg",quality:n.quality||1,canvasId:n.canvasId,success:function(e){i(null,e)},fail:function(e){i({desc:"海报保存失败.",err:JSON.stringify(e),code:r.SAVE.CODE,msg:r.SAVE.MSG,src:""},null)}},n.self)}))}catch(e){i({desc:"canva海报绘制失败.",err:JSON.stringify(e),code:r.DRAW.CODE,msg:r.DRAW.MSG,src:""},null)}},getImageInfos:function(e){var t=e.src,n=e.ERROR_TYPE,r=e.callback;m.__getImageInfo__&&m.__getImageInfo__({src:t,fail:function(e){r({desc:"图片下载失败.",err:JSON.stringify(e),code:n.GETIMG.CODE,msg:n.GETIMG.MSG,src:t},null)},success:function(e){r(null,e)}})}},_={},w=!1,T=!0;function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}_.setLineWidth=function(e,t){T?e.setLineWidth(t):e.lineWidth=t},_.setLineCap=function(e,t){T?e.setLineCap(t):e.lineCap=t},_.setLineJoin=function(e,t){T?e.setLineJoin(t):e.lineJoin=t},_.setLineDash=function(e,t,n){T?e.setLineDash(t,n):e.setLineDash(t)},_.setFillStyle=function(e,t){T?e.setFillStyle(t):e.fillStyle=t},_.setStrokeStyle=function(e,t){T?e.setStrokeStyle(t):e.strokeStyle=t},_.setFontSize=function(e,t){T?e.setFontSize(t):e.font=t},_.setTextBaseline=function(e,t){T?e.setTextBaseline(t):e.textBaseline=t};var C,I="my-Miniprogram";w?console.error("You have already set __setByMethod__ and cannot change it."):(T=!0,w=!0),C={__getImageInfo__:my.getImageInfo,__createCanvasContext__:my.createCanvasContext},x?console.error("You have already set canvasEnvApi and cannot change it."):(m=C||g,x=!0),S.canvasToTempFilePath=function(e){var t=e.ctx,n=e.opts,r=e.ERROR_TYPE,i=e.callback;try{t.draw(!0,(function(){t.toTempFilePath({fileType:n.fileType||"jpg",quality:n.quality||1,success:function(e){e.tempFilePath;var t=e.apFilePath;i(null,{res:e,tempFilePath:t})},fail:function(e){i({desc:"海报保存失败.",err:JSON.stringify(e),code:r.SAVE.CODE,msg:r.SAVE.MSG,src:""},null)}},n.self)}))}catch(e){i({desc:"canva海报绘制失败.",err:JSON.stringify(e),code:r.DRAW.CODE,msg:r.DRAW.MSG,src:""},null)}};const A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=E(t);if(n){var i=E(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return k(this,e)});function i(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),!l.isObject(e))return console.error("参数错误，参数必须是对象！"),k(t);var n=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=[].concat(n);return 0==i.length||i.forEach((function(t,n){for(var r in t)e[r]=t[r]})),e}({},o,s,e);return(t=r.call(this,n,{platform:I,canvasApi:S,canvasCtxApi:_})).options=n,t.canvas(),k(t,j(t))}return i}(b)},306:e=>{e.exports=JSON.parse('{"name":"canvas-poster-sprite","version":"1.0.2","description":"A poster plugin that can draw texts, paths and pictures to canvas, and export picture data.","main":"dis/web-canvas-poster-sprite.js","directories":{"example":"examples"},"scripts":{"my-build":"node build/my-build.js","qq-build":"node build/qq-build.js","swan-build":"node build/swan-build.js","tt-build":"node build/tt-build.js","uni-build":"node build/uni-build.js","web-build":"node build/web-build.js","wx-build":"node build/wx-build.js","pack":"webpack --config webpack.config.js","build":"node --max_semi_space_size=64 build/build.js","test":"echo \\"Error: no test specified\\" && exit 1"},"keywords":["canvas","poster","sprite"],"author":"小小咖","email":"466102061@qq.com","license":"MIT","devDependencies":{"@babel/core":"^7.12.10","@babel/preset-env":"^7.12.11","babel-loader":"^8.2.2","chalk":"^4.1.0","ora":"^5.3.0","rimraf":"^3.0.2","webpack":"^5.17.0","webpack-cli":"^4.4.0"}}')}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(811)})()}));