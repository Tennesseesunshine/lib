/**
 * 排序比较函数  =====>  实现数组对象的排序
 * @param {*} property 需要按照排序的字段
 */
const compare = (property) => (a, b) => a[property] - b[property]
// export default compare
module.exports = compare