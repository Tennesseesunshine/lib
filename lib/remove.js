/**
 * 原型扩展
 */
//
/**
 * 数组remove方法（index） 返回一个新数组
 * 使用: const data = arr.remove(1)
 */
Array.prototype.remove = function(dx) {
  let arr = this.slice()
  if (isNaN(dx) || dx > arr.length) {
    return false;
  }
  for (var i = 0, n = 0; i < arr.length; i++) {
    if (arr[i] != arr[dx]) {
      arr[n++] = arr[i]
    }
  }
  arr.length -= 1
  return arr
}
