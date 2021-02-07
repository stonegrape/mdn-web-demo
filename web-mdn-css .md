编写程序的价值所在
1. 什么是css?
2. css入门
3. 如何构建css
4. css 如何工作
5. 一个简单的项目
6. 中级网络识字1:css简介

1. web标准的制定：W3C，WHATWG,ECMA
2. 浏览器支持css

1. 如何构建css
2. HTML中引用css:  link; <style></style>; HTML元素的内部
3. css选择器:element selector;id selector;class selector.
4. 当多个选择器作用于同一元素时，优先级：下面的覆盖上面的。id selector>class selector > element selector
5. 属性和值
6. css 函数 calc(90% - 30px); transform: rotate(0.8turn)
7. @rules:导入其他的命名规则 @import 'style.css'
8. @media: css代码中41行 line41
9.  font, background, padding, border, and margin 
10. 注释，空白


1. [css如何工作](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/CSS%E5%A6%82%E4%BD%95%E8%BF%90%E8%A1%8C)
浏览器 HTML文件 DOM HTML相关的大部分资源（图片，视频，样式） css文件 解析 渲染树 
2. 浏览器如何解析HTML,CSS?不知道  生成DOM,css渲染
3. 当浏览器遇到无法解析的CSS时，会怎么办？ 忽略

[mdn-css-2级学习目录](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks)
1. 层叠与继承
2. css选择器
3. 盒模型
4. 背景和边框
5. 处理不同的文本方向
6. 溢出的内容
7. 值和单位
8. 在css中调整大小
9. 图片，媒体和表单元素
10. 样式化表格
11. 调整css
12. 组织css


1. 层叠 优先级 继承
2. 冲突规则
3. 如何将css文件应用到HTML中
浏览器收藏文件夹：mdn-wc3-WHATWG,ECMA
4. 理解继承：不可以继承：margin padding border inherit initial unset
5. 理解层叠 重要程度 优先级 资源顺序
6. 优先级 权重 千位 百位 十位 个位 不允许晋级 * + > ~  ' ' not
7. !important


1. css selector
2. element selector
3. *
4. class selector
5. id selector
6. a[title] a[href="https://example.com"] p[class~="special"]
7. div[lang|="zh"]
8. li[class^="box-"]
9. li[class$="-box"]
10. li[class*="box"]
11. 大小写敏感 i
13. article p:first-child{} :last-child :only-child :invaild
14. a:hover a:visited a:focus
15. ariticle p:first-child::first-line{}
16. .box::before{} .box::after{}
17. 伪元素和伪类选择器
18. 子代选择器 descendant combinator:article > p
19. 后代选择器 child combinator body: article p 
20. adjacent sibling combinator: h1 + p
21. general sibing combinator: p ~ img

1. 盒模型 
2. display:block/inline 弹性盒子：display:flex
    block 换行 padding border margin 会把其他的元素推开
    inline 不换行 padding border margin 水平方向不推开，垂直方向推开

3. display width height margin border padding 
4. 标准盒模型和替代盒模型：box-sizing:border-box   box-sizing:content-box
5. margin: -40px
6. margin 折叠 margin-top,margin-right,margin-bottom,marign-left
7. border-top, border-right, border-bottom, border-left, border-width, border-style, border-color
8. 使用调式工具来查看盒模型
浏览器样式，程序设定，默认样式，用户设定


1. 黑马程序员
2. font-family font-size  px em % font-weight font-style text-decoration text-indent
3. 标题的字体大小 font-size em px #(red,blue,green,alpha)
4. 后代选择器 子代选择器 并集选择器 伪类选择器(:first-child)
5. > + , " "
6. a:link a:hover a:visted a:active  LVHA
7. input:focus 获得光标的表单元素
8. background-image:url(); background-repeat:no-repeat repeat-x repeat-y; background-color:blue
9. background-position: x, y;
10. background-attachment:scroll/fixed 
11. 背景颜色透明 background(0,0,0,0.8) alpha
12. 选择器的优先级: !important > 行内选择器style > id selector > class selector a:hover伪类选择器 > 元素选择器 >继承或者 *（权重 0）
13. box: border-width border-style border-color border-radius
14. padding-top/right/bottom/left; padding: 10 0; padding:10 0 10 0;
15. * {
    
    padding:0;
    margin:0;
} 把HTML element 自带的padding margin 设置为0，然后在开发过程中 重新设置
16. background-attachment background-position background简写
17. 块级元素，内联元素，布局，文本方向
18. 溢出的内容： overflow 溢出 overflow:hidden visible scroll auto; overflow-x overflow-y
19. 值和单位
20. 术语
21. color 关键字 rgba(0,0,0,0) rgb hsl hsla
22. 16进制 rgb(255,255,255) rgba(255,255,255,0-1);
23. 透明度alpha 和 opacity
24. 表示颜色: 颜色的名称 16进制 rgb(red,green,blue) rgba(255,255,255,0.3) hsl(色调，亮度，饱和度) hsla(0-360,0-100%,0-100%,0-1)
25. 图像作为单位：background-image
26. 位置 position relative absolute
27. 字符串和标识符
28. 函数：calc() rgb() rgba() hsl() hsla()
29. 元素的固有尺寸，由其所包含的内容决定。 ()[]
30. min-height max-width; 不太懂
31. overflow:visible hidden auto max-width:100%; object-fit:cover object:fit:contain;

    img {
        //处理图像溢出问题。
        width:100%;
        height:100%;
        object-fit:cover/contain/fill;
    }

32. input[type="submit"]:hover
33. inherit initial reset
 
34. box-sizing:border-box content-box

    html {
        box-sizing:border-box;
        
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }

35. 重置表单
    button,
    input,
    select,
    textarea {
        box-sizing: border-box;
        font-family: inherit;
        font-size: 100%;
        padding: 0; 
        margin: 0;
    }

    textarea {
        overflow: auto;
    }


# form
1. strictly forbidden to nest a form inside another form


1. 理解元素经过css样式化，是如何不一样的表现。


q:
box-sizing:border-box; content-box  width height border padding
在css中调整大小
了解，熟悉，熟练
div没有长和宽,所以设置border是一横线


信任的老师,优质的资料








8. 块级元素 行内元素
9. 标准文档流 对边对齐 块级元素和行内元素

# 淘汰的概念
1. 块级元素 行内元素  h5对标签有新的定义




# 问题：
1. 图片居中对齐
2. html的语义化 html的所有标签 html body header footer aside form input button table th tr td  article h1 img p a 
3. 怎么使表单元素 靠左 ul li list-life-style list-style
4. 单文字垂直居中 height=line-height
5. MV模型



什么可以改变当下的环境，web前端编程


# 想要搜索
1. 牧原集团招聘 滴滴招聘 怎么进这样的公司 看招聘要求 学习 网络上搜索看面试题 是否达到要求 怪不得谢然培训可以吸引我。
2. 网上的面试题各种各样
3. 可以直接找在牧原集团工作的人，准备，内推，面试
4. 腾讯社招内推


# web学习路线
1. 视频 B站 传智播客 HTML+CSS+JS 基础班 因为mdn 文字比较多 看的比较着急；想要把HTML+CSS+JS的基础复习一遍 理论+demo
    B站 黑马程序员 pink 老师 讲的不行 传智播客web 讲的课程可以 但是概念或者标准 已经被淘汰了 例如块级元素和行内元素
2. 传智播客 学习路线
3. web 需要需要学习什么？怎么做？
4. mdn + 概念 + demo + 黑马程序员 + 路线
5. 搜索学习路线以及要看的书籍
6. 记不住，学习时间少，不知道怎么写简历 不知道该学什么，感觉需要学的很多：数据结构，leetcode, 网络


1. 是否要报培训班？ 黑马，传智播客，王道，谢然
2. 需要增强的是：文本阅读能力，概念，学习能力，专注，自我调节能力
3. 如何检验学习的知识是否学会？

(css insepector)[https://jigsaw.w3.org/css-validator/]
(html insepector)[https://validator.w3.org/]
(mozilla bug)[https://bugzilla.mozilla.org/]


2020/2/6
1. 如何书写简历 软件工程师
2. 跑步30min 冥想
3. em rem font-size
    em: 在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width
    rem: 根元素的字体大小
    需要举例说明
4. position
5. 学习方法 如何集中注意力? 实践，了解， 熟悉， 熟练掌握，有问题，不要忽略
6. 如何调节自己的情绪 不良的情绪需要消化 消极的情绪需要消化；如何调节自己的睡眠，是自己每天可以规律睡觉8h
7. 数据结构 计算机网络 http, web security, js


2020/2/7