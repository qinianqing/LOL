function loader() {
        var imgPath = "http://game.gtimg.cn/images/lol/act/a20160523taliyah/";
        var sourceArr=['section_01.jpg','section_02.jpg','section_03.jpg','section_04.jpg','section_05.jpg','section_06.jpg','defail.png','gift.png','hero.png','herobuy.png','line.png','rotate1.png','rotate2.png','rotate3.png','rotate4.png','skin.png','sp.png','story-video.png','taliya.png','text.png','title.png','title-sp.png','video-bg.png','video-sp.png','yasuo.png'];
        for (var i = 0; i < sourceArr.length; i++) {
           sourceArr[i] = (imgPath + sourceArr[i]);
        }
          var loadImage = function(path, callback){
            var img = new Image();
            img.onload = function(){
                img.onload = null;
                callback(path);
            };
            img.src = path;
        };
        var imgLoader = function(imgs, callback){
            var len = imgs.length, i = 0;
            while(imgs.length){
                loadImage(imgs.shift(), function(path){
                    callback(path, ++i, len);
                });
            }
        };
        imgLoader(sourceArr, function(path, curNum, total){
            var percent = curNum/total;
                 if(percent == 1){
                    
            }
        });
    }
function TGDialogS(e){
    need("biz.dialog-min",function(Dialog){
        Dialog.show({
            id:e,
            bgcolor:'#000',
            opacity:50
        });
     });
};
function closeDialog(){
    need("biz.dialog-min",function(Dialog){
        Dialog.hide();
    });
};
//ÊÓÆµ²¥·Å P Q W E R ½éÉÜ
var videoList=['c019899w67n','u0197xutjh5','h0197g6uc1c','i0197653v39','b0197xrg5ib','d00208nk9zc','n00208pej7n'];
function playVideo(vid,domId) {
    var video = new tvp.VideoInfo();
    video.setVid(vid);
    var player = new tvp.Player();
    player.create({
        width: '100%',
        height: '100%',
        video: video,
        modId: domId,
        vodFlashSkin: "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf",  
        autoplay: true,
        onallended: function() {
            player.pause();
            pgvSendClick({
                hottag: 'act.a20160523taliyah.video_'+vid
            });
        }
    });
};
function showVideo(vid){
    $('#videocon').html('<a href="javascript:playVideo(\''+videoList[0]+'\',\'videocon\');" title="µã»÷²¥·ÅÊÓÆµ"><i></i></a>');
    pgvSendClick({hottag: 'act.a20160523taliyah.video_'+vid});
    TGDialogS("video");
    playVideo(vid,'videos',1);
};
$('.story-a1').click(function() {
        showVideo(''+videoList[6]+'');
        pgvSendClick({
            hottag: 'act.a20160523taliyah.story_video'
        });
    });
$('.story-a2').click(function() {
        showVideo(''+videoList[5]+'');
        pgvSendClick({
            hottag: 'act.a20160523taliyah.skill_video'
        });
    });
$('.videobox a').click(function() {
        playVideo(''+videoList[0]+'',"videocon");
        $('.tips li').removeClass('cur');
        pgvSendClick({
            hottag: 'act.a20160523taliyah.video_a'
        });
    });
$('.skilltab li').click(function() {
        var _index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tips li').eq((_index)-1).addClass('cur').siblings().removeClass('cur');
        $('.skillvideo li').eq(_index).show().siblings().hide();
        if (_index==0) {
            $('.tips li').removeClass('cur');
        };
        playVideo(videoList[_index], "videocon");
        pgvSendClick({
            hottag: 'act.a20160523taliyah.video' + _index
        });
});
if ($('#section2')) {
    $(document).keydown(function(e){
        if(e.keyCode==81){
            $('.skilltab li').eq(1).addClass('active').siblings().removeClass('active');
            $('.tips li').eq(0).addClass('cur').siblings().removeClass('cur');
            $('.skillvideo li').eq(1).show().siblings().hide();
            playVideo(''+videoList[1]+'',"videocon");
            pgvSendClick({
                hottag: 'act.a20160523taliyah.video_q'
            });
        };
        if(e.keyCode==87){
            $('.skilltab li').eq(2).addClass('active').siblings().removeClass('active');
            $('.tips li').eq(1).addClass('cur').siblings().removeClass('cur');
            $('.skillvideo li').eq(2).show().siblings().hide();
            playVideo(''+videoList[2]+'',"videocon");
            pgvSendClick({
               hottag: 'act.a20160523taliyah.video_w'
            });
        };
        if(e.keyCode==69){
            $('.skilltab li').eq(3).addClass('active').siblings().removeClass('active');
            $('.tips li').eq(2).addClass('cur').siblings().removeClass('cur');
            $('.skillvideo li').eq(3).show().siblings().hide();
            playVideo(''+videoList[3]+'',"videocon");
            pgvSendClick({
                hottag: 'act.a20160523taliyah.video_e'
            });
        };
        if(e.keyCode==82){
            $('.skilltab li').eq(4).addClass('active').siblings().removeClass('active');
            $('.tips li').eq(3).addClass('cur').siblings().removeClass('cur');
            $('.skillvideo li').eq(4).show().siblings().hide();
            playVideo(''+videoList[4]+'',"videocon");
            pgvSendClick({
                hottag: 'act.a20160523taliyah.video_r'
            });
        }
    })
};
/* scroll */
jQuery.extend( jQuery.easing,
{
    def: 'easeInOutQuint',
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    }
});
var index = 0;
function gopart(num){
$('html, body').animate({
         scrollTop: $(".section"+num).offset().top
     }, 
     1000,'easeInOutQuint'
     );
}
function gotop() {
    $('body,html').animate({
        scrollTop: 42
    }, 
    1000,'easeInOutQuint');
}
$(window).scroll(function() {
    var st = $(document).scrollTop();
    if (st<=1024){
        index=0;
    }
    if (st >= 1024 && st < 2350) {
        index = 1;
    }
    if (st >= 2350 && st < 3866) {
        index = 2;
    }
    if (st >= 3866 && st < 4892) {
        index = 3;
    }
    if (st >= 4892 && st < 5927) {
        index = 4;
    }
    if (st >= 5927 && st < 6727) {
        index = 5;
    }
    if (st >= 6727 && st < 8027) {
        index = 6;
    }
    setCurr(index);
});
function setCurr(index) {
    $('.side a').removeClass();
    $('.side a:eq(' + index + ')').addClass('curr');
};
(function($) {        
    jQuery.fn.Fixed = function(options) {  
        var defaults = {
            x:0,  
            y:0  
        };  
        var o = jQuery.extend(defaults, options);  
        var isIe6 = !window.XMLHttpRequest;
        var html= $('html');  
        if (isIe6 && html.css('backgroundAttachment') !== 'fixed') { //·ÀÖ¹¶¶¶¯ 
            html.css('backgroundAttachment','fixed')
            .css('backgroundImage','url(about:blank)');
        };
        return this.each(function() {  
            var domThis=$(this)[0];  
            var objThis=$(this);  
            if(isIe6){
                objThis.css('position' , 'absolute');
                domThis.style.setExpression('right', 'eval((document.documentElement).scrollLeft + ' + o.x + ') + "px"');  
                domThis.style.setExpression('top', 'eval((document.documentElement).scrollTop + ' + o.y + ') + "px"'); 
            } else {  
                //objThis.css('position' , 'fixed').css('top',o.y).css('right',o.x);  
            }
        });  
    };        
})(jQuery)
$('.side').Fixed({x:20,y:400});
function scrolls(){
need("biz.scroll",function(s){
    s.init({
        conId:'rollbox',
        leftId:'m_right',
        rightId:'m_left',
        frameWidth:700,
        pageSpace:140,
        autoPlay:false,
        position:'left'
        //autoPlayTime:2,
        //dotListId:'do'
    });
    })
    var list=$('.rollbox_list').find('img');
        list.each(function(i){  
            list.eq(i).attr("src",list.eq(i).attr('rel'))
    })
};

function scrollex(){
        $('.section').scrollex({
                mode: 'middle',
                initialize: function() {
                    $(this).removeClass('inactive');
                },
                enter: function() {
                    $(this).addClass('inactive');
                },
                leave: function() {
                    $(this).removeClass('inactive');
                },
                scroll: function(progress) {
                        var $this = $(this),
                            $title = $this.find('.rotates'),
                            $title2 = $this.find('.rotates2'),
                            $title3 = $this.find('.urotates'),
                            $title4 = $this.find('.urotates2'),
                            x;
                           // rotate.
                            x =parseInt((progress-0.5) * 30);
                            //console.log(x)
                                $title
                                    .css('-moz-transform', 'rotate(' + x + 'deg)')
                                    .css('-webkit-transform', 'rotate(' + x + 'deg)')
                                    .css('-o-transform', 'rotate(' + x + 'deg)')
                                    .css('-ms-transform', 'rotate(' + x + 'deg)')
                                    .css('transform', 'rotate(' + x + 'deg)');
                                $title2
                                    .css('-moz-transform', 'rotate(' + x + 'deg)')
                                    .css('-webkit-transform', 'rotate(' + x + 'deg)')
                                    .css('-o-transform', 'rotate(' + x + 'deg)')
                                    .css('-ms-transform', 'rotate(' + x + 'deg)')
                                    .css('transform', 'rotate(' + x + 'deg)');

                               $title3
                                    .css('-moz-transform', 'rotate(' + -x + 'deg)')
                                    .css('-webkit-transform', 'rotate(' + -x + 'deg)')
                                    .css('-o-transform', 'rotate(' + -x + 'deg)')
                                    .css('-ms-transform', 'rotate(' + -x + 'deg)')
                                    .css('transform', 'rotate(' + -x + 'deg)');
                                $title4
                                    .css('-moz-transform', 'rotate(' + -x + 'deg)')
                                    .css('-webkit-transform', 'rotate(' + -x + 'deg)')
                                    .css('-o-transform', 'rotate(' + -x + 'deg)')
                                    .css('-ms-transform', 'rotate(' + -x + 'deg)')
                                    .css('transform', 'rotate(' + -x + 'deg)');

                 }
        });

};
milo.ready(function() {
    scrolls();scrollex()
    loadScript("http://ossweb-img.qq.com/images/lol/title/lol.js","");
    loadScript("http://pingjs.qq.com/ping_tcss_ied.js",function(){if(typeof(pgvMain) == 'function')pgvMain();});
});