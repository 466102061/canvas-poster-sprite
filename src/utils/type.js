
//原型链判断
let objectProtoType = (function () {
	let type = {};
	// 是否为 字符串，对象，数字，数组，undefined，函数，null
	['String', 'Object', 'Number', 'Array', 'Undefined', 'Function', 'Null']
	.forEach((e) => {
	  type['is' + e] = function (obj) {
	    return Object.prototype.toString.call(obj) == '[object ' + e + ']';
	  }
	})
	return type;
})();

export {
	objectProtoType
}