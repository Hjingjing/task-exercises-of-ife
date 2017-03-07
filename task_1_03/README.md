https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
对于相对定位元素，top 和 bottom 属性指定它相对于正常位置的垂直偏移，left 和 right 属性指定水平偏移。

对于绝对定位元素，top、right、bottom 和 left 属性指定元素相对于其包含块的偏移，即此时位置为与包含块的相对位置。元素的边距（margin）定位在这些偏移之中。

在大多数时候，绝对定位元素的 height 和 width 属性的值为 auto，它们会自动计算以适合元素的内容。但是非替换（non-replaced）绝对定位元素可以占据 top 和 bottom 的值（除 auto 外）所共同指定的可用空间，而不必设置 height（也就是设其为 auto）。left、right 与 width 也类似。

粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。例如：
#one { position: sticky; top: 10px; }
在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。
粘性定位常用于定位字母列表的头部元素。标示 B 部分开始的头部元素在滚动 A 部分时，始终处于 A 的下方。而在开始滚动 B 部分时，B 的头部会固定在屏幕顶部，直到所有 B 的项均完成滚动后，才被 C 的头部替代。
须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

http://zh.learnlayout.com/display.html
一个 block 元素通常被叫做块级元素。一个 inline 元素通常被叫做行内元素。
div 是一个标准的块级元素。一个块级元素会新开始一行并且尽可能撑满容器。其他常用的块级元素包括 p 、 form 和HTML5中的新元素： header 、 footer 、 section 等等。
none

另一个常用的display值是 none 。一些特殊元素的默认 display 值是它，例如 script 。 display:none 通常被 JavaScript 用来在不删除元素的情况下隐藏或显示元素。
它和 visibility 属性不一样。把 display 设置成 none 元素不会占据它本来应该显示的空间，但是设置成 visibility: hidden; 还会占据空间。

#main {
  width: 600px;
  margin: 0 auto;
}
<div id="main">
设置块级元素的 width 可以防止它从左到右撑满整个容器。然后你就可以设置左右外边距为 auto 来使其水平居中。元素会占据你所指定的宽度，然后剩余的宽度会一分为二成为左右外边距。
唯一的问题是，当浏览器窗口比元素的宽度还要窄时，浏览器会显示一个水平滚动条来容纳页面。
</div>
解决办法：#main {
            max-width: 600px;
            margin: 0 auto;
         }

当你设置一个元素为 box-sizing: border-box; 时，此元素的内边距和边框不再会增加它的宽度。
既然没有比这更好的方法，一些CSS开发者想要页面上所有的元素都有如此表现。所以开发者们把以下CSS代码放在他们页面上：
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

另一个布局中常用的CSS属性是 float 。Float 可用于实现文字环绕图片，如下：
img {
  float: right;
  margin: 0 0 1em 1em;
}

使用 clear 我们就可以将这个段落移动到浮动元素 div 下面。你需要用 left 值才能清除元素的向左浮动。你还可以用 right 或 both 来清除向右浮动或同时清除向左向右浮动。

.clearfix {
  overflow: auto;
}
清除浮动

“响应式设计（Responsive Design” 是一种让网站针对不同的浏览器和设备“呈现”不同显示效果的策略，这样可以让网站在任何情况下显示的很棒！
@media screen and (min-width:600px) {
  nav {
    float: left;
    width: 25%;
  }
  section {
    margin-left: 25%;
  }
}
@media screen and (max-width:599px) {
  nav li {
    display: inline;
  }
}

column

这里有一系列新的CSS属性，可以帮助你很轻松的实现文字的多列布局。让我们瞧瞧：
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
<div class="three-column">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
</div>

使用 Flexbox 的居中布局
.vertical-container {
  height: 300px;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;
}
<div class="vertical-container">
    <div>CSS里总算是有了一种简单的垂直居中布局的方法了！</div>
</div>

使用 Flexbox 的牛逼布局
.container {
  display: -webkit-flex;
  display: flex;
}
.initial {
  -webkit-flex: initial;
          flex: initial;
  width: 200px;
  min-width: 100px;
}
.none {
  -webkit-flex: none;
          flex: none;
  width: 200px;
}
.flex1 {
  -webkit-flex: 1;
          flex: 1;
}
.flex2 {
  -webkit-flex: 2;
          flex: 2;
}
<div class="initial">
空间足够的时候，我的宽度是200px，如果空间不足，我会变窄到100px，但不会再窄了。
</div>
<div class="none">
无论窗口如何变化，我的宽度一直是200px。
</div>
<div class="flex1">
我会占满剩余宽度的1/3。
</div>
<div class="flex2">
我会占满剩余宽度的2/3。
</div>






方法一
html代码先写left div，再写right div,最后写middle div，左边div float left，右边div float right,中间的div给一个margin-left和margin-right，
值分别为空出来的左右div宽度
HTML的顺序为“左右中”；左右边栏分别float到左右，中间栏设置相应的左右margin。

以下方式主要解决俩问题：1、三列布局，中间宽度自适应，两边定宽； 2、中间栏要在浏览器中优先展示渲染（先渲染的中间栏写在前面）。
方法二
圣杯布局：
<div id="container">
    <div id="center_div" class="column">
        主要内容
    </div>
    <div id="left_div" class="column"></div>
    <div id="right_div" class="column"></div>
</div>
1、三个div 都float left
2、让中间列div宽度占满整个宽度100%
  #container{
      width: 100%;
  }
  #center_div{
       width: 100%;
  }
3、#left_div{
      width: 300px;
      margin-left: 100%;
  }
  #right_div{
      width: 200px;
      margin-left: 200px;
  }
4、变成三列，设置wrapper div 的padding 值，使左右缩小左右div的大小
5、左边div相对定位，left值-220px
6、右边div相对定位，left值140px

方法三
双飞翼布局：
<div id="container">
    <div id="center_div" class="column">
        <div id="mainWrap">主要内容</div>
    </div>
    <div id="left_div" class="column"></div>
    <div id="right_div" class="column"></div>
</div>
浏览器是按照你写html的顺序渲染的，所以把中间div要写到前面，这就满足了问题里的第二个。
然后让这三列div都浮动起来, float:left，
.column{
   float: left;
}
让中间列div宽度占满整个宽度100%
#container{
    width: 100%;
}
#center_div{
     width: 100%;
}
中间列div不是占了全部了吗，挤不下怎么办，办法是让左右两个div覆盖在上面，这样就挤下了，这就是负外边距的作用。
把左边div设置负边距margin-left:-100%和固定width（假设是200px），负边距的作用就是让左边div盖在中间div上面，设成100%就会盖在中间div最左边。
#left_div{
    width: 300px;
    margin-left: 100%;
}
右边div设置固定width，假设是200px，负边距margin-left:140px和这它的固定宽度一致，这样会盖在最中间div右边。
#right_div{
    width: 200px;
    margin-left: 200px;
}
已经形成了三列，但是问题在于，中间div的内容被挡住了，所以最后一步，就是在中间div里再创建一个子div，让这个子div的左右外边距分别等于左边div和右边div的固定宽度，
#middle_wrapper{
    margin-left: 220px;
    margin-right: 160px;
}















