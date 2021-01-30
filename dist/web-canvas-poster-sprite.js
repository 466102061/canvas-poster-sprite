/*! For license information please see web-canvas-poster-sprite.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CanvasPosterSprite=t():e.CanvasPosterSprite=t()}(self,(function(){return(()=>{"use strict";var e={319:(e,t,r)=>{function n(e,t,r){var n=new XMLHttpRequest;n.open("get",e,!0),n.responseType="blob",n.onload=function(){if(200==this.status){var e=new Image;e.setAttribute("crossOrigin","Anonymous"),e.src=URL.createObjectURL(this.response),e.onload=function(){r(null,{path:e})},e.onerror=function(e){r({src,err:JSON.stringify(e),desc:"blob图片资源素材加载失败.",code:t.GETIMG.CODE,msg:t.GETIMG.MSG},null)}}},n.send()}r.r(t),r.d(t,{default:()=>E});var o,i={width:640,height:640,bgColor:"#fff",fileType:"jpeg",quality:1,version:r(306).version,pics:[],texts:[],paths:{},callback:function(e,t){}},a=(o={},["String","Object","Number","Array","Undefined","Function","Null"].forEach((function(e){o["is"+e]=function(t){return Object.prototype.toString.call(t)=="[object "+e+"]"}})),o);function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const c=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,r;return t=e,(r=[{key:"triangle",value:function(e,t){t.points&&0!=t.points.length?t.points.length=3:t.points=[{x:0,y:0},{x:8,y:8},{x:16,y:0}],this.polygon(e,t)}},{key:"circle",value:function(e,t){this.rect(e,{x:t.x,y:t.y,r:t.r,w:2*t.r,h:2*t.r,type:t.type,color:t.color,angle:t.angle,callback:t.callback})}},{key:"rect",value:function(e,t){var r=this.canvasApi||{};e.save();var n=t.x||0,o=t.y||0,i=t.w||0,a=t.h||0,l=t.r||0,c=t.callback||function(e){},s=t.type||"stroke",f=t.angle||null;r.setFillStyle&&r.setFillStyle(e,t.color||"white"),r.setStrokeStyle&&r.setStrokeStyle(e,t.color||"white");var u=/^\d+\.\d+$/;u.test(n)||(n+=.5),u.test(o)||(o+=.5),r.setLineWidth&&r.setLineWidth(e,t.lineWidth||1),f&&(e.translate(n+.5*i,o+.5*a),e.rotate(f*Math.PI/180),n=-.5*i,o=-.5*a),e.beginPath(),l>0?(e.moveTo(n+l,o),e.lineTo(n+i-l,o),e.arcTo(n+i,o,n+i,o+l,l),e.lineTo(n+i,o+a-l),e.arcTo(n+i,o+a,n+i-l,o+a,l),e.lineTo(n+l,o+a),e.arcTo(n,o+a,n,o+a-l,l),e.lineTo(n,o+a-l),e.arcTo(n,o,n+l,o,l)):(e.moveTo(n,o),e.lineTo(n+i,o),e.lineTo(n+i,o+a),e.lineTo(n,o+a),e.lineTo(n,o)),e.clip(),e.closePath(),"stroke"==s?e.stroke():e.fill(),e.save(),c({x:n,y:o,w:i,h:a}),e.restore(),e.restore()}},{key:"line",value:function(e,t){var r=this.canvasApi||{};e.save();var n=t.x1||0,o=t.y1||0,i=t.x2||0,a=t.y2||0,l=/^\d+\.\d+$/;l.test(n)||(n+=.5),l.test(o)||(o+=.5),r.setLineWidth&&r.setLineWidth(e,t.lineWidth||1),r.setStrokeStyle&&r.setStrokeStyle(e,t.color||"white"),e.beginPath(),e.moveTo(n,o),e.lineTo(i,a),e.closePath(),e.stroke(),e.restore()}},{key:"polygon",value:function(e,t){var r=this.canvasApi||{};e.save();var n=t.type||"stroke",o=t.points||[];0!=o.length&&(e.beginPath(),o.forEach((function(t,r){0==r&&e.moveTo(t.x,t.y),e.lineTo(t.x,t.y)})),e.closePath(),r.setLineWidth&&r.setLineWidth(e,t.lineWidth||1),r.setFillStyle&&r.setFillStyle(e,t.color||"white"),r.setStrokeStyle&&r.setStrokeStyle(e,t.color||"white"),"stroke"==n?e.stroke():e.fill(),e.restore())}}])&&l(t.prototype,r),e}();function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const f=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,r;return t=e,(r=[{key:"textAlign",value:function(e,t){var r=this.canvasApi||{};e.save(),r.setFontSize&&r.setFontSize(e,t.font||14),r.setFillStyle&&r.setFillStyle(e,t.color||"black"),r.setTextBaseline&&r.setTextBaseline(e,t.baseline||"middle");var n=t.x||0,o=t.y||0,i=t.w||0,a=n,l=t.lineHeight||20,c=t.angle||null,s=t.align||"left",f=t.text?t.text:t||"",u=this.measureText(e,t.font,f);i>0&&"center"==s?a=n+.5*(i-u):i>0&&"right"==s&&(a=n+(i-u)),c?(e.translate(a+.5*u,o+.5*l),e.rotate(c*Math.PI/180),e.fillText(f,-.5*u,-.5*l)):e.fillText(f,a,o),e.restore()}},{key:"wordwrap",value:function(e,t){var r=this.canvasApi||{};e.save(),r.setFontSize&&r.setFontSize(e,t.font||14),r.setFillStyle&&r.setFillStyle(e,t.color||"black"),r.setTextBaseline&&r.setTextBaseline(e,t.baseline||"middle");for(var n=t.x||0,o=t.y||0,i=t.w||0,a=t.lineHeight||24,l=t.text.split("")||"",c=t.clamp||-1,s="",f=[],u=0;u<l.length;u++)this.measureText(e,t.font,s)<i&&this.measureText(e,t.font,s+l[u])<=i?s+=l[u]:(f.push(s),s=l[u]);f.push(s);var p=f.length;if(c>0&&c<p)for(var y=0;y<c;y++){var h=f[y];y==c-1&&(h=h.substring(0,h.length-1)+"..."),e.fillText(h,n,o+(y+1)*a)}else for(var v=0;v<p;v++)e.fillText(f[v],n,o+(v+1)*a);e.restore()}},{key:"measureText",value:function(e,t,r){var n=e.measureText(r).width;if(n>0)return n;var o=parseInt(t);return o=o>0?o:14,r.length*parseInt(o)}}])&&s(t.prototype,r),e}();var u={TASK:{CODE:1001,MSG:"异步并行任务失败，获取图片资源失败！"},DRAW:{CODE:1002,MSG:"canvas海报绘制失败!"},SAVE:{CODE:1003,MSG:"海报保存为临时文件失败!"},GETIMG:{CODE:1004,MSG:"图片资源下载到本地失败!"},TOBASE64:{CODE:1005,MSG:"本地图片转换base64失败!"}},p={line:"line",rect:"rect",circle:"circle",triangle:"triangle",polygon:"polygon"};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g={setLineWidth:function(e,t){e.lineWidth=t},setFillStyle:function(e,t){e.fillStyle=t},setStrokeStyle:function(e,t){e.strokeStyle=t},setFontSize:function(e,t){e.font=t},setTextBaseline:function(e,t){e.textBaseline=t}},d={getImageInfos:function(e){var t=e.src,r=e.ERROR_TYPE,o=e.callback;!function(e){var t=!1,r=e&&e.lastIndexOf("http://")>-1,n=e&&e.lastIndexOf("https://")>-1;return(r||n)&&(t=!0),t}(t)?function(e,t,r){var n=new Image;n.src=e,n.onload=function(){r(null,{path:n})},n.onerror=function(n){r({src:e,err:JSON.stringify(n),desc:"图片资源素材加载失败.",code:t.GETIMG.CODE,msg:t.GETIMG.MSG},null)}}(t,r,o):n(t,r,o)},createCanvasContext:function(e){var t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.width,t.height=e.height,{ctx:r,canvas:t}},canvasToTempFilePath:function(e){var t=e.canvas,r=e.opts,n=e.ERROR_TYPE,o=e.callback;try{o(null,{tempFilePath:t.toDataURL(r.fileType,r.quality)})}catch(e){o({desc:"canva海报导出失败.",err:JSON.stringify(e),code:n.TOBASE64.CODE,msg:n.TOBASE64.MSG,src:""},null)}}};function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(s,e);var t,r,n,o,l=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(n);if(o){var r=k(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function s(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),!a.isObject(e))return console.error("参数错误，参数必须是对象！"),P(t);var r=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=[].concat(r);return 0==o.length||o.forEach((function(t,r){for(var n in t)e[n]=t[n]})),e}({},i,e),n=r.fileType||"image/jpeg";return-1==n.lastIndexOf("image/")&&(n="image/"+n),r.fileType=n,(t=l.call(this,r)).options=r,t.drawPath=new c(g),t.drawText=new f(g),t.canvasApi=O(O({},g),d),t.canvas(),P(t,j(t))}return t=s,(r=[{key:"drawImg",value:function(e,t){var r=this.drawPath||{},n=t.img.width,o=t.img.height,i=1,a=1;t.w&&(i=t.w/t.img.width),t.h&&(a=t.h/t.img.height);var l=t.x/i,c=t.y/a;t.r||t.angle?r.rect&&r.rect(e,{x:t.x,y:t.y,w:t.w,h:t.h,r:t.r,angle:t.angle,callback:function(r){e.drawImage(t.img,r.x,r.y,r.w,r.h)}}):(e.scale(i,a),e.drawImage(t.img,l,c,n,o),e.scale(1/i,1/a))}}])&&S(t.prototype,r),s}(function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a.isObject(t))return this.options=t||{},this.drawPath={},this.drawText={},this.canvasApi={},this;console.error("参数错误，参数必须是对象！")}var t,r;return t=e,(r=[{key:"drawImg",value:function(e,t){var r=this.drawPath||{};t.r||t.angle?r.rect&&r.rect(e,{x:t.x,y:t.y,w:t.w,h:t.h,r:t.r,angle:t.angle,callback:function(r){e.drawImage(t.img,r.x,r.y,r.w,r.h)}}):e.drawImage(t.img,t.x,t.y,t.w,t.h)}},{key:"canvas",value:function(){var e=this.options,t=this.drawImg.bind(this),r=this.drawPath||{},n=this.drawText||{},o=this.canvasApi||{};e.preload=[];var i={};if(a.isArray(e.pics))for(var l=function(t){var r=Math.random().toString(16).substr(2),n=e.pics[t];i[r]=function(t){o.getImageInfos&&o.getImageInfos({opts:e,ERROR_TYPE:u,src:n.src,callback:function(r,o){if(r)e.callback(r,null);else{var i=n.preload||!1,a={img:o.path,x:n.x,y:n.y,w:n.w,h:n.h,r:n.r,preload:i,angle:n.angle};i&&e.preload.push(a),t(null,a)}}})}},c=0;c<e.pics.length;c++)l(c);!function(e,t){var r={},n={};if(0!=Object.getOwnPropertyNames(e).length){for(var o in e)r[o]=null,n[o]={complate:!1};var i=function(e,o,i){o?t(o,null):(n[e].complate=!0,r[e]=i,function(){var e=!0;for(var t in n)if(!n[t].complate){e=!1;break}return e}()&&t(null,r))};for(var o in e)(0,e[o])(i.bind(null,o))}else t(null,null)}(i,(function(i,l){if(i)e.callback({code:u.TASK.CODE,msg:u.TASK.MSG,err:JSON.stringify(i),src:""},null);else if(o.createCanvasContext){var c=o.createCanvasContext(e),s=c.ctx,f=c.canvas;if(s.rect(0,0,e.width,e.height),o.setFillStyle&&o.setFillStyle(s,e.bgColor||"#fff"),s.fill(),e.preload.length>0)for(var y in e.preload)t&&t(s,e.preload[y]);if(Object.getOwnPropertyNames(e.paths).length>0)for(var v in e.paths){var b=e.paths[v];for(var g in b){var d=b[g],m=p[v];r[m]&&r[m](s,d)}}if(l)for(var w in l){var O=l[w];O.preload||t&&t(s,O)}if(a.isArray(e.texts))for(var x in e.texts){var S=e.texts[x];S.multiple&&S.w?n.wordwrap&&n.wordwrap(s,S):n.textAlign&&n.textAlign(s,S)}o.canvasToTempFilePath&&o.canvasToTempFilePath({ctx:s,opts:e,canvas:f,ERROR_TYPE:u,callback:function(t,r){e.callback(t,h(h({},r),{},{canvas:f}))}})}}))}}])&&b(t.prototype,r),e}())},306:e=>{e.exports=JSON.parse('{"name":"canvas-poster-sprite","version":"1.0.0","description":"canvas合成海报插件","main":"dis/web-canvas-poster-sprite.js","directories":{"example":"examples"},"scripts":{"pack":"webpack --config webpack.config.js","build":"node --max_semi_space_size=64 build/build.js","test":"echo \\"Error: no test specified\\" && exit 1"},"keywords":["canvas","poster","sprite"],"author":"小小咖","email":"466102061@qq.com","license":"MIT","devDependencies":{"@babel/core":"^7.12.10","@babel/preset-env":"^7.12.11","babel-loader":"^8.2.2","chalk":"^4.1.0","dayjs":"^1.10.4","image-tools":"^1.3.0","ora":"^5.3.0","rimraf":"^3.0.2","webpack":"^5.17.0","webpack-cli":"^4.4.0"}}')}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(319)})()}));