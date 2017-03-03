
"use strict";

/*json格式存储thead*/
var tableTHead={
    contents:[{
        name:"name",
        label:"姓名"
    },{
        name:"violin",
        label:"小提琴"
    },{
        name:"viola",
        label:"中提琴"
    },{
        name:"cello",
        label:"大提琴"
    }]
};

/*json格式存储tbody数据内容*/
var datas=[{
    name:"小一",
    violin:"90",
    viola:"88",
    cello:"98"
},{
    name:"小二",
    violin:"89",
    viola:"87",
    cello:"90"
},{
    name:"小三",
    violin:"96",
    viola:"78",
    cello:"65"
},{
    name:"小四",
    violin:"95",
    viola:"83",
    cello:"79"
},{
    name:"小五",
    violin:"68",
    viola:"77",
    cello:"73"
},{
    name:"小六",
    violin:"90",
    viola:"69",
    cello:"75"
},{
    name:"小七",
    violin:"88",
    viola:"92",
    cello:"91"
}];

//创建thead、tbody结点,添加子节点
var gradesTable=document.getElementById("gradesTable");
var tHead=document.createElement("thead");
var tBody=document.createElement("tbody");

//遍历tableHead,取出每一个表头元素显示
tableTHead.contents.forEach(function (content) {
    var tHeaderContents=document.createElement("th");
    tHead.appendChild(tHeaderContents);
    tHeaderContents.textContent=content.label;
});
gradesTable.appendChild(tHead);

//遍历datas数组，取出每一个元素显示
datas.forEach(function (data) {
    var tr=document.createElement("tr");
    tableTHead.contents.forEach(function (contect) {
        var td=document.createElement("td");
        td.textContent=data[contect.name];
        tBody.appendChild(tr).appendChild(td);
    })
});
gradesTable.appendChild(tBody);










