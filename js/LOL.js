//=============================================第一部分JS-开始=========================================

/**
 * Created by Administrator on 2016/9/1 0001.
 */

/**
 * 首页刘亚希负责的header部分 js部分
 *
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


                var left=e.pageX+310-309;//获取鼠标在页面内移动的距离 作为loginbar的左边距和上边距
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

});





//=============================================第一部分JS-结束=========================================



//=============================================第二部分JS-开始=========================================
$(function () {


    //主体部分
    // 左边部分;
    //无操作时，自动变化
    //无鼠标经过时，自动切换图片
    //设置一个标记，用来同步
    var fightIndex = 0;
    //获取显示图片的框架宽度
    var picturesWidth = $(".pictures").width();
    //获取控制图片移动的ul
    var list_ul = $("#pic>ul");
    var timeId = null;
    timeId = setInterval(fightMoveHand, 2000);
    //为了达到无缝衔接效果，我们需要在此添加一张图片，其内容为第一张的内容
    $(".pictures .list").append($(".pictures li").eq(0).clone());
    //获取所有图片
    var list_imgs = $(".pictures>ul>li");
    //封装计时器自动移动函数
    function fightMoveHand() {
        //假设已经到了最后一张图片了
        if (fightIndex === (list_imgs.length - 1)) {
            //就让其返回到第一张 的位置
            fightIndex = 0;
            $(list_ul).css("left", "0px")
        }
        //为了实现无缝链接的效果，我们应该让他显示第二张图片
        fightIndex++;
        $(list_ul).animate({"left": -fightIndex * picturesWidth}, 400);
        //假若此时图片已经到了最后一张的位置，也就是刚添加的第六张，我们就让第一个span显示样式
        if (fightIndex === list_imgs.length - 1) {
            $("#fight li").eq(0).addClass("current");
            $("#fight li").eq(0).siblings().removeClass("current");
        }
        //遍历所有的li让其样式都清除 干掉其他，改变自己的颜色
        $("#fight li").eq(fightIndex).addClass("current").siblings().removeClass("current");
    }

    //鼠标进入盒子，计时器被清除
    $(".left-mainer").mouseenter(function () {
        clearInterval(timeId);
    });
    //鼠标离开盒子，计时器继续执行
    $(".left-mainer").mouseleave(function () {
        timeId = setInterval(fightMoveHand, 2000);
    });
    //鼠标经过每一个文本中的li。对应图片跟着改变
    //第一张下标默认有样式
    $("#fight li").eq(0).addClass("current");

    //鼠标经过，改变当前li的样式
    $("#fight li").mouseenter(function () {
        //获取当前的span下标
        fightIndex = $(this).index();
        //获得当前的span，干掉其他li样式
        $(this).addClass("current").siblings().removeClass("current");
        //计算当前需要移动的距离
        var moveWidth = fightIndex * picturesWidth;
        //让装图片的ul动画移到该位置
        $(list_ul).animate({"left": -moveWidth}, 500);
    });

//右边部分;
    $("#mainerNav>ul>li").mouseenter(function () {
        //获取到对应的下标，方便显示对应的盒子
        var imgP = $(this).index();
        //让当前的导航栏显示经过的样式
        $(this).addClass("current").siblings().removeClass("current");
        //获取对应的盒子，显示对应的盒子
        $(".news-content").eq(imgP).css("display", "block").siblings().css("display", "none");
    });

});
//=============================================第二部分JS-结束=========================================



//=============================================第三部分JS-开始=========================================

//视频中心模块 videoCenter
//使用用js
$(function () {
    /*视频部分start*/
    var newVideoStr = "";//存储视频数据拼接字符串
//显示对应的视频栏目
    function bianliVideo(newVideoArr) {
        newVideoStr = "";//很关键!!每次先要把字符串滞空
        for (var i = 0; i < newVideoArr.length; i++) {
            newVideoStr += '<li>' +
                '<a href="video.html" class="v-link" href="#">' +
                '<img src=' + newVideoArr[i].srcImg + ' >' +
                '<span class="shadow1"></span>' +
                '<span class="v-meta">' +
                '<!--<span class="v-author">枪炮玫瑰</span>-->' +
                '<span class="v-time">' + newVideoArr[i].vtime + '</span>' +
                '</span>' +
                '<i class="icon-v"></i>' +
                '</a>' +
                '<h5 class="v-name"><a href="#">' + newVideoArr[i].description + '</a></h5>' +
                '</li>';
        }
        return newVideoStr;
    }

    $("#Jvideo_n1").css("display", "block").html(bianliVideo(zuixinVideo));//页面加载完毕显示第个tab栏下面的内容
    $("#Jvideo>li").mouseenter(function () {//视频tab栏项目 li注册鼠标进入事件
        //tab栏li的样式也要进行修改 动态添加类名 current  并排它
        $(this).addClass("current").siblings().removeClass("current");
        //视频栏目部分移入对应的li显示相应的栏目  并排它
        $("#contentVideo>ul").eq($(this).index()).css("display", "block").siblings().css("display", "none");

        switch ($(this).index()) {
            case 0:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(zuixinVideo));
                break;
            case 1:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(jieshuoVideo));
                break;
            case 2:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(freeheroVideo));
                break;
            case 3:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(sashiVideo));
                break;
            case 4:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(quweiVideo));
                break;
            case 5:
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(guanfangVideo));
                break;
            default :
                $("#contentVideo>ul").eq($(this).index()).html(bianliVideo(zuixinVideo));
        }
        //鼠标悬每个小饰品窗口后,显示三角
        $("#contentVideo>ul").eq($(this).index()).find("li").mouseenter(function () {

            $(this).find(".icon-v").css("display", "block");
        });
        $("#contentVideo>ul").eq($(this).index()).find("li").mouseleave(function () {

            $(this).find(".icon-v").css("display", "none");
        });
    });


    var hero_0Str = "";//存储英雄皮肤部分第一个Tab栏下的英雄内容
    /**********************************修改1**********************/
    function bianliHero(heroArr) {
        hero_0Str = "";
        if (heroArr == hero_0) {
            for (var i = 0; i < heroArr.length; i++) {
                hero_0Str += '<a href="lol-info-detail/info-detail.html" title=' + heroArr[i].title + 'href="#" target="_blank">' +
                    '<img width="76" height="76" src=' + heroArr[i].srcImg + ' alt="">' +
                    '<span class="sbg">' +
                    '<span class="first-name">' + heroArr[i].firstName + '</span>' +
                    '</span>' +
                    '</a>';
            }
        } else {
            for (var i = 0; i < heroArr.length; i++) {
                hero_0Str += '<a  href="yanquefenye/yanque.html" target="_blank">' +
                    '<img width="76" height="165" src=' + heroArr[i].srcImg + ' alt="">' +
                    '<span class="sbg">' +
                    '<span class="first-name">' + heroArr[i].firstName + '</span>' +
                    '</span>' +
                    '</a>';
            }
        }
        return hero_0Str;
    }

    /**********************************修改1**********************/
    $("#J_freeList").html(bianliHero(hero_0));//默认显示一个tab栏下的英雄
    $("#J_heroTab>li").mouseenter(function () {//英雄皮肤部分的Tab栏

        $(this).addClass("current").siblings().removeClass("current");//Tab显示样式
        //下面对应显示Tab相关内容
        $("#hero-tab-content>div").eq($(this).index()).css("display", "block").siblings().css("display", "none");
        switch ($(this).index()) {
            case 0:
                $("#hero-tab-content>div").eq($(this).index()).html(bianliHero(hero_0));
                break;
            case 1:
                $("#hero-tab-content>div").eq($(this).index()).html(bianliHero(hero_1));
                break;
            case 2:
                $("#hero-tab-content>div").eq($(this).index()).html(bianliHero(hero_2));
                break;
            default:
                $("#hero-tab-content>div").eq($(this).index()).html(bianliHero(hero_0));
        }

    });

    /*发表评论区域start*/
    // 点击发表评论按钮,获取文本域中输入的内容平动态添加到下面区域


    /*视频详情页end*/

});


//=============================================第三部分JS-结束=========================================



//=============================================第四部分JS-开始=========================================
window.onload = function () {
    function my$(id) {
        return document.getElementById(id)
    }

    var matchCenter = my$("matchCenter");

    //给赛事中心设置鼠标移入事件
    matchCenter.onmouseover = function () {
        matchCenter.className = " highlight";
    };

    //给赛事中心设置鼠标移出事件
    matchCenter.onmouseout = function () {
        matchCenter.className = "match-inter";
    };

    //给tab栏里的每一个li注册鼠标移入事件
    var matchTab = my$("matchTab");
    var matchPic = my$("matchPic");
    var lis = matchTab.children;
    console.log(lis);
    var allNewsPart = my$("allNewsPart");
    var newsparts = allNewsPart.children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseover = function () {
            //把每个Li都设置下标i，以index为属性，i为属性名
            //上面的lis[i],用于动态的注册事件，注册完i=lis.length了，所以直接设置类名就是undefined
            for (var i = 0; i < lis.length; i++) {
                //lis[i].index = i;
                lis[i].className = "";
                newsparts[i].style.display = "none";
            }
            this.className = "current";
            matchPic.style.backgroundImage = "url(images/Jevent_" + (this.index + 1) + ".jpg)";
            newsparts[this.index].style.display = "block";
        }
    }
    //赛事中心部分 E=================================================================================


    //活动中心部分 S===================================================================================

    //给活动的图片注册鼠标移动事件，移动到上面，显示一个透明遮罩层
    $("#activePicBox").mouseenter(function () {
        $("#maskZw").slideDown();
        $("#maskTop").slideDown();
    })

    $("#activePicBox").mouseleave(function () {
        $("#maskZw").slideUp();
        $("#maskTop").slideUp();
    })

////活动新闻li，设置鼠标移入事件，绿色高亮
//
    $(".greenli").mouseenter(function () {
        $(this).addClass("current").siblings("li").removeClass("current");
        //$(this).children().css("color","white")
        //    .parent().siblings().children("a").css("color", "black");
    })


    $(".greenli").mouseleave(function () {
        $(this).removeClass("current");
    })


    //活动新闻li,设置鼠标移入事件，灰色高亮
    $("li.greyli").mouseenter(function () {
        $(this).addClass("currentGrey").siblings("li").removeClass("currentGrey");
    })


    $("li.greyli").mouseleave(function () {
        $(this).removeClass("currentGrey");
    })





    //活动中心部分 E==================================================================================

}
//=============================================第四部分JS-结束=========================================



//=============================================第五部分JS-开始=========================================


//Tab切换js版本

//Tab切换jquery 版本
$(function () {
    $("#ser_tab_left>li").mouseover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var idx = $(this).index();
        $("#ser_tab_content>li").eq(idx).addClass("current").siblings().removeClass("current");
    });

//显示隐藏的盒子
    $("#FooterLNK").mouseenter(function () {
        $("#foot_lnkMtBox").show();
        $("#foot_lnkMt").stop().animate({"marginTop":"-176px"},500);
    });
    $("#foot_lnkBox").mouseleave(function () {
        $("#foot_lnkMt").stop().animate({"marginTop":"0px"},500);
        //$("#foot_lnkMtBox").hide();
        $("#foot_lnkMtBox").animate({"marginTop":"0px"},500);
    });

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
})

//=============================================第五部分JS-结束=========================================

