/**
 * 时间格式化
 * @returns {number}
 * @method TimeFormat
 * @example
 * this.timeFormat("yyyy MM-dd hh:mm", new Date(gameRecord.createTime));
 * this.timeFormat("yyyy MM-dd hh:mm"); 当前时间
 */
function timeFormat(format, d) {
  if (d == null) {
	d = new Date();
  }
  let date = {
	"M+": d.getMonth() + 1,
	"d+": d.getDate(),
	"h+": d.getHours(),
	"m+": d.getMinutes(),
	"s+": d.getSeconds(),
	"q+": Math.floor((d.getMonth() + 3) / 3),
	"S+": d.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
	format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in date) {
	if (new RegExp("(" + k + ")").test(format)) {
	  format = format.replace(RegExp.$1, RegExp.$1.length == 1
		? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
	}
  }
  return format;
}

module.exports = timeFormat;