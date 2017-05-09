/**
 * 英雄联盟游戏资料页----阿木木
 * 创建者:李玮
 * Created by Liwei on 2016/9/3 0003.
 */

$(function () {
    //一:轮播图效果
    //获取皮肤显示层的宽度,即移动一个图片时改变的宽度
    var imgWidth = $("#skinBox").width();
    //设置标记记录显示大图的索引位置,用于同步
    var pic = 0;

    //1.人物皮肤大图和皮肤名随着选中小图改变
    //为skinNav下的li注册鼠标点击事件
    $("#skinNav>li").click(function () {
        //为当前li添加类名current,清除其他类的current
        $(this).addClass("current").siblings().removeClass("current");
        //skinBig下的对应li移动至skinBox位置
        $("#skinBig").stop().animate({"left": -$(this).index() * imgWidth}, 100);
        pic = $(this).index();
        //skinName中的内容显示为对应图片li的title
        $("#skinName").text($(this).attr("title"));
    });
    //2.人物皮肤大图自动轮播,图片改变,对应皮肤名改变,选中小图改变
    //为skinBig追加一个与其第一个li完全相同的li
    $("#skinBig").append($("#skinBig>li:eq(0)").clone());
    //设置定时器,设置轮播图自动播放
    var timeId = null;
    timeId = setInterval(autoMove, 1000);
    //图片移动的函数
    function autoMove() {
        //若图片移动至最后一张,则索引跳转为0,图片ul的位置跳转至最左,
        if (pic === $("#skinBig>li").length - 1) {
            pic = 0;
            $("#skinBig").css("left", "0px");
        }
        //图片索引加1,移动图片
        pic++;
        $("#skinBig").stop().animate({"left": -pic * imgWidth}, 100);
        //设置图片导航和图片名介绍与显示大图对应
        if (pic === $("#skinBig>li").length - 1) {
            $("#skinNav>li:eq(0)").addClass("current").siblings().removeClass("current");
        } else {
            $("#skinNav>li").eq(pic).addClass("current").siblings().removeClass("current");
        }
        $("#skinName").text($("#skinBig>li").eq(pic).attr("title"));
    }

    //3.鼠标进入皮肤图层,自动播放停止
    $(".lw-character-intro").mouseenter(function () {
        clearInterval(timeId);
    });
    //4.鼠标离开皮肤图层,自动播放继续
    $(".lw-character-intro").mouseleave(function () {
        timeId = setInterval(autoMove, 1000);
    });

    //二:皮肤导航效果
    //1.鼠标进入皮肤 导航li透明度为1
    $("#skinNav>li").mouseenter(function () {
        $(this).css("opacity", "1");
    });
    //2.鼠标离开皮肤 导航li透明度为0.7,但不影响选中的小图
    $("#skinNav>li").mouseleave(function () {
        if (!$(this).hasClass("current")) {//判断小图是否被选中,若为被选中,改变其透明度
            $(this).css("opacity", ".7");
        }
    });

    //三:视频框点击效果
    //1.点击视频按钮动态显示视频框
    $("#introVedio").click(function () {
        $("#vedioBox").show().animate({"width": "675px"}, 500);
    });
    //2.点击关闭按钮视频框动态隐藏
    var flag = false;
    $("#closeVedio").click(function () {
        $("#vedioBox").animate({"width": "0px"}, 500).hide(500);
    });

    /*//四:动态信息显示效果
     //滚轮滚动至轮播图位置(轮播图在显示区域内时),动态显示轮播图左边信息栏,动态显示攻击等信息
     $(window).scroll(function () {
     // if ($(window).scrollTop >= $(".lw-nav-crumbs").offset().top - $(document).height()) {
     //     $(".lw-char-data").slideDown();
     // }
     });*/

    //四:故事情节效果
    var storyOriHeight = 0;//设置变量记录故事情节内容的原高度
    //点击查看更多,内容全部显示
    $("#getMorePlot").click(function () {
        storyOriHeight = $(".story-plot").height();
        $(".story-plot").css("height", $(".story-plot>p").height());
        $(this).hide().next().show();
    });
    //点击收起,内容隐藏一部分
    $("#hideMorePlot").click(function () {
        $(".story-plot").css("height", storyOriHeight);
        $(this).hide().prev().show();
    });

    //五:技能介绍效果
    //1.技能介绍tab栏点击样式改变,内容改变
    var skillInfo = [
        {
            title: "<h5>诅咒之触</h5> <em>被动技能</em>",
            tip: "阿木木的攻击在短时间内减少目标的魔法抗性。",
            stat: ""
        },
        {
            title: "<h5>绷带牵引</h5> <em>快捷键：Q</em>",
            tip: "向目标区域投掷粘稠的绷带，若击中敌人会将阿木木自己拉向目标，晕眩他们，造成80/130/180/230/280(+0.7)魔法伤害。",
            stat: "<li>伤害：80/130/180/230/280</li> <li>冷却时间：16/14/12/10/8</li> <li>法力消耗：80/90/100/110/120</li>"
        },
        {
            title: "<h5>绝望光环</h5> <em>快捷键：W</em>",
            tip: "激活：附近的敌人每秒将受到8/12/16/20/24魔法伤害，并且每秒损失他们1/1.5/2/2.5/3(+0.01)%的最大生命值。",
            stat: "<li>百分比伤害：1/1.5/2/2.5/3%</li> <li>基础伤害：8/12/16/20/24</li>"
        },
        {
            title: "<h5>阿木木的愤怒</h5> <em>快捷键：E</em>",
            tip: "被动：减少阿木木受到的物理伤害:2/4/6/8/10。<br/><br/>主动：阿木木对周围的单位造成75/100/125/150/175(+0.5)魔法伤害。每次阿木木被攻击，该技能的冷却时间减少0.5秒。",
            stat: "<li>伤害减少：2/4/6/8/10</li> <li>冷却时间：10/9/8/7/6</li> <li>伤害：75/100/125/150/175</li>"
        },
        {
            title: "<h5>木乃伊之咒</h5> <em>快捷键：R</em>",
            tip: "阿木木用绷带将周围敌方单位通通缠住，造成150/250/350(+0.8)魔法伤害，并导致他们无法攻击或移动2秒。",
            stat: "<li>伤害：150/250/350</li> <li>法力消耗：100/150/200</li> <li>冷却时间：150/130/110</li>"
        }
    ]; //技能介绍内容
    $(".skill-tab>li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        // $("#skillBox").children().eq($(this).index()).addClass("current").siblings().removeClass("current");
        var str = '<div class="skill-title">' + skillInfo[$(this).index()].title + '</div>'
            + '<p class="skill-tip">' + skillInfo[$(this).index()].tip + '</p>'
            + '<ul class="skill-stat">' + skillInfo[$(this).index()].stat + '</ul>';
        $(".skill-item").html(str);
    });
    var skillMagnJson = {
        "width": 74,
        "height": 74
    };//图片放大时的尺寸
    var skillPicJson = {};//设置标记记录原图片的样式
    //2.技能介绍tab栏经过图片放大
    $(".skill-pic").mouseenter(function () {
        skillPicJson["width"] = $(this).width();
        skillPicJson["height"] = $(this).height();
        skillPicJson["margin-left"] = skillPicJson["margin-top"] = "0px";
        skillMagnJson["margin-left"] = -(skillMagnJson["width"] - skillPicJson["width"]) / 2;
        skillMagnJson["margin-top"] = -(skillMagnJson["height"] - skillPicJson["height"]) / 2;
        $(this).animate(skillMagnJson, 100);
    });
    //3.技能介绍tab栏离开图片恢复
    $(".skill-pic").mouseleave(function () {
        $(this).animate(skillPicJson, 100);
    });

    //六:推荐装备效果
    //1.推荐装备tab栏点击样式改变,内容改变
    $(".equip-tab>li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        $(".equipment>dl").eq($(this).index()).addClass("current").siblings().removeClass("current");
    });
    var equipInfo = {
        111: {
            title: '<h4>多兰之盾</h4><p>售价或合成费用：450</p>',
            desc: '+80生命值<br/><br/>被动：回复6生命/5秒。<br/>唯一被动：格挡8来自敌方英雄的普攻伤害和技能伤害。'
        },
        112: {
            title: '<h4>生命药水</h4><p>售价或合成费用：50</p>',
            desc: '限持5瓶。限持1种生命药水。<br/><br/>点击饮用：在15秒里持续回复共150生命值。'
        },
        113: {
            title: '<h4>监视图腾（饰品）</h4><p>售价或合成费用：0</p>',
            desc: '只能持有1个饰品。<br><br>主动：消耗一层充能来放置1个隐形的<font color="#BBFFFF">侦查守卫</font>，以监视一个区域，持续60 - 120秒。<br><br>每180到90秒储存一层充能，最多可持有2层。<br><br>守卫的持续时长和充能时间会逐步随着等级的提升而加强。<br><br>(一个玩家最多只能在地图上同时放置3个<font color="#BBFFFF">侦查守卫</font>。 转换成<font color="#BBFFFF">透镜</font>类饰品将使<font color="#BBFFFF">饰品</font>在120秒里无法使用。)'
        },
        121: {
            title: '<h4>水银之靴</h4><p>售价或合成费用：350</p>',
            desc: '+25魔法抗性<br><br>唯一被动—强化移动：+45移动速度<br>唯一被动—韧性：受到的晕眩、减速、嘲讽、恐惧、沉默、致盲、变形和禁锢的持续时间减少30%。'
        },
        122: {
            title: '<h4>日炎斗篷</h4><p>售价或合成费用：1000</p>',
            desc: '+500生命值<br>+60护甲<br>-10%来自暴击的伤害<br><br>唯一被动—寒铁：被普通攻击击中时，减少攻击者15%的攻击速度（持续时间：1秒）。<br>唯一主动：减缓周围敌人35%的移动速度，持续4秒（冷却时间：60秒）。'
        },
        123: {
            title: '<h4>冰霜之心</h4><p>售价或合成费用：800</p>',
            desc: '+90护甲<br>+20%冷却缩减<br>+400法力值<br><br>唯一光环：降低附近敌方单位15%的攻击速度。'
        },
        131: {
            title: '<h4>兰顿之兆</h4><p>售价或合成费用：900</p>',
            desc: '+500生命值<br>+60护甲<br>-10%来自暴击的伤害<br><br>唯一被动—寒铁：被普通攻击击中时，减少攻击者15%的攻击速度（持续时间：1秒）。<br>唯一主动：减缓周围敌人35%的移动速度，持续4秒（冷却时间：60秒）。'
        },
        132: {
            title: '<h4>钢铁烈阳之匣</h4><p>售价或合成费用：200</p>',
            desc: '+400生命值<br>+100%基础生命回复<br>+20魔法抗性<br>+10%冷却缩减<br><br>唯一主动：为你自身和周围的友军武装上护盾，持续2秒，吸收即将到来的75+15x英雄等级的伤害（冷却时间：60秒）。如果目标近期通过这种方式获得过护盾，那么新护盾的生命值减半。<br>唯一光环—军团：周围的友方英雄获得15魔法抗性。'
        },
        133: {
            title: '<h4>荆棘之甲</h4><p>售价或合成费用：1250</p>',
            desc: '+100护甲<br><br>唯一被动：被普通攻击命中时，会将你额外护甲值的25%加上15%的即将到来的伤害以魔法伤害的形式回敬给攻击者。<br><br>(额外护甲指的是来自装备、增益、符文和天赋的护甲。)<br>(回敬的伤害是基于被护甲减少前的伤害。)'
        },
        211: {
            title: '<h4>守护者号角</h4><p>售价或合成费用：950</p>',
            desc: '+150生命值<br><br>被动：每5秒回复20生命值。<br>唯一被动：格挡来自英雄的攻击和技能的12伤害(对抗持续伤害技能时的效果为25%)。<br><br>只能持有1个守护者系列的装备。'
        },
        212: {
            title: '<h4>速度之靴</h4><p>售价或合成费用：300</p>',
            desc: '限购数量：1。<br><br>唯一被动—强化移动：+25移动速度'
        },
        213: {
            title: '<h4>复用型药水</h4><p>售价或合成费用：150</p>',
            desc: '限持1种生命药水。<br><br>唯一主动：消耗一层充能，以在12秒里持续回复共125生命值。最多可持有2层充能，并且每当你造访商店时，都会将充能数填满。'
        },
        221: {
            title: '<h4>水银之靴</h4><p>售价或合成费用：350</p>',
            desc: '+25魔法抗性<br><br>唯一被动—强化移动：+45移动速度<br>唯一被动—韧性：受到的晕眩、减速、嘲讽、恐惧、沉默、致盲、变形和禁锢的持续时间减少30%。'
        },
        222: {
            title: '<h4>日炎斗篷</h4><p>售价或合成费用：1000</p>',
            desc: '+500生命值<br>+60护甲<br>-10%来自暴击的伤害<br><br>唯一被动—寒铁：被普通攻击击中时，减少攻击者15%的攻击速度（持续时间：1秒）。<br>唯一主动：减缓周围敌人35%的移动速度，持续4秒（冷却时间：60秒）。'
        },
        223: {
            title: '<h4>深渊权杖</h4><p>售价或合成费用：695</p>',
            desc: '+60法术强度<br>+60魔法抗性<br>+10%冷却缩减<br><br>唯一光环：使附近敌方英雄的魔法抗性降低10 - 25.'
        },
        231: {
            title: '<h4>瑞莱的冰晶节杖</h4><p>售价或合成费用：515</p>',
            desc: '+400生命值<br>+100法术强度<br><br>唯一被动：伤害型的法术和技能会施加一个基于法术类型的移速减损效果：<br><br>单体：40%移速减损，持续1.5秒。<br>群体： 40%移速减损，持续1秒。<br>持续伤害或者多段命中： 20%移速减损，持续1秒。<br>召唤出的仆从： 20%移速减损，持续1秒。<br><br>(如果一个技能可归在多个分类下，那么减速数值取最弱的那个。)'
        },
        232: {
            title: '<h4>兰德里的折磨</h4><p>售价或合成费用：750</p>',
            desc: '+80法术强度<br>+300生命值<br><br>唯一被动—痛苦之眼：+15<a>法术穿透</a><br>唯一被动：技能会灼烧目标3秒，每秒造成相当于目标2%当前生命值的魔法伤害。这个额外伤害会在对抗<a>移动受损</a>的单位时翻倍。'
        },
        233: {
            title: '<h4>海克斯科技原型腰带-01</h4><p>售价或合成费用：650</p>',
            desc: '+300生命值<br>+60法术强度<br>+10%冷却缩减<br><br>唯一主动—火焰弹：向前冲刺并释放一圈火焰弹，造成75 - 150(+35%x法术强度) 魔法伤害 (冷却时间：40秒，与其它<font color="#9999FF"><a>海克斯科技</a></font>装备共享冷却时间）。<br><br>如果有多发火焰弹命中了相同的英雄或野怪，那么除第一发之外的每发火焰弹会造成20%伤害。<br><br>（这个冲刺效果无法穿越地形。）'
        },
        241: {
            title: '<h4>冰霜之心</h4><p>售价或合成费用：800</p>',
            desc: '+90护甲<br>+20%冷却缩减<br>+400法力值<br><br>唯一光环：降低附近敌方单位15%的攻击速度。'
        },
        242: {
            title: '<h4>兰顿之兆</h4><p>售价或合成费用：900</p>',
            desc: '+500生命值<br>+60护甲<br>-10%来自暴击的伤害<br><br>唯一被动—寒铁：被普通攻击击中时，减少攻击者15%的攻击速度（持续时间：1秒）。<br>唯一主动：减缓周围敌人35%的移动速度，持续4秒（冷却时间：60秒）。'
        },
        243: {
            title: '<h4>钢铁烈阳之匣</h4><p>售价或合成费用：200</p>',
            desc: '+400生命值<br>+100%基础生命回复<br>+20魔法抗性<br>+10%冷却缩减<br><br>唯一主动：为你自身和周围的友军武装上护盾，持续2秒，吸收即将到来的75+15x英雄等级的伤害（冷却时间：60秒）。如果目标近期通过这种方式获得过护盾，那么新护盾的生命值减半。<br>唯一光环—军团：周围的友方英雄获得15魔法抗性。'
        }
    };//各设备信息
    //2.经过装备图片显示对应介绍,鼠标在图片内移动则介绍随着移动
    $(".equipment img").mouseenter(function (e) {
        //获取对应的alt
        var index = $(this).attr("alt");
        //添加对应内容
        var str = '<div class="equip-title">'
            + '<img src="images/equipsuit' + index + '.png" alt="">'
            + equipInfo[index].title
            + '</div>'
            + '<div class="equip-desc">'
            + equipInfo[index].desc
            + '</div>';
        $("#equipItem").html(str);
        //显示对应介绍,并跟随移动
        $("#equipItem").show();
        $("#equipItem").css({"left": e.pageX, "top": e.pageY});
        $(this).mousemove(function (e) {
            $("#equipItem").css({"left": e.pageX, "top": e.pageY});
        });
    });
    //3.离开装备图片隐藏对应介绍,清除鼠标移动事件
    $(".equipment img").mouseleave(function () {
        $("#equipItem").hide();
        $(this).off("mousemove");
    });

    //七:信息中的点击登录效果
    $("#login").click(function () {
        console.log("ss");
        $("#loginApi").trigger("click");
    });

    //八:手风琴
    $(".hero li").each(function (index, element) {
        $(element).css("backgroundImage", 'url("images/hero' + (index + 1) + '.jpg")');
        if (index === 0) {
            $(element).css("top", "0px");
        } else {
            var top = (100 * index + 410) + "px";
            $(element).css("top", top);
        }
    });
    $(".hero li").mouseenter(function () {
        var current = $(this).index();
        $(".hero li").each(function (index, element) {
            if (current >= index) {
                $(element).stop().animate({"top": (100 * index)}, 500);
            } else {
                $(element).stop().animate({"top": (100 * index + 410)}, 500);
            }
        });
    });
});
