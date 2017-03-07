/*立即执行函数，模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量*/
// (function () {
    /*用于记录日期，显示的时候，根据dateObj中的日期的年月日显示*/
    var dateObj = (function () {
        var _date = new Date();
        /*默认为当前系统时间*/
        return {
            getDate: function () {
                return _date;
            },
            setDate: function (date) {
                _date = date;
            }
        };
    })();

    console.log(dateObj);

    /*表格中显示日期*/
    showCalendarData();

    /*绑定事件*/
    // bindEvent();

    /*表格中显示数据，并设置类名*/
    function showCalendarData() {
        var _year=dateObj.getDate().getFullYear();/*2017*/
        var _month=dateObj.getDate().getMonth()+1;/*3*/
        var _dataStr=dateObj.getDate();/**/
        console.log(_dataStr);

        /*设置顶部标题栏中的年、月信息*/
        var calendarTitle=document.getElementById("calendar-title");
        var titleStr=_dataStr.substr(0,4)+"年"+_dataStr.substr(4,2)


    }

// });
