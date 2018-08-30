import Vue from 'vue'

const drag = Vue.directive('drag', {
  inserted: function (el) {
    el.onmousedown = function (ev) {
      var disX = ev.clientX - el.offsetLeft
      var disY = ev.clientY - el.offsetTop
      document.onmousemove = function (ev) {
        var l = ev.clientX - disX
        var t = ev.clientY - disY
        // if (l < 0) { // 限制边界
        //   l = 0
        // } else if (l > el1.offsetWidth - el.offsetWidth) {
        //   l = el1.offsetWidth - el.offsetWidth
        // }
        // if (t < 0) {
        //   t = 0
        // } else if (t > el1.offsetHeight - el.offsetHeight) {
        //   t = el1.offsetHeight - el.offsetHeight
        // }
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
      }
      return false // 必须要有 防止拖动产生异常 拖动结束退出函数
    }
  }
})
export default { drag, focus }

main.js
import directive from './directives/directive'
