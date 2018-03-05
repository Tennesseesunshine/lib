### EJS模板
学习`express`的时候，有接触到`EJS`模板引擎。然而那个时候对`EJS`的认识比较浅显，咨询之后才知道，原来`EJS`返回的页面就可以直接在前端也就是浏览器渲染，也就是前端界面，先前以为没有写前端页面，原来这是另外一种实现方式。<br>
<br>
`EJS`可以在服务器端使用，也可以在前端代码使用。在后台使用的时候，是直接用获取到的数据去渲染页面，而在前端的话就需要请求`API`获取到数据之后，再去渲染页面，绑定等。<br>
<br>
#### 以下是前端使用`EJS`的方法。<br>
在客户端使用`EJS`主要是分四步:<br>
1、导入`EJS`
    `<script charset="UTF-8" type="text/javascript" src="js/ejs.min.js"></script>`，或者使用`CDN`，而用`CDN`的时候，可以省略掉协议`HTTP/HTTPS`。<br>
2、准备需要绑定的数据<br>
在正真的项目中，需要使用AJAX或者JSONP等技术从服务器获取数据，然后把获取回来的数据进行解析填充。
```
    //->使用jQuery的AJAX获取数据
    $.ajax({
        url:'/getMenu',
        type:'get',
        dataType:'json',
        success:function(data){
            //->data:就是我们从服务器获取的数据,然后执行第四步的bindHTML方法
            bindHTML(data);
        }
    });

    //->假设我们获取的数据格式如下
    [
        {
            "name": "NBA",
            "tag": "nba",
            "columnId": 100000
        },
        {
            "name": "欧洲杯",
            "tag": "ec",
            "columnId": 3
        },
        {
            "name": "中超",
            "tag": "csl",
            "columnId": 208
        }
        ...
    ]
```
3、在`HTML`页面中设定模板和嵌入数据<br>
模板有自己的渲染规则，我们把需要写的`JS`循环判断放在`<%%>`中，如果需要输出用`<%=%>`；其实非常的简单就是把之前字符串拼接方式中的`JS`写在了`HTML`中，这样`EJS`负责把模板中的内容获取到，然后按照规则把数据和`HTML`标签拼接在一起...
```
    //->这个是最终显示HTML和数据的区域
    <div class="menu"></div>

    //->这个是制定的模板
    <script charset="UTF-8" type="text/template" id="menuTemplate">
        <%if(data && data.length>0){%>
        <ul>
            <%data.forEach(function(curData,index){%>
            <%var cName=index===0?'bg':null;%>
            <li class="<%=cName%>">
                < a href=" >" columnId="<%=curData.columnId%>">
                <%=curData.name%>
                <i class="triangle">
                    <span class="triLeft"></span>
                    <span class="triRight"></span>
                </i>
                </ a>
            </li>
            <%});%>
        </ul>
        <%}%>
    </script>
```
4、在`JS`中为`EJS`模板提需要绑定的供数据<br>
```
    function bindHTML(data){
        //->首先把页面中模板的innerHTML获取到
        var str=$("#menuTemplate").html();

        //->然后把str和data交给EJS解析处理，得到我们最终想要的字符串
        var result=ejs.render(str, {data: data});

        //->最后把获取的HTML放入到MENU中
        $(".menu").html(result);
    }
```
