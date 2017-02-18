js中的事件委托或是事件代理详解
http://www.cnblogs.com/liugang-vip/p/5616484.html

文本框失去焦点事件、获得焦点事件
onBlur:当失去输入焦点后产生该事件
onFocus:当输入获得焦点后，产生该文件
Onchange:当文字值改变时，产生该事件
Onselect:当文字加亮后，产生该文件
onpropertychange 当属性改变发生该事件
无论粘贴 keyup onchange等，最为敏感

/*
代码一：
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */

var aqiData = {};  //声明对象
var cityInput=document.getElementById("aqi-city-input");
var valueInput=document.getElementById("aqi-value-input");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

    //去的首尾的空字符
    var city=cityInput.value.trim();
    var value=valueInput.value.trim();
    if(city==""){
        alert("请输入城市名称");
        return 0;
    }else {

        //(点击按钮)验证城市输入的是中英文
        var reg1=/^[A-Za-z\u4E00-\u9FA5]+$/;
        if(!(reg1.test(city))){
            alert("输入的城市名称必须是中英文");
            return 0;
        }

        if(value==""){
            alert("请输入空气质量值");
            return 0;
        }
        else {

            //(点击按钮)验证空气质量输入的是整数
            var reg2=/^[-+]?\d*$/;
            if(!(reg2.test(value))){
                alert('输入的"空气质量值"必须为整数');
                return 0;

                /*或者match方法匹配
                 * if(!value.match(/^\d+$/)){
                 *     alert('输入的"空气质量值"必须为整数');
                 *     return 0;
                 * }
                 * */
            }
        }
    }

    //将符合条件的名/值对存入对象
    //相当于aqiData.city=air ,给aqiData对象增加了一个名为city的值的属性
    //但是这里的city 是一个变量所有不能采用 aqiData.city = air 这种写法。
    aqiData[city]=value;
}


/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

    //创建表格内容,遍历对象的每一个元素
    var contentStr="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        contentStr+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button onclick='delBtnHandle(\""+city+"\")'>删除</button></td></tr>";
    }

    var aqi_table=document.getElementById("aqi-table");
    aqi_table.innerHTML=contentStr;

    /*
    * 或者
    * document.getElementById("aqi-table").innerHTML = index ? items : "";当index值为对象最后一个名/值对的属性名时，打印“”结束
    * */
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {

    //删除对象中的名/值对
    delete aqiData[city];

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var add_btn=document.getElementById("add-btn");
    add_btn.onclick=addBtnHandle;

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();

*/






没有review结束