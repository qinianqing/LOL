/**
 * Created by ziwei3749 on 2016/9/4.
 */
$(function(){

    function getDate(date) {
        //判断date是否是日期对象
        if (!(date instanceof Date)) {
            return;
        }

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;

        return year + "-" + month + "-" + day + " " + hour + ":" + minute ;
    }

    $("#replayButton").click(function (){
        var areaTxt = $("#videoreplayArea").val();//获取文本域中的内容

        var str = '<div class="addNewReplay" >' +
            '<div style="position: absolute;width:450px;height:40px;top:35px;left:80px" class="addNewReplayDiv">' +areaTxt +
            '</div>' +
            '<div style="color:#9e9e9e;font-size:10px;position: absolute;width:150px;height:18px;top:8px;right:25px">' +
            '发表于:'+getDate(new Date()) +
            '</div>' +
            '</div>';
        $(".newReplayContent").prepend(str);
        $(".newReplayContent>div").eq(0).addClass("addNewReplay");
         $("#videoreplayArea").val("");
    });

});
