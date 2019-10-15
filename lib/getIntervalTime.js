// 获取间隔几个月的时间戳
function getTime (disMounth) {
	var d = new Date()
  // 获取当天0点时间
	var t = new Date(d.toLocaleDateString())
	var start = new Date(d.toLocaleDateString())
  // 获取当天零点时间之后将月份推至间隔几月之前
	var startTime = new Date(t.setMonth(t.getMonth() - disMounth)).getTime()
	var time = {
    startTime,
    endTime: start.getTime() + 24 * 60 * 60 * 1000 - 1
	}
	return time
}
