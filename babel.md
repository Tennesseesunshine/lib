### `babel`编译。<br>
后台 `Node.js` 已经支持了 `ES6` 语法，但是目前的有些低版本浏览器并不支持。想要做到在前端兼容代码，就得用 `babel` 将 `ES6` 语法写的代码转为浏览器支持的 `ES5` 语法。<br>
#### 第一步：必须先配置文件 `.babelrc` ，将其存放在目录下。<br>
文件初始基本格式为：
```
  {
    "presets": []
  }
```
其中 `presets` 字段设定转码规则，以下是官方提供的转码规则，可以根据需求安装。<br>
##### ES2015转码规则:
`$ npm install --save-dev babel-preset-es2015`
##### react转码规则:
`$ npm install --save-dev babel-preset-react`
<br>
#### 第二步：进入命令行，首先 `npm init` 初始化一个文件，会生成一个 `package.json`文件，然后 `$ npm install --save-dev babel-preset-es2015 babel-preset-react` 安装 `ES2015` 和 `React`转码规则（此安装按需，需要哪个装哪个就行）。<br>
#### 接下来安装 `babel` : `$ npm install --save-dev babel-cli` ，成功之后，修改 `.babelrc` 文件为：
```
  {
    "presets": ["es2015"]
  }
```
现在不直接从命令行运行 `Babel` 了，取而代之我们将把运行命令写在 `npm scripts` 里，这样可以使用 `Babel` 的本地版本。
<br>
只需将刚刚初始化生成的 `package.json`中的`"scripts"` 字段 `babel` 命令改写成为以下 `build` 字段。<br>
 修改之后的`package.json` 为：
```
  {
    "name": "babel",
    "version": "1.0.0",
    "description": "",
    "scripts": {
      "build": "babel src -d lib"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "babel-cli": "^6.26.0",
      "babel-preset-es2015": "^6.24.1",
      "babel-preset-react": "^6.24.1"
    }
  }
```
 `ES6` 的源码在根目录的 `src` 下，转换之后在 `lib` 文件下。<br>
在 `src` 文件中新建 `ES6` 语法的 `js` 文件，命令行窗口运行 `npm run build` 便可以在 `lib` 文件下生成 `ES5` 语法的 `js` 文件。
