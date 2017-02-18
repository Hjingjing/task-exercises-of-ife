/*
方法一：
1.数组名.sort(function (x,y) {
            return y[0]-x[0];
        });
如果是二维数组，将数组中的第一列数字依次复制给x和y,如果返回值大于0，x排在y后面，否则无变化，不断从新开始排序
2.元素名.appendChild(变量名)，动态创建

        //声明一二三四五排名--数组
        var arr=["一","二","三","四","五","六"];
        var oul=document.getElementById("aqi-list");
        //sort 从大到小重新排序aqiData数组
        aqiData.sort(function (x,y) {
            return y[1]-x[1];
        });
        //console.log(aqiData);

        //遍历数组
        for(var i=0;i<aqiData.length;i++){
            //大于60的创建li标签
            if(aqiData[i][1]>60){
                var oli=document.createElement("li");
                oli.innerHTML='第'+arr[i]+"名："+aqiData[i][0]+","+aqiData[i][1];

                /*
                或者oli.appendChild(document.createTextNode("第"+arr[i]+"名："+aqiData[i][0]+","+aqiData[i][1]));
                */

                oul.appendChild(oli);
            }
        }
*/

/*
方法二
        //声明一二三四五排名--数组
        var arr=["一","二","三","四","五","六"];
        var contentStr="";

        aqiData.filter(function (element) {  //filter过滤器，将aqiData数组每一个行元素执行function，第二数字大于60的取出来重新放进一个数组
            return element[1]>60;
        }).sort(function (x,y) {  //新数组中每一个第二列元素复制给x和y,降序排列
            return y[1]-x[1];
        }).forEach(function (element,index) {  //遍历排序后的数组，组成新字符串
            contentStr+="<li>第"+arr[index]+"名："+element[0]+","+element[1]+"</li>";
        });

        document.getElementById("aqi-list").innerHTML=contentStr;
*/