<template>
<!--画布-->
<canvas 
	v-if="isReady" 
	class='myCanvas' 
	:canvas-id='canvasId' 
	:style="'width:'+width+'px;height:'+height+'px;'">
</canvas> 
<!--画布-->
</template>

<script>
import CanvasPosterSprite from '../../../dist/uni-canvas-poster-sprite.js'
export default {
	name : 'xlcanvas',	
	props : {
		//合成海报参数为参数param
		param : {
		  type : Object,
		  default : function(){
			  return {
				width : 900,//画布宽度
				height : 1280,//画布高度
				pics : [],//图片资源
				paths : {},//路径
				texts : [],//文本
				fileType : "jpg",//保存文件类型
				quality : 1,//保存文件质量
			  }
		  }
		}
	},
    data() {
    	return {
			isReady : false,
			canvasId : 'myCanvasId',
			width : 900,//海报宽度
			height : 1280,//海报高度
    	}
    },
	components:{
	},
    watch: {
	},
    methods: {
		//fix: Property or method "toJSON" is not defined
		//https://ask.dcloud.net.cn/question/73642
		toJSON(){},
    },
    mounted() { 
      let self = this;
      let id = Math.random().toString(16).substr(2);
      let canvasId = 'myCanvasId_'+id;
      let param = self.param;
      // let bg = param && param.pics && param.pics[0].src;
      // if (!bg) return;//没有背景图片
	  self.canvasId = canvasId;
	  self.width = param.width;
	  self.height = param.height;
	  self.isReady = true;
	  
	  let pixelRatio = 3;//设备分辨率
	  let isAndroid = false;
	  if(isAndroid){
		  //android设备，分辨率减低一半，以换取合成速率
		  //测试结果：分辨率：3     合成时间：15s多
		  //        分辨率：1.5   合成时间：4.5s多
		  //        分辨率：1     合成时间：2.5s多
		  pixelRatio *= 0.5;
	  }
	  setTimeout(()=>{
		  //生成海报
		  new CanvasPosterSprite({
			// appPlus : true, // app端，是否先把图片转换成base64，再画图，fix：【Android10 真机 uni.canvasToTempFilePath报错】https://ask.dcloud.net.cn/question/103303
			pixelRatio : pixelRatio,
			canvasId: canvasId,//画布宽度id
			width: param.width,//画布宽度
			height: param.height,//画布高度
			pics: param.pics || [],//图片资源
			texts: param.texts || [],//文本
			paths : param.paths || {},//路径
			self: self,//当前组件实例
			bgColor: param.bgColor || "white",
			fileType: param.fileType || "jpg",
			quality : param.quality || 1
		  }).then((err, res)=>{
			  if (err) {
				console.log("合成海报出错了：", err);
				let ev = {
				  tips: '合成海报出错了!',
				  err : err
				}
				self.$emit('fail', ev);
				return;
			  }
			  // console.log("合成结果:", res);
			  let ev = {
				tips : '海报合成成功!',
				res : res
			  }
			  self.$emit('success', ev);
		  });
		  //end 合成
	  },250);
    }	
}
</script>

<style scoped>
.myCanvas{
 position: fixed;
  left: 100%;
  top: 100%;
  z-index: -3;
  transform: translateX(200%);
  -webkit-transform: translateX(200%);
}
</style>