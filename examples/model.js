//基本参数
var rmb = "¥";
var posWidth = 800;//海报宽度
var qrSize = 200;//二维码大小
var proSize = 220;//产品大小
var proData = {
	qrcodeUrl : './img/qrcode-zm.png',
	iconUrl : './img/icon.jpeg',
	storeName : '联系方式：466102061@qq.com',
	list : [
		{
			title : '侠侣独家！开业送福利! ￥128【牛基地】汕头牛肉火锅好评回归！嫩肉+肥牛+吊龙+牛肉丸汁...半价狂涮超过瘾，厦门四店同庆，仅此一次！',
			price : 666,
			sell_price :  210,
			cover : './img/pic-3.jpeg',
		},
		{
			title : '3.3折，爆款来袭！￥139吃老北京正宗涮羊肉3-4人餐！“锡盟郭勒大草原”直供，牛羊中的“劳斯莱斯”！乾隆慈禧都痴迷的宫廷火锅，人均只要30+，一秒穿越宫廷，国庆就去盘TA！',
			price : 199,
			sell_price :  99,
			cover : './img/pic-4.jpeg',
		},
		{
			title : '5.5元疯抢 | 时光相册全国通用，最多32页可放80张B5照片，汇集节后美景美照，精美模板自由排版，线上定制快速成书，全国配送',
			price : 233,
			sell_price :  9.9,
			cover : './img/pic-5.jpeg',
		},
		{
			title : '【妈妈找美味No.31】新春大促！¥79抢两只「味正」蒸鸡！百年老字号，福建名小吃！甄选新鲜三黄鸡，开袋即蒸轻松做，老人小孩都爱吃（文中有实拍视频）',
			price : 455,
			sell_price :  230,
			cover : './img/pic-2.jpeg',
		},
		{
			title : '【拉丁舞春季课包10节 | 预售仅需188元！低至18.8元/节】厦门市体育舞蹈培训学校，29年口碑老牌，3岁+均可报名，速来体验拉丁舞魅力，舞台King/Queen就是你家娃！',
			price : 889,
			sell_price :  199,
			cover : './img/pic-1.jpeg',
		},
	]
}


/**
* @desc 模板：热卖爆款推荐
* @param {Object} param 
* @param {String} param.qrcodeUrl  二维码
* @param {String} param.iconUrl  用户logo
* @param {String} param.storeName 店铺名称
* @param {Array} param.list 产品列表
* @param {Function} callback
*/
function getHotTempParam(param, callback) {
	var texts = [];//文本
	var pics = [];//图片
	var paths = {};//路径
	var rect = [];//矩形
	var line = [];//线条

	//资源素材
	var qrcodeUrl = param.qrcodeUrl;
    var logoUrl = param.iconUrl;
	var storeName = param.storeName;
	var title = param.title;
	var list = param.list;

	var topBg = "./img/hot_top.jpg";//头部图片
	var topHeight = 500;//头部图片高度

	pics.push({src : topBg, x : 0, y : 0, preload : true});

	//新建canvas元素-测量文字宽度
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");

	var itemHeight = 292;//一个产品的高度
	for(var i = 0; i < list.length; i++){
		var top = itemHeight*i + topHeight-70;
		var textLeft = 354; //文本左位置
		var textWidth = 360;//文本宽度
		//产品描述
		var text = {
			x : textLeft,
			y : top+25,
			w : textWidth,
			clamp : 3,
			multiple : true,
			lineHeight : 44,
			color : '#000000',
			font : '34px 冬青黑体简体中文',
			text : list[i].document_content || list[i].title
		}
		//价格
		var cTop = top + 240;
		//历史-价格
		var hText = rmb + list[i].price;
		var hWidth = ctx.measureText(hText).width;
		var hLeft =  textLeft + 3*hWidth - 5;
		var hPrice = {
			x : textLeft,
			y : cTop,
			font : '30px Arial',
			color : '#BBBBBB',
			text : hText
		}
		//历史价格删除线
		var lineTo = {
			x1 : textLeft-3,
			y1 : cTop-3,
			x2 : hLeft,
			y2 : cTop + 3,
			lineWidth : 3,
			color : "#BBBBBB"
		}
		//当前-价格
		var cText = list[i].sell_price;
		var cWidth = ctx.measureText(cText).width;
		var cPrice = {
			x : textLeft,
			y : cTop-3,
			w : textWidth-20,
			align : "right",
			font : 'bold 40px Arial',
			color : '#FF2654',
			text : cText
		}
		//价格
		var cRmb = {
			x : textLeft,
			y : cTop,
			w : textWidth-4*cWidth-30,
			align : "right",
			font : 'bold 30px Arial',
			color : '#FF2654',
			text : rmb
		}
		//产品
		var imgLeft = 93;//产品左坐标
		var imgTop = top+35;
		var img = {
			x : imgLeft,
			y : imgTop,
			w : proSize,
			h : proSize,
			src : list[i].cover
		}
		texts.push(text);
		texts.push(hPrice);
		texts.push(cRmb);
		texts.push(cPrice);
		pics.push(img);
		line.push(lineTo);

		//产品背景矩形
		rect.push({
			x : imgLeft-5,
			y : imgTop-5,
			w : proSize+10,
			h : proSize+10,
			color : "#eeeeee",
			type : "fill"
		});
		//添加分割线
		line.push({
			x1 : 86,
			y1 : top+itemHeight,
			x2 : posWidth - 86,
			y2 : top+itemHeight,
			lineWidth : 1,
			dash : [10,5],
			color : "#E8E8E8"
		});
		//最后一个计算白色背景色块
		if(i == list.length-1){
			var padLeft = 46.5;
			var rectWidth = posWidth - 2*padLeft-0.5;
			rect.unshift({
				x : padLeft,
				y : topHeight-2,
				w : rectWidth,
				h : itemHeight*list.length+42,
				color : "#fff",
				type : "fill"
			});
		}
	}

	//路径
	paths.rect = rect;
	paths.line = line;

	//底部背景
	var bTop = list.length * itemHeight + topHeight-40;

	//画布宽高
	var width = posWidth;//800-画布宽度
	var bottomHeight = 230;//底部图片高度
	var height =  bTop + bottomHeight;//画布高度

	//底部图片
	var bPic = {
		x : 0,
		y : bTop,
		src : "./img/hot_bottom.jpg"
	}
	//qrcode
	var qrTop = bTop;
	var qrLeft = 550;
	var qrcode = {
		x : qrLeft,
		y : qrTop,
		w : 0.8*qrSize,
		h : 0.8*qrSize,
		src : qrcodeUrl
	}
	var logo = {
		x : qrLeft+60,
		y : qrTop + 60,
		src : logoUrl,
		w : 40,
		h : 40
	}
	pics.push(bPic);
	//是否有二维码
	if(qrcodeUrl){
		pics.push(qrcode);
	}
	//是否有微信头像
	if(logoUrl){
		pics.push(logo);
	}
	var store = {
		x : 96,
		y : bTop + 136,
		text : storeName,
		font : '24px 冬青黑体简体中文',
		color : '#666666',
	}
	texts.push(store);
	//返回数据
	var res = {
        width : width,
        height : height,
        bgColor : "#ffd388",
        pics:pics,
        paths : paths,
        texts : texts,
	}
	callback && callback(res);
	// console.log(res);
	return res;
}

function getCanvasParam(){
	return getHotTempParam(proData);
}