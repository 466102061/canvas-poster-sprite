/*! For license information please see swan-canvas-poster-sprite.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CanvasPosterSprite=t():e.CanvasPosterSprite=t()}(self,(function(){return(()=>{"use strict";var e={749:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r,o={width:640,height:640,bgColor:"#fff",fileType:"jpeg",quality:1,version:n(306).version,pics:[],texts:[],paths:{},callback:function(e,t){}},a={self:"",canvasId:""},i=(r={},["String","Object","Number","Array","Undefined","Function","Null"].forEach((function(e){r["is"+e]=function(t){return Object.prototype.toString.call(t)=="[object "+e+"]"}})),r);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const c=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,n;return t=e,(n=[{key:"triangle",value:function(e,t){t.points&&0!=t.points.length?t.points.length=3:t.points=[{x:0,y:0},{x:8,y:8},{x:16,y:0}],this.polygon(e,t)}},{key:"circle",value:function(e,t){this.rect(e,{x:t.x,y:t.y,r:t.r,w:2*t.r,h:2*t.r,type:t.type,color:t.color,angle:t.angle,callback:t.callback})}},{key:"rect",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.x||0,o=t.y||0,a=t.w||0,i=t.h||0,l=t.r||0,c=t.callback||function(e){},s=t.type||"stroke",u=t.angle||null;n.setFillStyle&&n.setFillStyle(e,t.color||"white"),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white");var f=/^\d+\.\d+$/;f.test(r)||(r+=.5),f.test(o)||(o+=.5),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),u&&(e.translate(r+.5*a,o+.5*i),e.rotate(u*Math.PI/180),r=-.5*a,o=-.5*i),e.beginPath(),l>0?(e.moveTo(r+l,o),e.lineTo(r+a-l,o),e.arcTo(r+a,o,r+a,o+l,l),e.lineTo(r+a,o+i-l),e.arcTo(r+a,o+i,r+a-l,o+i,l),e.lineTo(r+l,o+i),e.arcTo(r,o+i,r,o+i-l,l),e.lineTo(r,o+i-l),e.arcTo(r,o,r+l,o,l)):(e.moveTo(r,o),e.lineTo(r+a,o),e.lineTo(r+a,o+i),e.lineTo(r,o+i),e.lineTo(r,o)),e.clip(),e.closePath(),"stroke"==s?e.stroke():e.fill(),e.save(),c({x:r,y:o,w:a,h:i}),e.restore(),e.restore()}},{key:"line",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.x1||0,o=t.y1||0,a=t.x2||0,i=t.y2||0,l=/^\d+\.\d+$/;l.test(r)||(r+=.5),l.test(o)||(o+=.5),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white"),e.beginPath(),e.moveTo(r,o),e.lineTo(a,i),e.closePath(),e.stroke(),e.restore()}},{key:"polygon",value:function(e,t){var n=this.canvasApi||{};e.save();var r=t.type||"stroke",o=t.points||[];0!=o.length&&(e.beginPath(),o.forEach((function(t,n){0==n&&e.moveTo(t.x,t.y),e.lineTo(t.x,t.y)})),e.closePath(),n.setLineWidth&&n.setLineWidth(e,t.lineWidth||1),n.setFillStyle&&n.setFillStyle(e,t.color||"white"),n.setStrokeStyle&&n.setStrokeStyle(e,t.color||"white"),"stroke"==r?e.stroke():e.fill(),e.restore())}}])&&l(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvasApi=t||{},this}var t,n;return t=e,(n=[{key:"textAlign",value:function(e,t){var n=this.canvasApi||{};e.save(),n.setFontSize&&n.setFontSize(e,t.font||14),n.setFillStyle&&n.setFillStyle(e,t.color||"black"),n.setTextBaseline&&n.setTextBaseline(e,t.baseline||"middle");var r=t.x||0,o=t.y||0,a=t.w||0,i=r,l=t.lineHeight||20,c=t.angle||null,s=t.align||"left",u=t.text?t.text:t||"",f=this.measureText(e,t.font,u);a>0&&"center"==s?i=r+.5*(a-f):a>0&&"right"==s&&(i=r+(a-f)),c?(e.translate(i+.5*f,o+.5*l),e.rotate(c*Math.PI/180),e.fillText(u,-.5*f,-.5*l)):e.fillText(u,i,o),e.restore()}},{key:"wordwrap",value:function(e,t){var n=this.canvasApi||{};e.save(),n.setFontSize&&n.setFontSize(e,t.font||14),n.setFillStyle&&n.setFillStyle(e,t.color||"black"),n.setTextBaseline&&n.setTextBaseline(e,t.baseline||"middle");for(var r=t.x||0,o=t.y||0,a=t.w||0,i=t.lineHeight||24,l=t.text.split("")||"",c=t.clamp||-1,s="",u=[],f=0;f<l.length;f++)this.measureText(e,t.font,s)<a&&this.measureText(e,t.font,s+l[f])<=a?s+=l[f]:(u.push(s),s=l[f]);u.push(s);var p=u.length;if(c>0&&c<p)for(var y=0;y<c;y++){var h=u[y];y==c-1&&(h=h.substring(0,h.length-1)+"..."),e.fillText(h,r,o+(y+1)*i)}else for(var v=0;v<p;v++)e.fillText(u[v],r,o+(v+1)*i);e.restore()}},{key:"measureText",value:function(e,t,n){var r=e.measureText(n).width;if(r>0)return r;var o=parseInt(t);return o=o>0?o:14,n.length*parseInt(o)}}])&&s(t.prototype,n),e}();var f={TASK:{CODE:1001,MSG:"异步并行任务失败，获取图片资源失败！"},DRAW:{CODE:1002,MSG:"canvas海报绘制失败!"},SAVE:{CODE:1003,MSG:"海报保存为临时文件失败!"},GETIMG:{CODE:1004,MSG:"图片资源下载到本地失败!"},TOBASE64:{CODE:1005,MSG:"本地图片转换base64失败!"}},p={line:"line",rect:"rect",circle:"circle",triangle:"triangle",polygon:"polygon"};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const d=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i.isObject(t))return this.options=t||{},this.drawPath={},this.drawText={},this.canvasApi={},this.thenCallbacks=[],this;console.error("参数错误，参数必须是对象！")}var t,n;return t=e,(n=[{key:"then",value:function(e){return this.thenCallbacks.push(e),this}},{key:"drawImg",value:function(e,t){var n=this.drawPath||{};t.r||t.angle?n.rect&&n.rect(e,{x:t.x,y:t.y,w:t.w,h:t.h,r:t.r,angle:t.angle,callback:function(n){e.drawImage(t.img,n.x,n.y,n.w,n.h)}}):e.drawImage(t.img,t.x,t.y,t.w,t.h)}},{key:"canvas",value:function(){var e=this.options,t=this.drawImg.bind(this),n=this.drawPath||{},r=this.drawText||{},o=this.canvasApi||{},a=this.thenCallbacks||[];e.preload=[];var l={};if(i.isArray(e.pics))for(var c=function(t){var n=Math.random().toString(16).substr(2),r=e.pics[t];l[n]=function(t){o.getImageInfos&&o.getImageInfos({opts:e,ERROR_TYPE:f,src:r.src,callback:function(n,o){if(n)e.callback(n,null);else{var a=r.preload||!1,i={img:o.path,x:r.x,y:r.y,w:r.w,h:r.h,r:r.r,preload:a,angle:r.angle};a&&e.preload.push(i),t(null,i)}}})}},s=0;s<e.pics.length;s++)c(s);!function(e,t){var n={},r={};if(0!=Object.getOwnPropertyNames(e).length){for(var o in e)n[o]=null,r[o]={complate:!1};var a=function(e,o,a){o?t(o,null):(r[e].complate=!0,n[e]=a,function(){var e=!0;for(var t in r)if(!r[t].complate){e=!1;break}return e}()&&t(null,n))};for(var o in e)(0,e[o])(a.bind(null,o))}else t(null,null)}(l,(function(l,c){if(l)e.callback({code:f.TASK.CODE,msg:f.TASK.MSG,err:JSON.stringify(l),src:""},null);else if(o.createCanvasContext){var s=o.createCanvasContext(e),u=s.ctx,y=s.canvas;if(u.rect(0,0,e.width,e.height),o.setFillStyle&&o.setFillStyle(u,e.bgColor||"#fff"),u.fill(),e.preload.length>0)for(var v in e.preload)t&&t(u,e.preload[v]);if(Object.getOwnPropertyNames(e.paths).length>0)for(var b in e.paths){var d=e.paths[b];for(var g in d){var m=d[g],w=p[b];n[w]&&n[w](u,m)}}if(c)for(var x in c){var O=c[x];O.preload||t&&t(u,O)}if(i.isArray(e.texts))for(var S in e.texts){var T=e.texts[S];T.multiple&&T.w?r.wordwrap&&r.wordwrap(u,T):r.textAlign&&r.textAlign(u,T)}o.canvasToTempFilePath&&o.canvasToTempFilePath({ctx:u,opts:e,canvas:y,ERROR_TYPE:f,callback:function(t,n){e.callback(t,h(h({},n),{},{canvas:y})),a.forEach((function(e){i.isFunction(e)&&e(t,h(h({},n),{},{canvas:y}))}))}})}}))}}])&&b(t.prototype,n),e}();var g={__getImageInfo__:function(){},__createCanvasContext__:function(){},__canvasToTempFilePath__:function(){}},m=g,w=!1,x={createCanvasContext:function(e){if(m.__createCanvasContext__){var t=e.self||{};return{ctx:m.__createCanvasContext__(e.canvasId,e.self),canvas:t}}},canvasToTempFilePath:function(e){var t=e.ctx,n=e.opts,r=e.ERROR_TYPE,o=e.callback;if(m.__canvasToTempFilePath__)try{t.draw(!0,(function(){m.__canvasToTempFilePath__({fileType:n.fileType||"jpg",quality:n.quality||1,canvasId:n.canvasId,success:function(e){o(null,e)},fail:function(e){o({desc:"海报保存失败.",err:JSON.stringify(e),code:r.SAVE.CODE,msg:r.SAVE.MSG,src:""},null)}},n.self)}))}catch(e){o({desc:"canva海报绘制失败.",err:JSON.stringify(e),code:r.DRAW.CODE,msg:r.DRAW.MSG,src:""},null)}},getImageInfos:function(e){var t=e.src,n=e.ERROR_TYPE,r=e.callback;m.__getImageInfo__&&m.__getImageInfo__({src:t,fail:function(e){r({desc:"图片下载失败.",err:JSON.stringify(e),code:n.GETIMG.CODE,msg:n.GETIMG.MSG,src:t},null)},success:function(e){r(null,e)}})}},O={},S=!1,T=!0;function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}O.setLineWidth=function(e,t){T?e.setLineWidth(t):e.lineWidth=t},O.setFillStyle=function(e,t){T?e.setFillStyle(t):e.fillStyle=t},O.setStrokeStyle=function(e,t){T?e.setStrokeStyle(t):e.strokeStyle=t},O.setFontSize=function(e,t){T?e.setFontSize(t):e.font=t},O.setTextBaseline=function(e,t){T?e.setTextBaseline(t):e.textBaseline=t};var F,D="swan-Miniprogram";S?console.error("You have already set __setByMethod__ and cannot change it."):(T=!0,S=!0),F={__getImageInfo__:swan.getImageInfo,__createCanvasContext__:swan.createCanvasContext,__canvasToTempFilePath__:swan.canvasToTempFilePath},w?console.error("You have already set ctx target and cannot change it."):(m=F||g,w=!0);const R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=A(t);if(n){var o=A(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return C(this,e)});function l(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),!i.isObject(e))return console.error("参数错误，参数必须是对象！"),C(t);var n=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=[].concat(n);return 0==o.length||o.forEach((function(t,n){for(var r in t)e[r]=t[r]})),e}({},o,a,e);return(t=r.call(this,n)).options=n,t.__platform__=D,t.drawPath=new c(O),t.drawText=new u(O),t.canvasApi=P(P({},O),x),t.canvas(),C(t,I(t))}return l}(d)},306:e=>{e.exports=JSON.parse('{"name":"canvas-poster-sprite","version":"1.0.0","description":"A poster plugin that can draw texts, paths and pictures to canvas, and export picture data.","main":"dis/web-canvas-poster-sprite.js","directories":{"example":"examples"},"scripts":{"my-build":"node build/my-build.js","qq-build":"node build/qq-build.js","swan-build":"node build/swan-build.js","tt-build":"node build/tt-build.js","uni-build":"node build/uni-build.js","web-build":"node build/web-build.js","wx-build":"node build/wx-build.js","pack":"webpack --config webpack.config.js","build":"node --max_semi_space_size=64 build/build.js","test":"echo \\"Error: no test specified\\" && exit 1"},"keywords":["canvas","poster","sprite"],"author":"小小咖","email":"466102061@qq.com","license":"MIT","devDependencies":{"@babel/core":"^7.12.10","@babel/preset-env":"^7.12.11","babel-loader":"^8.2.2","chalk":"^4.1.0","dayjs":"^1.10.4","image-tools":"^1.3.0","ora":"^5.3.0","rimraf":"^3.0.2","webpack":"^5.17.0","webpack-cli":"^4.4.0"}}')}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(749)})()}));