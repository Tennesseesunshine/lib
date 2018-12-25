/**
 * pages页面快速生成脚本
 * 创建脚本文件夹script于根目录下和src平齐或者app平齐
 * 用法：npm run tep `文件名`
 */

const fs = require("fs");

const dirName = process.argv[2];
// 首字母大写拼接
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
  console.log("文件夹名称不能为空！");
  console.log("示例：npm run tep test");
  process.exit(0);
}

//页面模板
const indexTep = `
export default ${capPirName}
`;

// scss文件模版
const scssTep = `
@import '../../styles/index.scss';

.${dirName} {
    width: $all;
    height: $all;
}
`;

// store文件
const store = `
import { observable } from "mobx";
import handleData from "../api/${dirName}/${dirName}";
import Taro from "@tarojs/taro";

let ${dirName}Store = observable({});

${dirName}Store.${dirName} = function(data) {
};

export default ${dirName}Store;
`;

// 接口请求模板
const serviceTep = `
import handleData from "../../utils/request";

export default {
};
`;

// 用taro目录来举例
fs.mkdirSync(`./src/pages/${dirName}`); // 先创建pages中dirName对应的文件夹
console.log("页面pages文件夹创建成功");
fs.mkdirSync(`./src/api/${dirName}`); // 创建对应的接口文件夹
console.log("api接口文件夹创建成功");
process.chdir(`./src/pages/${dirName}`); // cd pages中dirName对应的文件夹

fs.writeFileSync(`${dirName}.tsx`, indexTep); //创建tsx文件
fs.writeFileSync(`${dirName}.scss`, scssTep); // scss
console.log("tsx, scss 文件创建成功");
process.chdir(`../../../`); // cd 根目录

process.chdir(`./src/store`); // cd store对应的文件夹
fs.writeFileSync(`${dirName}.ts`, store); // 创建store文件
console.log("store文件创建成功");
process.chdir(`../../`); // cd 根目录
process.chdir(`./src/api/${dirName}`); // cd api对应的文件夹
fs.writeFileSync(`${dirName}.ts`, serviceTep); // service
console.log("api接口文件创建成功");
process.exit(0);
