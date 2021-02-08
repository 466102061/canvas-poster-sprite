//logs.js
/**
 * @desc 合成海报组件
 * @param  {Object|Required} param
 * @event bind:fail     失败回调
 * @event bind:success  成功回调
 */
 /**
  * 实例展示，无图片资源，
  * 官方bug：tt.getImageInfo报错：文件格式不正确，
  * 官方bug地址：http://forum.microapp.bytedance.com/mini-app/posts/5ff096287a2fc84731f771a0
  */
import CanvasPosterSprite from '../../../dist/tt-canvas-poster-sprite'
Component({
  properties : {
    //合成海报参数param
    param : {
      type : Object,
      value : {
        width : 900,//画布宽度
        height : 1280,//画布高度
        pics : [],//图片资源
        paths : {},//路径
        texts : [],//文本
        fileType : "jpg",//保存文件类型
        quality : 1,//保存文件质量
      }
    }
  },
  data: {
    isReady : false,
    canvasId : 'myCanvasId',
    width : 900,//海报宽度
    height : 1280,//海报高度
  },
  //组件方法
  methods: {},
  //组件生命周期
  ready(){
      // console.log('ready:', this.properties.param);
      let self = this;
      let id = Math.random().toString(16).substr(2);
      let canvasId = 'myCanvasId_'+id;
      let param = self.properties.param
      // let bg = param && param.pics && param.pics[0].src;
      // if (!bg) return;//没有背景图片
      self.setData({
        isReady: true,
        canvasId: canvasId,
        width : param.width,
        height : param.height
      });

      //生成海报
      new CanvasPosterSprite({
        bgColor: 'rgba(0,0,0,0.2)',
        canvasId: canvasId,//画布宽度id
        width: param.width,//画布宽度
        height: param.height,//画布高度
        pics: param.pics || [],//图片资源
        texts: param.texts || [],//文本
        paths : param.paths || {},//路径
        self: self,//当前组件实例
        fileType: param.fileType || "jpg",
        quality : param.quality || 1
      }).then((err, res)=>{
        if (err) {
          console.log("合成海报出错了：", err);
          let ev = {
            tips: '合成海报出错了!',
            err : err
          }
          self.triggerEvent('fail', ev);
          return;
        }
        console.log("合成结果:", res);
        let ev = {
          tips : '海报合成成功!',
          res : res
        }
        self.triggerEvent('success', ev);
      });
      //end 合成
  }
})

