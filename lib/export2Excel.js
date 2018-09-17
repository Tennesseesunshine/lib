/**
 * 格式化数据
 * @param {*} filterFields 过滤的字段
 * @param {*} jsonData 数组数据
 */
const formatJson = (filterFields, jsonData) => {
  return jsonData.map(v => filterFields.map(j => v[j]))
}
/**
 * 导出excel工具方法
 * @param {*} exportArray 需要导出的数组 Array
 * @param {*} tHeader 导出excel的表头 Array
 * @param {*} filterFields 过滤数组的字段 Array
 */
const export2Excel = ({ exportArray, tHeader, filterFields, fileName }) => {
  if (
    Array.isArray(exportArray) &&
    Array.isArray(tHeader) &&
    Array.isArray(filterFields)
  ) {
    require.ensure([], () => {
      const { exportJson2Excel } = require('./excel/Export2Excel')
      const data = formatJson(filterFields, exportArray)
      exportJson2Excel(tHeader, data, fileName)
    })
  } else {
    throw new Error('exportArray, tHeader, filterFields should be Array')
  }
}
export default export2Excel
