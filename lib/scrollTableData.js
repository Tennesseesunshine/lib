let result = []
let show = []
for (var i = 0, len = this.data.length; i < len; i += 5) {
    result.push(this.data.slice(i, i + 5))
}
console.log('result', result)
let n = 0
setInterval(() => {
    show = result[n]
    n++
    if (n === result.length) {
        n = 0
    }
    console.log('show', show)
    this.data = show
}, 3000) 
