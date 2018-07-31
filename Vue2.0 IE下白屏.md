`npm install --save-dev babel-polyfill`
<br>
`npm install --save-dev babel-plugin-transform-es2015-arrow-functions`

`mian.js`  顶部引入 `import 'babel-polyfill'`

`build/webpack.base.conf.js`文件

修改`module.exports` 下的 `entry.app = ['babel-polyfill', './src/main.js']`

`.babelrc`文件

修改`"plugins"`为: `["transform-vue-jsx", "transform-runtime", "transform-es2015-arrow-functions"]`
