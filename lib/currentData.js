/**
 * 返回值yymmddhhmmss
 * 可以自己选择连接的符号.symbol1是yymmdd的连接符,symbol2是hhmmss的连接符,symbol3是yymmdd和hhmmss这两块的连接符
 */
const getNowFormatDate = (symbol1, symbol2, symbol3) => {
  var date = new Date();
  var seperator1 = symbol1.length == 0 || symbol1
    ? symbol1
    : '-';
  var seperator2 = symbol2.length == 0 || symbol2
    ? symbol2
    : ':';
  var seperator3 = symbol3.length == 0 || symbol3
    ? symbol3
    : ' ';

  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + seperator3 + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
  return currentdate;
}
// export default getNowFormatDate
module.exports = getNowFormatDate
