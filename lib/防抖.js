
  // 利用节流优化的防抖函数
  function throttle(fn, delay) {
    // 两个变量存储定时器和最后一次用时
    let timer = null
    let last = 0
    return function () {
      let content = this
      // 隐式转换为数字类型
      let now = +new Date()
      // 如果两次点击事件时间间隔小于设定的时间
      // 这里相当于节流
      if (now - last < delay) {
        // 清除掉定时器
        clearTimeout(timer)
        // 开一个新的定时器
        timer = setTimeout(() => {
          // 重新获取最后一次时间赋值
          last = now
          // 绑定传入函数的this 以及传入参数
          fn.apply(content, arguments)
        }, delay)
      } else {
        // 大于时间间隔之后要自己做点事情 不用延时 直接执行
        last = now
        // 绑定传入函数的this 以及传入参数
        fn.apply(content, arguments)
      }
    }
  }
  const throttleUse = throttle(() => {
    console.log('点我点我点我')
  }, 2000)
  document.getElementById('btn').addEventListener('click', throttleUse)
