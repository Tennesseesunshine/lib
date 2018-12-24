## Taro下配置阿里`iconfont`字体图标
##### 1. 添加需要的`iconfont`字体图标至自己项目中，使用`Unicode`下载压缩包至本地。
##### 2. 将下载的文件解压，将`iconfont.css`拷贝至项目目录中。
##### 3. 修改`iconfont.css`中的`.iconfont {...}`为`.icon {...}`。
##### 4. `app.js(app.ts)`下引入`iconfont.css`。
##### 5. 在对用的页面引入`import { AtIcon } from "taro-ui";`。
##### 6. `<AtIcon prefixClass='icon' value='huli-' size='20' color="pink" />`，其中`prefixClass`永远为`icon`，`value`就是`iconfont`的样式名，例如现在`iconfont.css`中有以下这些样式
```
.icon-huli-:before { content: "\e603"; }

.icon-niao-:before { content: "\e605"; }
```
在使用`<AtIcon />`标签的时候，`value`要去掉前边的`.icon-`，上边两个的`value`就分别为`huli-`，`niao-`。
