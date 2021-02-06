/**
** @desc 合并参数
** @param {Object} target
** @param {Object} from
**/
function merge(target, ...reset){
	let from = [...reset];
	if(from.length == 0){
		return target;
	}
	from.forEach((item, index)=>{
		for(let key in item){
			target[key] = item[key];
		}
	});
	return target;
}

//简单hash值
function mathRandomHash(){
	return Math.random().toString(16).substr(2);
}

export {
	merge,
	mathRandomHash
}

