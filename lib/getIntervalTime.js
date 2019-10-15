// 获取间隔几个月的时间戳
function getTime (disMounth) {
  let d = new Date()
  // 获取当天0点时间
  let t = new Date(d.toLocaleDateString())
  let start = new Date(d.toLocaleDateString())
  // 获取当天零点时间之后将月份推至间隔几月之前
  let startTime = new Date(t.setMonth(t.getMonth() - disMounth)).getTime()
  let time = {
    startTime,
    endTime: start.getTime() + 24 * 60 * 60 * 1000 - 1
  }
  return time
}
