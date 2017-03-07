    /**方法一
     * getData方法
     * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
     * 返回一个数组，格式见函数中示例
     */
    var data=[];
    function getData() {
        var lis=document.getElementById("source").getElementsByTagName("li");  //获取所有li标签dom对象
        //遍历
        for(var i=0;i<lis.length;i++){
            var city=lis[i].innerText.match(/(.*?)空气/)[1];  //match()正则匹配，返回一个新数组；（.*/）是懒惰匹配，匹配到“空气”就不往下执行了；[0]存储“北京空气”[1]存储“北京”
            var num=lis[i].getElementsByTagName("b")[0].innerText;  //getElementsByTagName("b")[0]获取的b的数组，取数组中第一个元素
            data.push([city,num]);  //将city和num推入二维数组
            /*
            * 或者这样写入二维数组
            * data[i]=[];  //数组data的每一个元素定义为数组格式
            * data[i].push(city);  //每一个元素推入两个数据，成数组格式
            * data[i].push(num);
            * */
        }
        return data;  //返回数组
        /*
         data = [
         ["北京", 90],
         ["北京", 90]，
         ["上海", 80],
         ["福州", 40]
         ……
         ]
         */
    }