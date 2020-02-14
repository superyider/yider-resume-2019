$(document).ready(function () {
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

    if(isMobile){
        $('#web').hide();
        $('#mobile .laymovbtn1').click();
        $('#mobile').show();
        player.stopVideo();
        
    }else{
        $('.btn_mov .btn1').click();
        $('#mobile').hide();
        $('#web').show();
    }

    $(window).bind('load resize', function () {
        var winW = $(window).width(), winH = $(window).height();
        if (winW < 1541) {
            $('body').addClass('w1280');

            setTimeout(function () {
                $('.lnb').addClass('lnb_hide');
                TweenMax.to($('.lnb'), 0.5, { left: "-120px" });
                $('.header h1').fadeIn();
            }, 1500);
        } else {
            $('body').removeClass('w1280');
        }
    });

    $('.btn_lnb_close').click(function (e) {
        var lnbW = $('.lnb').width();
        $('.lnb').addClass('lnb_hide');
        TweenMax.to($('.lnb'), 0.5, { left: -lnbW });
        $('.header h1').fadeIn();
        e.preventDefault();
    });
    $('.btn_lnb_open').click(function (e) {
        $('.lnb').removeClass('lnb_hide');
        TweenMax.to($('.lnb'), 0.5, { left: 0 });
        $('.header h1').fadeOut();
        e.preventDefault();
    });

    // motion - intro
    var introTl = new TimelineMax(),
        bgTl = new TimelineMax({ repeat: -1 }),
        e1Tl = new TimelineMax({ paused: true }),
        e1_2Tl = new TimelineMax({ paused: true }),
        e2Tl = new TimelineMax({ paused: true }),
        e3Tl = new TimelineMax({ paused: true }),
        e4Tl = new TimelineMax({ paused: true }),
        e5Tl = new TimelineMax({ paused: true });

    TweenMax.fromTo($('.screen'), 1.1, { autoAlpha: 1, display: "block" }, { autoAlpha: 0, display: "none", ease: Sine.easeInOut });
    // intro
    introTl
        .from($('.warmhole'), 1.85, { rotation: -70, scale: 0.8, y: -30, ease: Sine.easeOut }, "-=0.4")
        .from($('.thunder1'), 2, { height: 0, width: 0, ease: Elastic.easeInOut.config(3, 0.35) }, "-=2.25")
        .from($('.thunder2'), 1.8, { height: 0, width: 0, ease: Elastic.easeInOut.config(8, 0.45) }, "-=2")
        .from($('.thunder3'), 1.5, { height: 0, width: 0, ease: Elastic.easeInOut.config(4, 0.15) }, "-=2")
        .from($('.cha5'), 1.6, { rotation: 360, scale: 0.3, y: -60, x: 50, ease: Sine.easeOut }, "-=1.9")
        .from($('.cha4'), 1.6, { rotation: 260, scale: 0.3, y: -60, x: 360, ease: Sine.easeOut }, "-=1.8")
        .from($('.cha6'), 1.8, { rotation: 120, scale: 0.3, y: -335, x: -380, ease: Sine.easeOut }, "-=1.9")
        .from($('.cha3'), 1.8, { rotation: 120, scale: 0.3, y: -140, x: -420, ease: Sine.easeOut }, "-=1.7")
        .from($('.cha2'), 1.6, { rotation: 10, scale: 0.4, y: -80, x: -120, ease: Circ.easeOut }, "-=2")
        .from($('.cha1'), 1.8, { rotation: -5, scale: 0.5, y: -90, x: 400, ease: Circ.easeOut }, "-=2")
        .from($('#section1 .t1'), 0.6, { opacity: 0, y: 2, ease: Sine.easeOut }, "-=1.2")
        .from($('#section1 .btn_mov'), 0.6, { opacity: 0, y: 2, ease: Sine.easeOut }, "-=1.05");
    
    // 故事背景
    bgTl
        .fromTo($('#section3 .bg1'), 1.5, { opacity: 1, scale: 1, ease: Sine.easeOut }, { opacity: 0, scale: 1.1, ease: Sine.easeOut }, "+=4")
        .fromTo($('#section3 .bg2'), 1.5, { opacity: 0, scale: 1.1, ease: Sine.easeOut }, { opacity: 1, scale: 1, ease: Sine.easeOut }, "-=1.5")
        .to($('#section3 .bg2'), 1.5, { opacity: 0, scale: 1.1, ease: Sine.easeOut }, "+=4")
        .to($('#section3 .bg1'), 1.5, { opacity: 1, scale: 1, ease: Sine.easeOut }, "-=1.5");

    // 活動
    e1Tl
        .from($('.event-1 .p1'), 0.8, { opacity: 0, x: 400, ease: Circ.easeOut })
        .from($('.event-1 .p2'), 0.8, { opacity: 0, x: -400, ease: Circ.easeOut }, "-=0.8")
        .from($('.event-1 .t1 img'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.22")
        .from($('.event-1 .video'), 0.8, { opacity: 0, y: 10, ease: Circ.easeOut });
    
    e1_2Tl
        .from($('.event-1 .p3'), 0.8, { opacity: 0, x: 400, ease: Circ.easeOut })
        .from($('.event-1 .p4'), 0.8, { opacity: 0, x: -400, ease: Circ.easeOut }, "-=0.8")
        .from($('.event-1 .t2 img'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.22")
        .from($('.event-1 .sub_t1'), 0.5, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.27")
        .from($('.event-1 .event_fb'), 0.5, { rotation: -70, scale: 0.8, y: -30, ease: Sine.easeOut }, "-=0.32")
        .from($('.event-1 .list_box'), 0.5, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.37")
        .from($('.event-1 .event_yt'), 0.5, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.42")
        .from($('.event-1 .sub_t2'), 0.5, { opacity: 0, y: 10, ease: Circ.easeOut })
        .from($('.event-1 .list_box_2'), 0.5, { opacity: 0, y: 10, ease: Circ.easeOut })
        .from($('.mission .p1'), 0.8, { opacity: 0, x: 400, ease: Circ.easeOut })
        .from($('.mission .p2'), 0.8, { opacity: 0, x: -400, ease: Circ.easeOut }, "-=0.8")
        .from($('.mission .t1 img'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.25")
        .from($('.mission .gifts'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut })
        .from($('.mission .comments'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.6")
        .from($('.mission .comments .c1'), 0.8, { rotation:15,opacity: 0, x: 400, ease: Circ.easeOut })
        .from($('.mission .comments .c2'), 0.8, { rotation:-15,opacity: 0, x: -400, ease: Circ.easeOut }, "-=0.8")
        .from($('.mission .sub_t1'), 0.5, { opacity: 0, ease: Circ.easeOut }, "-=0.5")
        .from($('.mission .txt_box'), 0.5, { opacity: 0, ease: Circ.easeOut }, "-=0.5")
        .from($('.mission .event_btn_wraps'), 0.5, { opacity: 0, ease: Circ.easeOut }, "-=0.5");

    e2Tl
        .from($('#section3 .p1'), 0.6, { opacity: 0, y: 200, ease: Circ.easeOut })
        .from($('#section3 .p2'), 0.6, { opacity: 0, y: -200, ease: Circ.easeOut }, "-=0.6")
        .from($('#section3 .line1'), 0.6, { opacity: 0, x: 200, ease: Circ.easeOut }, "-=0.6")
        .from($('#section3 .line2'), 0.6, { opacity: 0, x: -200, ease: Circ.easeOut }, "-=0.6")
        .from($('#section3 .t1'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.35")
        .from($('#section3 .t2'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.35");

    e3Tl
        .from($('#section4 .p1'), 0.8, { opacity: 0, x: 400, ease: Circ.easeOut })
        .from($('#section4 .p2'), 0.8, { opacity: 0, x: -400, ease: Circ.easeOut }, "-=0.8")
        .from($('#section4 .t1 img'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.25")
        .from($('#section4 .list'), 0.6, { opacity: 0, y: 15, ease: Circ.easeOut }, "-=0.45")
        .from($('#section4 .c_img'), 1.2, { y: 40, x: 20, ease: Circ.easeOut }, "-=0.6");

    e4Tl
        .from($('#section5 .p1'), 0.8, { opacity: 0, x: 400, ease: Circ.easeOut })
        .from($('#section5 .p2'), 0.8, { opacity: 0, x: -400, ease: Circ.easeOut }, "-=0.8")
        .from($('#section5 .t1 img'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.25")
        .from($('#section5 .kart1'), 0.6, { opacity: 0, y: 15, ease: Circ.easeOut }, "-=0.35")
        .from($('#section5 .kart2'), 0.6, { opacity: 0, y: 15, ease: Circ.easeOut }, "-=0.35");

    e5Tl
        .from($('#section6 .p1'), 0.8, { opacity: 0, x: 400, ease: Circ.easeOut })
        .from($('#section6 .p2'), 0.8, { opacity: 0, x: -400, ease: Circ.easeOut }, "-=0.8")
        .from($('#section6 .t1 img'), 0.6, { opacity: 0, y: 10, ease: Circ.easeOut }, "-=0.25")
        .from($('#section6 .track1'), 0.6, { opacity: 0, y: 15, ease: Circ.easeOut }, "-=0.35")
        .from($('#section6 .track2'), 0.6, { opacity: 0, y: 15, ease: Circ.easeOut }, "-=0.35")
        .from($('#section6 .t2'), 0.6, { opacity: 0, ease: Circ.easeOut }, "-=0.35")
        .from($('#section6 .t3'), 0.6, { opacity: 0, ease: Circ.easeOut }, "-=0.35");
    
    

    //스크롤 시
    $(window).bind('load scroll', function () {
        var sec1 = $('#section1').offset().top - 400,
            sec2 = $('#section2').offset().top - 400,
            sec3 = $('#section3').offset().top - 400,
            sec4 = $('#section4').offset().top - 400,
            sec5 = $('#section5').offset().top - 400,
            sec6 = $('#section6').offset().top - 400;

        if ($('#GNB_Wrapper').hasClass('gnbWrapperOpen')) {
            if ($(this).scrollTop() > 210) {
                $('#wrap').addClass('sticky');
            } else {
                $('#wrap').removeClass('sticky');
            }
        } else {
            if ($(this).scrollTop() > 50) {
                $('#wrap').addClass('sticky');
            } else {
                $('#wrap').removeClass('sticky');
            }
        }
        if ($(this).scrollTop() < sec1) {
            $(".quick li").removeClass('active');
        }
        if ($(this).scrollTop() >= sec1 && $(this).scrollTop() < sec2) {
            $(".quick li").removeClass('active');
            $(".quick .q1").addClass('active');
            if(!isMobile) e1Tl.reverse();
        }

        if ($(this).scrollTop() >= sec2 && $(this).scrollTop() < sec2 + 600) {
            if(!isMobile) e1_2Tl.reverse();
        }

        if ($(this).scrollTop() >= sec2 && $(this).scrollTop() < sec3) {
            $(".quick li").removeClass('active');
            $(".quick .q2").addClass('active');
            if(!isMobile) e2Tl.reverse();
        }
        if ($(this).scrollTop() >= sec3 && $(this).scrollTop() < sec4) {
            $(".quick li").removeClass('active');
            $(".quick .q3").addClass('active');
            if(!isMobile) e3Tl.reverse();
        }
        if ($(this).scrollTop() >= sec4 && $(this).scrollTop() < sec5) {
            $(".quick li").removeClass('active');
            $(".quick .q4").addClass('active');
            if(!isMobile) e4Tl.reverse();
        }
        if ($(this).scrollTop() >= sec5 && $(this).scrollTop() < sec6) {
            $(".quick li").removeClass('active');
            $(".quick .q5").addClass('active');
            if(!isMobile) e5Tl.reverse();
        }
        if ($(this).scrollTop() >= sec6) {
            $(".quick li").removeClass('active');
            $(".quick .q6").addClass('active');
        }
        if ($(this).scrollTop() >= sec2 - 100) {
            e1Tl.play();
        }
        if ($(this).scrollTop() >= sec2 + 600) {
            e1_2Tl.play();
        }
        if ($(this).scrollTop() >= sec3 - 100) {
            e2Tl.play();
        }
        if ($(this).scrollTop() >= sec4 - 100) {
            e3Tl.play();
        }
        if ($(this).scrollTop() >= sec5 - 100) {
            e4Tl.play();
        }
        if ($(this).scrollTop() >= sec6 - 100) {
            e5Tl.play();
        }
        if ($(this).scrollTop() < sec2 || $(this).scrollTop() > sec2 + 1000 ) {
            //player.mute();
            player.stopVideo();
        }else{
            if(!isMobile) player.playVideo();
            //player.unMute();
        }

    });

    if(isMobile){
        e1Tl.pause(100);
        e1_2Tl.pause(100);
        e2Tl.pause(100);
        e3Tl.pause(100);
        e4Tl.pause(100);
        e5Tl.pause(100);
    }

    //퀵메뉴
    function scrollTosec() {
        $('.quick li a[href^="#"]').click(function (e) {
            e.preventDefault();
            var target = $(this).attr('href'),
                stop = $(target).offset().top,
                delay = 400;
            $('html, body').animate({ scrollTop: stop + 'px' }, delay, 'easeInOutCirc');
        });
    }
    scrollTosec();


    //캐릭터 오버
    $('#section4 .list li').on("mouseenter", function () {
        var over = $(this).find('.over'),
            cha = $(this).find('.c_img');
        TweenMax.to(over, 0.5, { left: 0, ease: Circ.easeOut });
        TweenMax.to(cha, 0.5, { x: 10, ease: Circ.easeOut });
    }).on("mouseleave", function () {
        var cha = $(this).find('.c_img');
        TweenMax.to($('.list .over'), 0.5, { left: "100%", ease: Circ.easeOut });
        TweenMax.to(cha, 0.5, { x: -10, ease: Circ.easeOut });
    });
    $('#layerVideo .dim').on('click', function () {
        videoClose();
    });

});

function videoClose() {
    $('#layerVideo').fadeOut(350);
    $('#movPlayer').attr('src', '');

    var introTl = new TimelineMax();

    introTl
        .from($('.warmhole'), 1.85, { rotation: -70, scale: 0.8, y: -30, ease: Sine.easeOut }, "-=0.4")
        .from($('.thunder1'), 2, { height: 0, width: 0, ease: Elastic.easeInOut.config(3, 0.35) }, "-=2.25")
        .from($('.thunder2'), 1.8, { height: 0, width: 0, ease: Elastic.easeInOut.config(8, 0.45) }, "-=2")
        .from($('.thunder3'), 1.5, { height: 0, width: 0, ease: Elastic.easeInOut.config(4, 0.15) }, "-=2")
        .from($('.cha5'), 1.6, { rotation: 360, scale: 0.3, y: -60, x: 50, ease: Sine.easeOut }, "-=1.9")
        .from($('.cha4'), 1.6, { rotation: 260, scale: 0.3, y: -60, x: 360, ease: Sine.easeOut }, "-=1.8")
        .from($('.cha6'), 1.8, { rotation: 120, scale: 0.3, y: -335, x: -380, ease: Sine.easeOut }, "-=1.9")
        .from($('.cha3'), 1.8, { rotation: 120, scale: 0.3, y: -140, x: -420, ease: Sine.easeOut }, "-=1.7")
        .from($('.cha2'), 1.6, { rotation: 10, scale: 0.4, y: -80, x: -120, ease: Circ.easeOut }, "-=2")
        .from($('.cha1'), 1.9, { rotation: -10, scale: 0.2, y: -140, x: 400, ease: Circ.easeOut }, "-=2")
        .from($('#section1 .t1'), 0.6, { opacity: 0, y: 2, ease: Sine.easeOut }, "-=1.7")
        .from($('#section1 .btn_mov'), 0.6, { opacity: 0, y: 2, ease: Sine.easeOut }, "-=1.55");
}

//영상 보기
function videoPlay0() {
    player.playVideo();
}
function videoPlay1() {
    $('#movPlayer').attr('src', mvUrl1);
    popVideoOpen();
    $('#layerVideo button').removeClass('on');
    $('.btn_mov1').addClass('on');
}
function videoPlay2() {
    $('#movPlayer').attr('src', mvUrl2);
    popVideoOpen();
    $('#layerVideo button').removeClass('on');
    $('.btn_mov2').addClass('on');
}
function popVideoOpen() {
    $('#layerVideo').fadeIn(250);
    $("html, body").stop().animate({
        "scrollTop": $('#layerVideo').offset().top - 75
    }, 400);
}

/**
 * [modal-popup : 심플레이어팝업 열기]
 * @param  {[object]}
 */
function simpleLayerOpen(obj) {
    $obj = $('#' + obj);
    $obj.stop().fadeIn(300);
    $.fn.fullpage.setAllowScrolling(false);
}

/**
 * [modal-popup : 심플레이어팝업 닫기]
 * @param  {[object]}
 */
function simpleLayerClose(obj) {
    $obj = $('#' + obj);
    $obj.stop().fadeOut(300);
    $.fn.fullpage.setAllowScrolling(true);
}

//MOBILE

function resize(){
    var new_h = $(window).width()/20*9;
    $('.video_box').css('height',new_h);
}

$(window).resize(function(){
    resize();
});

resize();

function mvideoPlay1() {
    $('#mobile #movPlayer').attr('src', mvUrl1);
    mpopVideoOpen();
    $('.laymovbtn2').removeClass('active');
    $('.laymovbtn1').addClass('active');
}
function mvideoPlay2() {
    $('#mobile #movPlayer').attr('src', mvUrl2);
    mpopVideoOpen()
    $('.laymovbtn1').removeClass('active');
    $('.laymovbtn2').addClass('active');
}
function mpopVideoOpen() {
    $('#mobile #layerVideo').fadeIn(250);
    $("html, body").stop().animate({
        "scrollTop": $('#layerVideo').offset().top - 75
    }, 400);
}
function mvideoClose(){
    $('#mobile #layerVideo').fadeOut(350);
    $('#mobile #movPlayer').attr('src', '');
}

$('#mobile .mbtn_close').click(function(){
    mvideoClose();
});

$('#mobile .mov_btn_1').click(function(){
    mvideoPlay1();
});

$('#mobile .mov_btn_2').click(function(){
    mvideoPlay2();
});

$('#mobile .laymovbtn1').click(function(){
    mvideoPlay1();
});
$('#mobile .laymovbtn2').click(function(){
    mvideoPlay2();
});
$('#mobile .btn_menu').click(function(){
    if($("#mobile .quick").is(':visible')){
        $("#mobile .quick").fadeOut(200);
    }else{
        $("#mobile .quick").fadeIn(200);
    }
});

$('#mobile .quick li a').click(function (e) {
    $('#mobile .quick').fadeOut(200);
});
