$(function () {
    
    var isMobile = false; //initiate as false
    function is_iPad() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/iPad/i) == "ipad") {
            return true;
        } else {
            return false;
        }
    }

    //scrollEnd
    var rtime;
	var timeout = false;
	var delta = 3000;
	$(window).bind('scroll',function(){
        $('.notice-arrow').fadeOut('500');
		rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(scrollend, delta);
	    }
	});

	function scrollend(){
		if (new Date() - rtime < delta) {
	        setTimeout(scrollend, delta);
	    } else {
            timeout = false;
            setTimeout(scrollend, delta);
            $('.notice-arrow').fadeIn('slow');
	    }          
	}

    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    
    //圖片預載
    function setImgData(){
        var imgs = [];
        //加入背景圖片
        imgs.push('images/s1-bg-1.jpg','images/s1-bg-m-1.jpg','images/s2-main-bg.png','images/s3-bg-1.jpg','images/s1-bg-m-1.jpg','images/fire.gif','images/fire-m-2.gif')
        //所有圖片
        for(i=0;i<$('img').length;i++){
            var imgUrl  = $('img').eq(i).attr('src');
            imgs.push(imgUrl);
        }
        return imgs;
    }
    var imgs = setImgData();
    var count = {total:imgs.length,num:0};

    function loagimg(){
        for(i=0;i<imgs.length;i++){
            var imgUrl  = imgs[i];
            var img     = new Image();
            img.src     = imgUrl;
            img.onload  = function(){
                count.num+=1;
            }
        }
        var loadImgProgress = setInterval(function(){
            var percent = Math.floor(count.num/(count.total/100));
            //console.log(percent);
            $('.preload .txt').html('LOADING:'+percent+'%');
            if (percent >= 95){
                $('.preload .txt').html('LOADING:100%');
                clearInterval(loadImgProgress);
                $('.preload').fadeOut('fast');
                init();
            }
        },'500');
    }
    loagimg();

    function init() {
        if (!isMobile) {
            //video-bg
            $('.videobg').vidbacking();

            //滾動視差背景
            
            $('#section-1').parallax({
                imageSrc: './images/s1-bg-1.jpg',
                naturalWidth:100
            });
            $('#section-3').parallax({
                imageSrc: './images/s3-bg-1.jpg',
                naturalWidth:100
            });

            //動態時間軸
            var section1 = new TimelineMax();
            var section2 = new TimelineMax({ delay: .4, paused: true });
            var section3 = new TimelineMax({ delay: .4, paused: true });
            var section4 = new TimelineMax({ delay: .4, paused: true });


            //楓潮趴動態
            section1
                .from($('#section-1 .top-box .title'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut })
                .from($('#section-1 .top-box .bot-icon'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-1 .bot-box .title'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-1 .text-1'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-1 .photo-m'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-1 .text-2'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-1 .community'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-1 .right-box'), .5, { x: '50px', y: '60px', opacity: 0, scale: 1.1, ease: Circ.easeOut }, '-=.3')

            //開拓者動態
            section2
                .from($('#section-2 .game-logo'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut })
                .from($('#section-2 .title'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-2 .icon-wrap'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-2 .btn'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-2 .btn > .btn-bg'), 1, {width:'0%',ease: Circ.easeOut},'-=.3')
                .from($('#section-2 .right-box'), .5, { x: '50px', y: '60px', opacity: 0, scale: 1.1, ease: Circ.easeOut }, '-=.3')

            //14th動態
            section3
                .from($('#section-3 .logo-14-txt'), .5, { y: '50', opacity: 0, ease: Circ.easeOut })
                .from($('#section-3 .logo-14-left'), .5, { y: '50', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-3 .logo-14-right'), .5, { y: '50', opacity: 0, ease: Circ.easeOut }, '-=.5')
                .from($('#section-3 .logo-14-top'), .5, { y: '-100px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-3 .logo-14-bot'), .5, { y: '100px', opacity: 0, ease: Circ.easeOut }, '-=.5')
                .from($('#section-3 .logo-14-th'), .5, { y: '50', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-3 .btn'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-3 .btn > .btn-bg'), 1, {width:'0%',ease: Circ.easeOut},'-=.3')
                .from($('#section-3 .title'), .5, { y: '60px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-3 .text'), .5, { y: '60px', opacity: 0, ease: Circ.easeOut }, '-=.3')

            //極限燃燒動態
            section4
                .from($('#section-4 .title-1'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut })
                .from($('#section-4 .title-2'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-4 .text'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-4 .btn'), .5, { y: '50px', opacity: 0, ease: Circ.easeOut }, '-=.3')
                .from($('#section-4 .btn > .btn-bg'), 1, {width:'0%',ease: Circ.easeOut},'-=.3')
                //.from($('.videobg'), .5, { opacity: 0 }, '-=.5');

            /*
            var _scrollTop = $(this).scrollTop();
            var _sec1 = $('#section-1').offset().top - 300;
            var _sec2 = $('#section-2').offset().top - 300;
            var _sec3 = $('#section-3').offset().top - 300;
            var _sec4 = $('#section-4').offset().top - 300;

            if (_scrollTop >= _sec1 && _scrollTop < _sec2) {
                $('html, body').animate({ scrollTop: (_sec1 + 250) + 'px' }, 50, 'easeOutCirc');
                $('html, body').animate({ scrollTop: (_sec1 + 301) + 'px' }, 400, 'easeOutCirc');
            }
            if (_scrollTop >= _sec2 && _scrollTop < _sec3) {
                $('html, body').animate({ scrollTop: (_sec2 + 250) + 'px' }, 50, 'easeOutCirc');
                $('html, body').animate({ scrollTop: (_sec2 + 301) + 'px' }, 400, 'easeOutCirc');
            }
            if (_scrollTop >= _sec3 && _scrollTop < _sec4) {
                $('html, body').animate({ scrollTop: (_sec3 + 250) + 'px' }, 50, 'easeOutCirc');
                $('html, body').animate({ scrollTop: (_sec3 + 301) + 'px' }, 400, 'easeOutCirc');
            }
            if (_scrollTop >= _sec4) {
                $('html, body').animate({ scrollTop: (_sec4 + 250) + 'px' }, 50, 'easeOutCirc');
                $('html, body').animate({ scrollTop: (_sec4 + 301) + 'px' }, 400, 'easeOutCirc');
            }
            */

            var hash = window.location.hash.substring(1);
            var _sec1 = $('#section-1').offset().top - 300;
            var _sec2 = $('#section-2').offset().top - 300;
            var _sec3 = $('#section-3').offset().top - 300;
            var _sec4 = $('#section-4').offset().top - 300;
            if(hash == 'section-1'){
                $('html, body').animate({ scrollTop: (_sec1 + 301) + 'px' }, 400, 'easeOutCirc');
                section1.play();
            }
            if(hash == 'section-2'){
                $('html, body').animate({ scrollTop: (_sec2 + 301) + 'px' }, 400, 'easeOutCirc');
                section2.play();
            }
            if(hash == 'section-3'){
                $('html, body').animate({ scrollTop: (_sec3 + 301) + 'px' }, 400, 'easeOutCirc');
                section3.play();
            }
            if(hash == 'section-4'){
                $('html, body').animate({ scrollTop: (_sec4 + 301) + 'px' }, 400, 'easeOutCirc');
                section4.play();
            }

            //捲動導航
            $(window).bind('load scroll', function () {                
                var sec1 = $('#section-1').offset().top - 300;
                var sec2 = $('#section-2').offset().top - 300;
                var sec3 = $('#section-3').offset().top - 300;
                var sec4 = $('#section-4').offset().top - 300;

                var scrollTop = $(this).scrollTop();

                if (scrollTop >= sec1 && scrollTop < sec2) {
                    $(".menu li").removeClass('active');
                    $(".menu .m1").addClass('active');
                    section1.play();
                }
                if (scrollTop >= sec2 && scrollTop < sec3) {
                    $(".menu li").removeClass('active');
                    $(".menu .m2").addClass('active');
                    section2.play();
                }
                if (scrollTop >= sec3 && scrollTop < sec4) {
                    $(".menu li").removeClass('active');
                    $(".menu .m3").addClass('active');
                    section3.play();
                }
                if (scrollTop >= sec4) {
                    $(".menu li").removeClass('active');
                    $(".menu .m4").addClass('active');
                    section4.play();
                }

                var last = $("body").height() - $(window).height() - 90;
                var posi = last - scrollTop;
                if (scrollTop >= last) {
                    $('.videobg').css({ bottom: (-posi + 'px') });
                } else {
                    $('.videobg').css({ bottom: '0' });
                }
            });
        } else {
            if (is_iPad) {
                $('#section-1 .bot-box').addClass('ipad');
                $('#section-3 ').addClass('ipad');
                $('#section-4 ').addClass('ipad');
                $('.videobg').hide();
            }
            //捲動導航
            $(window).bind('load scroll', function () {

                $(".menu li").removeClass('active');
                var sec1 = $('#section-1').offset().top - 300;
                var sec2 = $('#section-2').offset().top - 300;
                var sec3 = $('#section-3').offset().top - 300;
                var sec4 = $('#section-4').offset().top - 300;

                var scrollTop = $(this).scrollTop();

                if (scrollTop >= sec1 && scrollTop < sec2) {
                    $(".menu li").removeClass('active');
                    $(".menu .m1").addClass('active');
                }
                if (scrollTop >= sec2 && scrollTop < sec3) {
                    $(".menu li").removeClass('active');
                    $(".menu .m2").addClass('active');
                }
                if (scrollTop >= sec3 && scrollTop < sec4) {
                    $(".menu li").removeClass('active');
                    $(".menu .m3").addClass('active');
                }
                if (scrollTop >= sec4) {
                    $(".menu li").removeClass('active');
                    $(".menu .m4").addClass('active');
                }
            });
        }

        function scrollTosec() {
            $('.menu li a[href^="#"]').click(function (e) {
                e.preventDefault();
                var target = $(this).attr('href'),
                    stop = $(target).offset().top + 1,
                    delay = 400;
                $('html, body').animate({ scrollTop: stop + 'px' }, delay, 'easeOutCirc');
            });
        }
        scrollTosec();

        //menu
        $('.menu_btn').on('click', function () {
            $('.menu').fadeIn('slow', function () {
                $('.menu').removeClass('hide').addClass('open');
            });
        });
        $('.close_btn').on('click', function () {
            $('.menu').fadeOut('slow', function () {
                $('.menu').removeClass('open').addClass('hide');
            });
        });

        /*
        $('.menu li a').on('click', function () {
            $('.menu li').removeClass('active');
            if ($('.menu').hasClass('open')) {
                $(this).parent().addClass('active');
                $('.menu').fadeOut('slow', function () {
                    $('.menu').removeClass('open').addClass('hide');
                });
            }
        });
        */
    }
});