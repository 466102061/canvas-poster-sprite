
/**
* 简单并发操作
* @param {object} tasks 并发任务配置
* @param {function} tasks[key] = function(){} 每一个并发任务
* @param {function} cb 任务结果回调
*/
export function parallelTasks(tasks, cb){
	var totalTaskResults = {};
	var totalTaskDatas = {};
	
	//判断tasks是否有任务
	var taskNames = Object.getOwnPropertyNames(tasks);
	if(taskNames.length == 0){//没有任务
		cb(null,null);
		return;
	}
	
	//初始化数据
	for(var taskName in tasks){
	  totalTaskResults[taskName] = null;
	  totalTaskDatas[taskName] = {complate:false};
	}
	
	
	//检查是否都完成了
	var _allTaskComplete = function(){
	  var allComplete = true;
	  for(var taskName in totalTaskDatas){
		if(!totalTaskDatas[taskName].complate){
		  allComplete = false;
		  break;
		}
	  }
	  return allComplete;
	}
	// var self = this;
	var taskCallback = function(taskName, err, res){
	  if(err){
		cb(err, null);
		return;
	  }
	  // console.log("taskName:", taskName);
	  totalTaskDatas[taskName].complate = true;
	  totalTaskResults[taskName] = res;
	  if(_allTaskComplete()){
		cb(null, totalTaskResults);
	  }
	}
	
	var  taskFunc = null;
	for(var taskName in tasks){
	  taskFunc = tasks[taskName];
	  // console.log(" taskName:", taskName);
	  taskFunc(taskCallback.bind(null, taskName));
	}
}
