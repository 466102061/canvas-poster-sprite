/**
 * @desc 合成海报组件
 * @param  {Object|Required} this.props.param
 * @event props.onFail     失败回调
 * @event this.props.onSuccess  成功回调
 */
import CanvasPosterSprite from '../../../dist/my-canvas-poster-sprite.js'
Component({
  mixins: [],
  props: {
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
  didMount() {
      // console.log('ready:', this.props.param);
      let self = this;
      let id = Math.random().toString(16).substr(2);
      let canvasId = 'myCanvasId_'+id;
      let param = self.props.param;
      // let bg = param && param.pics && param.pics[0].src;
      // if (!bg) return;//没有背景图片
      self.setData({
        canvasId : canvasId,
        width : param.width,
        height : param.height,
        isReady : true
      });
      
      //生成海报
      new CanvasPosterSprite({
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
            self.props.onFail && self.props.onFail(ev);
            return;
          }
          console.log("合成结果:", res);
          let ev = {
            tips : '海报合成成功!',
            res : res
          }
          self.props.onSuccess && self.props.onSuccess(ev);
      });
      //end 合成
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
