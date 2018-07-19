/**
 * 按照index将数组拆分为两个
 * @param {*} arr 需要拆分的数组
 * @param {*} index 从哪里拆分
 * return {left, right} 返回值 index左侧和右侧的数组
 */
const splitArr = (arr, index) => {
  if (Array.isArray(arr) && index !== 'NaN') {
    let left = arr.slice()
    let right = arr.slice()
    return {
      left: left.splice(0, index),
      right: right.splice(index, arr.length)
    }
  }
}

export {
  splitArr
}
