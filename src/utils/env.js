import { PLATFORM } from '../config/config.js'
import { objectProtoType } from './type.js'

//是否是web环境
function isWebEnv(platform){
	return platform === PLATFORM.WEB;
}

/**
** @desc 文本属性font字段格式化：小程序官方类型：Number web端：String
** @param {Object} ctx
** @param {*} font
** @return {Number | String}
**/
function fontFormat(ctx, font){
	let fontMpDefault = 14;
	let fontH5Default = '14px Arial';
	let numReg = /(\d+\.?\d*)/g; //字符串中，取出数字
	let numAndPxStrReg = new RegExp(`${numReg.source}px`, 'g');//含有'数字'和'px'的字符串
	// let strReg = /[a-zA-Z]+/g; //字符串(不是由存数字组成的字符串)
	// let strReg = /[a-zA-Z]+|[\u4e00-\u9fa5]+/g; //字符串 | 中文(不是由存数字组成的字符串)
	let isMpEnv = !isWebEnv(ctx.__platform__);
	let isNumber = objectProtoType.isNumber(font);
	let isString = objectProtoType.isString(font);
	let isInvalid = !isNumber && !isString;

	//未定义 || 无效的，返回默认类型
	if(!font || isInvalid){
		return isMpEnv ? fontMpDefault : fontH5Default;
	}

	//小程序 && 数字，直接返回
	if(isMpEnv && isNumber) return font;

	//小程序 && 字符串
	if(isMpEnv && isString){
		let nums = font.match(numReg);
		return nums ? (nums[0] ? Number(nums[0]) : fontMpDefault) : fontMpDefault;
	}

	//h5 && 数字
	if(!isMpEnv && isNumber){
		return `${font}px Arial`;
	}

	//h5 && 字符串
	if(!isMpEnv && isString){
	    //含有'数字'和'px'的字符串
		if(font.match(numAndPxStrReg)) return font;
		let nums = font.match(numReg);
		return nums ? (nums[0] ? `${nums[0]}px Arial` : fontH5Default) : fontH5Default;
	}
}

export {
	isWebEnv,
	fontFormat
}	
