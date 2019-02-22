// 数组扁平化处理（嵌套一层）
Array.prototype.flattened = function() {
    let arr = this.slice()
    return arr.reduce((p, n) => {
      return [...p, ...n]
    })
}

// 无限层数数组扁平化
// flat默认是扁平一层，可以传入指定参数去扁平化几层，'Infinity'是关键字。
Array.prototype.flattened = function() {
    let arr = this.slice()
    return arr.flat(Infinity)
}

// 无限扁平去重排序
Array.prototype.fn = function() {
    let arr = this.slice()
    return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b)
}
