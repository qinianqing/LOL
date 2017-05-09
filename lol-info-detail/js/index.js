/**
 * Created by Administrator on 2016/9/1 0001.
 */

/**
 * 首页刘亚希负责的header部分 js部分
 */
//功能一
//当鼠标移入header部分的导航那么子导航显示 鼠标移出hideul则hideul消失
$(document).ready(function () {//入口函数
    $("#header-nav-ul").mouseenter(function () {//给header的导航添加移入事件
        $("#hideul").stop().slideDown();//让子ul显示
    });
    $("#hideul").mouseleave(function () {
        $("#hideul").stop().slideUp();//让子ul显示
    });
});
//功能二在download的部分鼠标移入透明度发生变换
$(function () {
    //获取到目标元素
    $(".download .publica").mouseenter(function () {
        $(this).css("opacity", "0.8");
    });
    $(".download .publica").mouseleave(function () {
        $(this).css("opacity", "1");
    })
});
//功能三筋斗云案列
$(function () {
    //鼠标进入到nav的a中 背景图跟着移动
    //获取当前图片的位置
    var defaultLeft = $("#moveimg").position().left;
    $("#header-nav-ul li").mouseenter(function () {//给li添加ritual事件
        //当前li的索引为了移动的时候
        var idx = $(this).index();
        $("#moveimg").stop().animate({"left": defaultLeft + idx * 138}, 200)
    });
    //当点击a的时候记录现在img的位置
    var clickPo=defaultLeft;
    $("#header-nav-ul li").click(function () {
        // 点击记录现在的位置
        clickPo = $("#moveimg").position().left;
    });
    //鼠标移出li的时候回到上一次点击的位置
    $("#header-nav-ul").mouseleave(function () {
        // alert("hah ");
        $("#moveimg").stop().animate({"left": clickPo}, 200)
    });
});
// 功能四 点击#loginApi这个a标签使遮罩层显示 并且显示登陆提示框进行相关操作
$(function () {//入口函数
    //获取到a链接
    $("#loginApi").click(function () {//添加注册事件
        // alert("hehhe");
        //遮罩层显示
        var defL;
        var defT;
        $("#mask").css("display","block");
        //1.登陆提示框显示
        $("#loginbar").css("display","block");
        //每一点击的时候都让提示框出现在原来的位置
        $("#loginbar").css({
            "top":"",
            "left":"50%",
        });
        //2.自动让uername获取焦点s
        $("#username").trigger("focus");
        //3.并且设置外边框
        $("#username").css("outline","1px solid #05B896")
        //4.当password有获取焦点的事件的时候在触发outline属性
        $("#pwd").focus(function () {
            $(this).css("outline","1px solid #05B896");
            // 同时user的user的outline为空
            $("#username").css("outline","");
        });
        $("#username").focus(function () {
            $(this).css("outline","1px solid #05B896");
            // 同时user的user的outline为空
            $("#pwd").css("outline","");
        });

        //功能 5.拖拽功能
        $("#removebox").mousedown(function () {//鼠标按下
            //判断当前的浏览器是否支持getSelection
            $(document).mousemove(function (e) {//在document中移动


                var left=e.pageX+310-150;//获取鼠标在页面内移动的距离 作为loginbar的左边距和上边距
                var top=e.pageY-135-20;//因为在css中loginbari有margin所以加上的减去 减去的加上
                $("#loginbar").css({"left":left,"top":top});

                window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
            });
        });
        $(document).mouseup(function () {//鼠标抬起释放移动事件
            $(this).off("mousemove");
            // window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
        });
        //6.滚动时候loginAPI进行定位
        $(window).scroll(function (e) {
            //让登陆框固定定位
            $("#loginbar").css("position","fixed");
            var scolltop=$(this).scroll().top();
            console.log(scolltop);
            //  top=e.pageY-scolltop+310-150;//因为在css中loginbari有margin所以加上的减去 减去的加上
        });

        //当在在username和pwd时的功能keydown的时候 如果input的值不为空那么就让清除的叉叉出现
        //1.username
        $("#username").keyup(function () {
            // console.log($(this).val().trim());
            if($(this).val().trim().length>0){//如果length大于0那么就让叉叉出现
                $("#clearContent").css("display","block");
            }else{//如果length=0那么就让隐藏
                $("#clearContent").css("display","none");
            }
            //点击叉叉让当前的val为空并且自动获取焦点
            $("#clearContent a").click(function () {
                // alert("哈哈");
                //清空内容
                $("#username").val("");
                //并且自动获取焦点
                $("#username").trigger("focus");
                //并且设置外边框
                $("#username").css("outline","1px solid #05B896")
            });

            //进行正则验证
            //首先字符中函数空格那些隐式字符串户报错$以及特殊字符串都会报错
            if(/(\W+)|(\s+)/.test($(this).val())){
                console.log(/(\W+)|(\s+)/.test($(this).val()));
                console.log($(this).val());
                $("#tip").text("请输入用户名和密码");
                $("#tip").css("color","red")
            }else{
                $("#tip").text("");
            }

        });
        //2.pwd
        $("#pwd").keyup(function () {
            // console.log($(this).val().trim());
            if($(this).val().trim().length>0){//如果length大于0那么就让叉叉出现
                $("#clearPwd").css("display","block");
            }else{//如果length=0那么就让隐藏
                $("#clearPwd").css("display","none");
            }
            //点击叉叉让当前的val为空并且自动获取焦点
            $("#clearPwd a").click(function () {
                // alert("哈哈");
                //清空内容
                $("#pwd").val("");
                //并且自动获取焦点
                $("#pwd").trigger("focus");
                //并且设置外边框
                $("#pwd").css("outline","1px solid #05B896")
            });
            if(/(\W+)|(\s+)/.test($(this).val())){
                console.log(/(\W+)|(\s+)/.test($(this).val()));
                console.log($(this).val());
                $("#tip").text("请输入用户名和密码");
                $("#tip").css("color","red")
            }else{
                $("#tip").text("");
            }
        });
        //点击提交按钮的时候进行判断如果是空就报错
        $("#sub").click(function () {
            if($("#username").val().length==0||$("#pwd").val().length==0){
                $("#tip").text("请输入用户名和密码");
                $("#tip").css("color","red")
                return;
            }else{
                $("#tip").text("");
            }
        });

        //点击的时候让遮罩层和登录页面隐藏
        $("#closebaner").click(function () {
            //遮罩层隐藏
            $("#mask").css("display","none");
            //登陆提示框隐藏
            $("#loginbar").css("display","none");
            //清除input中的数据
            $("#username").val("");
            $("#pwd").val("");
            $("#tip").text("");
        });
    });
})


/**
 * 首页曹艳奇负责的footerer部分 js部分
 * Created by caoyanqi on 2016/9/1.
 */
$(function () {
    //页脚 滚动条
    var ser_bar = document.getElementById("ser_bar");
//盒子高度
    var h_foot_lnkMt = document.getElementById("foot_lnkMt").offsetHeight;
//文本内容高度
    var h_content = document.getElementById("lnkMt_content").offsetHeight;
//滚动条容器高度
    var h_ser_scroll = document.getElementById("ser_scroll").offsetHeight;
//滚动条高度 = 盒子高度*滚动条容器高度/文本高度
    var h_ser_bar = h_foot_lnkMt * h_ser_scroll / h_content;
    ser_bar.style.height = h_ser_bar + "px";
//滚动条的注册鼠标按下事件
    ser_bar.onmousedown = function (e) {
        //鼠标距离bar上部距离
        var spaceY = e.pageY - ser_bar.offsetTop;
        //鼠标移动事件
        document.onmousemove = function (e) {
            var ser_barTop = e.pageY - spaceY;
            ser_barTop = ser_barTop < 0 ? 0 : ser_barTop;
            var barMaxMove = h_ser_scroll - ser_bar.offsetHeight;
            ser_barTop = ser_barTop > barMaxMove? barMaxMove: ser_barTop;
            ser_bar.style.top = ser_barTop + "px";
            //拖动滚动条时避免选中文本
            window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
            //文本跟随移动
            var contentMaxMove = h_content - h_foot_lnkMt;
            var content_y = ser_barTop * contentMaxMove / barMaxMove;
            document.getElementById("lnkMt_content").style.marginTop = -content_y +"px";
        };
    };
//鼠标抬起，停止滚动条
    document.onmouseup = function (){
        document.onmousemove = null;
    };

//隐藏的盒子li，当前行高亮
    $("#lnkMt_content li").mouseenter(function () {
        $(this).css("backgroundColor","#A5A5A5").siblings("li").css("backgroundColor","");
    });

//========小火箭start=====
    //滚动显示与隐藏
    $(window).scroll(function () {
        var scrollHeight = $(this).scrollTop();
        if(scrollHeight>300){
            $("#rocket").fadeIn(400);
        }else{
            $("#rocket").fadeOut(400);
        }
    });
    //点击回滚页面顶部
    $("#rocket").click(function () {
        $("html, body").animate({scrollTop:0}, 500);
    });
//小火箭mouseenter放大效果
    $("#rocket").mouseenter(function () {
        $("#rocket img").stop().animate({
            "width": "86px",
            "height": "86px",
            "margin-left":"-8px",
            "margin-top":"-8px"
        },300)
    });
    $("#rocket").mouseleave(function () {
        $("#rocket img").stop().animate({
            "width": "70px",
            "height": "70px",
            "margin-left":"0px",
            "margin-top":"0px"
        },300)
    });
//=========小火箭end========
});




