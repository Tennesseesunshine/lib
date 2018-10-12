let Event = {
  clietList: {}, // 发布者的缓存列表（应聘者列表）
  on (key, fn) { // 增加订阅者函数
    if (!this.clietList[key]) {
      this.clietList[key] = [];
     }
    this.clietList[key].push(fn);
  },
  emit () { // 发布消息函数
    let key = Array.prototype.shift.call(arguments)
    let fns = this.clietList[key];
      for (var i = 0; i < fns.length; i++) {
        var fn = fns[i];
        fn.apply(this, arguments);
      }
    },
  remove (key, fn) {
    var fns = this.clietList[key];
    if (!fns) {
      return false;
    }
    if (!fn) { //如果没有传入fn回调函数，直接取消key对应消息的所有订阅
      this.clietList[key] = [];
    } else {
      for (var i = 0; i < fns.length; i++) { //遍历回调函数列表
        var _fn = fns[i];
        if (_fn === fn) {
          fns.splice(i, 1); //删除订阅者的回调函数
        }
      }
    }
  }
}
Event.on('web', (time) => {
	console.log('前端啦' + time)
})
Event.emit('web', '17/03/01')
Event.on('php', (time) => {
    console.log('php端啦' + time)
})
Event.emit('php', '18/10/12')
