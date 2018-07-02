//数组扁平化处理（嵌套一层）
Array.prototype.flattened = function() {
  	let arr = this.slice()
    return arr.reduce((p, n) => {
      return [...p, ...n]
    })
}
