// 将对象元素转换成字符串以作比较
const obj2key = (obj, keys) => {
  let n = keys.length
  let key = []
  while (n--) {
    key.push(obj[keys[n]])
  }
  return key.join('|')
}
// 数组去重操作  含对象结构
const uniqeByKeys = (array, keys) => {
  let arr = []
  let hash = {}
  for (let i = 0, j = array.length; i < j; i++) {
    let k = obj2key(array[i], keys)
    if (!(k in hash)) {
      hash[k] = true
      arr.push(array[i])
    }
  }
  return arr
}

用法
arr为需要的去重的数组
key为按照对象下的这个key去去重
uniqeByKeys(arr, key)
