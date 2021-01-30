import {
	setLineWidth,
	setFillStyle,
	setStrokeStyle,
	setFontSize,
	setTextBaseline
} from './fn-canvas-api.js'
import {
	getImageInfos,
	createCanvasContext,
	canvasToTempFilePath
} from './wx-canvas-api.js'

//draw(text|path)api映射表
let drawApiMap = {
    'setLineWidth' : setLineWidth,
    'setFillStyle' : setFillStyle,
    'setStrokeStyle' : setStrokeStyle,
    'setFontSize' : setFontSize,
    'setTextBaseline' : setTextBaseline
}

//画布canvas基础api
let canvasBaseApiMap = {
	'getImageInfos' : getImageInfos,
	'createCanvasContext' : createCanvasContext,
	'canvasToTempFilePath' : canvasToTempFilePath
}

export {
	drawApiMap,
	canvasBaseApiMap
}