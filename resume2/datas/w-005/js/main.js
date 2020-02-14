/*--------------------- 手機版判斷 ---------------------*/

function getMobileSet() {
    //判斷行動裝置
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|ipad|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    return isMobile;
}

/*--------------------- 取得網址參數 ---------------------*/

function getParams(){
    let getUrlString = location.href;
    let url = new URL(getUrlString);
    return url.searchParams.get('var')
}

/*--------------------- 圖片預載 ---------------------*/

function setImgLoading(fn, imgAry) {
    let loading = new TimelineMax({ repeat: -1 });
    let time = .05;

    //loaging animate
    loading
        .to($('.ani .a .i1'), time, { autoAlpha: 1 }, '-=.05').to($('.ani .a .i1'), time, { autoAlpha: .3 })
        .to($('.ani .b .i1'), time, { autoAlpha: 1 }, '-=.05').to($('.ani .b .i1'), time, { autoAlpha: .3 })
        .to($('.ani .c .i1'), time, { autoAlpha: 1 }, '-=.05').to($('.ani .c .i1'), time, { autoAlpha: .3 })
        .to($('.ani .d .i1'), time, { autoAlpha: 1 }, '-=.05').to($('.ani .d .i1'), time, { autoAlpha: .3 })
        .to($('.ani .a .i2'), time, { autoAlpha: 1 }, '-=.05').to($('.ani .a .i2'), time, { autoAlpha: .3 })
        .to($('.ani .b .i2'), time, { autoAlpha: 1 }, '-=.05').to($('.ani .b .i2'), time, { autoAlpha: .3 })
        .to($('.ani .c .i2'), time, { autoAlpha: 1 }, '-=.05').to($('.ani .c .i2'), time, { autoAlpha: .3 })
        .to($('.ani .d .i2'), time, { autoAlpha: 1 }, '-=.05').to($('.ani .d .i2'), time, { autoAlpha: .3 })

    //加入背景圖片
    let imgs = imgAry;

    //所有圖片
    for (let i = 0; i < $('img').length; i++) {
        let imgUrl = $('img').eq(i).attr('src');
        imgs.push(imgUrl);
    }

    let count = { total: imgs.length, num: 0 };
    for (let i = 0; i < imgs.length; i++) {
        let imgUrl = imgs[i];
        let img = new Image();
        img.src = imgUrl;
        img.onload = function () {
            count.num += 1;
        }
    }

    let loadImgProgress = setInterval(function () {
        let percent = Math.floor(count.num / (count.total / 100));
        //console.log(percent)

        $('.preload .txt .text').html('LOADING: ' + percent + '%');
        $('.preload .txt .bg').animate({'width':percent +'%'},500);
        
        if (percent >= 95) {
            $('.preload .txt .text').html('LOADING: 100%');
            $('.preload .txt .bg').animate({'width':'100%'},500);
            clearInterval(loadImgProgress);
            $('.preload').fadeOut('fast');
            fn();
        }
    }, '500');
}

//如果有使用背景圖將背景圖加入預載列表
setImgLoading(init, [
    'images/psw/psw-bg@2x.jpg', 
    'images/psw/psw-bg-blur@2x.jpg',
    'images/main/bg/bg-center.jpg',
    'images/main/kv/hero-background.gif',
    'images/main/arrow/arrow-1-l.png',
    'images/main/arrow/arrow-1-l-hover.png',
    'images/main/arrow/arrow-1-r.png',
    'images/main/arrow/arrow-1-r-hover.png',
    'images/main/arrow/arrow-2-l.png',
    'images/main/arrow/arrow-2-l-hover.png',
    'images/main/arrow/arrow-2-r.png',
    'images/main/arrow/arrow-2-r-hover.png',
    'images/main/arrow/arrow-3-l.png',
    'images/main/arrow/arrow-3-l-hover.png',
    'images/main/arrow/arrow-3-r.png',
    'images/main/arrow/arrow-3-r-hover.png',
    'images/main/arrow/arrow-4-l.png',
    'images/main/arrow/arrow-4-l-hover.png',
    'images/main/arrow/arrow-4-r.png',
    'images/main/arrow/arrow-4-r-hover.png',
    'images/main/arrow/arrow-5-l.png',
    'images/main/arrow/arrow-5-l-hover.png',
    'images/main/arrow/arrow-5-r.png',
    'images/main/arrow/arrow-5-r-hover.png',
    'images/main/arrow/arrow-6-l.png',
    'images/main/arrow/arrow-6-l-hover.png',
    'images/main/arrow/arrow-6-r.png',
    'images/main/arrow/arrow-6-r-hover.png',
    'images/main/arrow/arrow-7-l.png',
    'images/main/arrow/arrow-7-l-hover.png',
    'images/main/arrow/arrow-7-r.png',
    'images/main/arrow/arrow-7-r-hover.png',
    'images/main/arrow/arrow-8-l.png',
    'images/main/arrow/arrow-8-l-hover.png',
    'images/main/arrow/arrow-8-r.png',
    'images/main/arrow/arrow-8-r-hover.png',
    'images/main/arrow/arrow-9-l.png',
    'images/main/arrow/arrow-9-l-hover.png',
    'images/main/arrow/arrow-9-r.png',
    'images/main/arrow/arrow-9-r-hover.png',
    'images/main/arrow/arrow-10-l.png',
    'images/main/arrow/arrow-10-l-hover.png',
    'images/main/arrow/arrow-10-r.png',
    'images/main/arrow/arrow-10-r-hover.png',
    'images/main/arrow/arrow-11-l.png',
    'images/main/arrow/arrow-11-l-hover.png',
    'images/main/arrow/arrow-11-r.png',
    'images/main/arrow/arrow-11-r-hover.png',
    'images/main/arrow/arrow-12-l.png',
    'images/main/arrow/arrow-12-l-hover.png',
    'images/main/arrow/arrow-12-r.png',
    'images/main/arrow/arrow-12-r-hover.png',
    'images/main/arrow/arrow-13-l.png',
    'images/main/arrow/arrow-13-l-hover.png',
    'images/main/arrow/arrow-13-r.png',
    'images/main/arrow/arrow-13-r-hover.png',
    'images/main/hero/hero-box-bg.png'
]);

/*--------------------- password start---------------------*/

var correctArray = ['E', 'L', 'S', 'W', 'O', 'R', 'D'];
var inputArray = [];

function toInitHome() {

    //music
    var music = document.getElementById("music");
    $('.music-btn').on('click', function () {
        if ($('.music-btn').hasClass('off')) {
            $('.music-btn').removeClass('off').addClass('on').html('關閉音效 <i class="fa fa-volume-off"></i>');
            music.play();
        } else {
            $('.music-btn').removeClass('on').addClass('off').html('打開音效 <i class="fa fa-volume-up"></i>');
            music.pause();
        }
    });

    //played
    var x = window.localStorage.getItem("isPlayed");
    var isMobile = getMobileSet();
    //console.log('xxxxxxxxx', x);

    let testMode = getParams();
    if(!testMode){
        if (x == 1 || isMobile) {
            $('#psw').hide();
            $('#home').show();
            setMainSlick();
            setRandonSlider();
            home();
        } else {
            $('#psw').show();
            $('#home').hide();
            
        }
    }

    onNumClick();
}

function onNumClick() {

    //設置鍵盤碼 a=[65~90] 0-9 =[48~57]
    var key = [
        { num: 69, txt: 'E' }, { num: 76, txt: 'L' }, { num: 83, txt: 'S' },
        { num: 87, txt: 'W' }, { num: 79, txt: 'O' }, { num: 82, txt: 'R' },
        { num: 68, txt: 'D' }, { num: 81, txt: 'Q' }, { num: 90, txt: 'Z' }
    ]

    $('.numButton li').on('click', function (e) {
        let key = $(this).attr('data');
        toCheckPsd(key);
    });

    $('body').on('keydown', function (e) {
        var kd_down = e.keyCode;
        var sendKd_down;
        for (i = 0; i < key.length; i++) {
            if (kd_down == key[i].num) {
                sendKd_down = key[i].txt
            }
        }
        $('.btn-' + sendKd_down + ' img').css('opacity', '0.5');
    });

    $('body').on('keyup', function (e) {
        var kd = e.keyCode;
        var sendKd;
        for (i = 0; i < key.length; i++) {
            if (kd == key[i].num) {
                sendKd = key[i].txt
            }
        }
        $('.numButton li img').css('opacity', '1');
        toCheckPsd(sendKd);
    });

}

//驗證密碼
function toCheckPsd(_id) {

    inputArray.push(_id)
    var checklength = inputArray.length - 1;
    var b = correctArray.slice(checklength, checklength + 1);
    var inputNum = _id;
    if (inputNum == b) {
        //console.log('ok');
        TweenMax.from($('.display-' + checklength), 0.4, { scale: 2, ease: Back.easeOut.config(1.7) });
        TweenMax.to($('.display-' + checklength), 0.2, { autoAlpha: 1 });

    } else {
        inputArray.splice(checklength, 1);
        //錯誤動畫效果
        TweenMax.to($('.displayBox'), 0.1, {
            x: -15,
            yoyo: true,
            repeat: 3,
            ease: Back.easeInOut
        });
    }
    if (inputArray.length == correctArray.length) {
        window.localStorage.setItem("isPlayed", "1");

        //密碼正確轉場動畫效果
        let changSection = new TimelineMax({ delay: .5 });
        let shakePsdCont = new TimelineMax({ repeat:-1});
        let shakeBg = new TimelineMax({delay:1.3,paused:false, repeat:-1});

        //密碼框震動
        shakePsdCont
            .to($('#section-psw .psdCont'), .07, { y: -2, yoyo: true })
            .to($('#section-psw .psdCont'), .07, { y: 2, yoyo: true })
            .to($('#section-psw .psdCont'), .07, { x: -2, yoyo: true })
            .to($('#section-psw .psdCont'), .07, { x: 2, yoyo: true })
            .to($('#section-psw .psdCont'), .05, { scale: .98, yoyo: true })
            .to($('#section-psw .psdCont'), .05, { scale: 1, yoyo: true })

        //背景震動
        shakeBg
            .to($('#section-psw-bg .box-blur'), .07, { y: -2, yoyo: true , repeat:-1})
            .to($('#section-psw-bg .box-blur'), .07, { y: 3, yoyo: true , repeat:-1})
            .to($('#section-psw-bg .box-blur'), .07, { x: -2, yoyo: true , repeat:-1 })
            .to($('#section-psw-bg .box-blur'), .07, { x: 3, yoyo: true , repeat:-1})
            .to($('#section-psw-bg .box-blur'), .07, { y: -3, yoyo: true , repeat:-1})
            .to($('#section-psw-bg .box-blur'), .07, { y: 4, yoyo: true , repeat:-1})
            .to($('#section-psw-bg .box-blur'), .07, { x: -3, yoyo: true , repeat:-1})
            .to($('#section-psw-bg .box-blur'), .07, { x: 4, yoyo: true , repeat:-1})


        //背景衝刺 ZOOM IN
        changSection
            .to($('#section-psw .psdCont'), .1, { scale: 1.2 })
            .to($('#section-psw .psdCont'), .2, { x: 10, y: 10, scale: 1 })
            .to($('#section-psw'), .5, { autoAlpha: 0 }, '-=.1')
            .to($('#section-psw-bg .box'), .1, { delay:1.5,autoAlpha: 0 },'-=.4')
            .to($('#section-psw-bg .box-blur'), .6, { x: '-5%', y: '-10%', scale: 3, ease: Power4.easeIn }, '-=.2')
            .to($('#section-psw-bg .box-blur'), .6, { autoAlpha: 0, ease: Power4.easeIn }, '-=.6')

        $('body').off('keyup');

        /*
        setTimeout(function () {
            shakeBg.play();
        },'1600');
        */
        
        setTimeout(function () {
            $('#psw').fadeOut(1000, function () {
                home();
                setMainSlick();
                setRandonSlider();
            });
        }, '2000')
    }
}

/*--------------------- init ---------------------*/

function init() {

    //密碼畫面進場
    let initAni = new TimelineMax()
    initAni
        .from($('#section-psw-bg .box'), 1.5, { y: 10, scale: 1.1, autoAlpha: 0, delay: .1 })
        .from($('#section-psw .psdCont'), 1, { y: 10, autoAlpha: 0 }, '-=1');
    toInitHome();

}


/*--------------------- 輪播設定 ---------------------*/

function setMainSlick() {
    $('.main .slider-box').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        speed: 500,
        autoPlaySpeed: 4000,
        pauseOnHover: false,
    });

    $('.randonSlider .slider-box').slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        fade: false,
        speed: 300,
        autoPlaySpeed: 3000,
        pauseOnHover: false,
    });

    $('.heroSlider .slider-box-wrap').slick({
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: false,
        speed: 500,
        autoPlaySpeed: 5000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            }
        ]
    });
}


/*--------------------- 隨機 輪播設定 ---------------------*/

function setRandonSlider() {
    //取得隨機碼 arr 
    let str = '';
    let arr = [];
    let isMobile = getMobileSet();
    if(!isMobile){
        for (let i = 0; i < 10; i++) {
            str = Math.round(Math.random() * 10);
            for (j = 0; j < arr.length; j++) {
                if (arr[j] == str) {
                    arr.splice(j, 1);
                    i--;
                }
            }
            arr.push(str);
        };
        let count = 0;
        let interval = setInterval(function () {
            if (count < arr.length) {
                //console.log(arr[count])
                //do
                $('.randonSlider .slider-box').eq(arr[count]).slick('slickNext');
                count++;
            } else {
                clearInterval(interval);
                setTimeout(function () {
                    //console.log('-------------------');
                    setRandonSlider();
                }, 3000);
            }
        }, 100);
    }else{
        arr = [0,1,2,3,4,5,6,7,8,9];
        let count = 0;
        let interval = setInterval(function () {
            if (count < arr.length) {
                //console.log(arr[count])
                //do
                $('.randonSlider .slider-box').eq(arr[count]).slick('slickNext');
                count++;
            } else {
                clearInterval(interval);
                setTimeout(function () {
                    //console.log('-------------------');
                    setRandonSlider();
                }, 3000);
            }
        }, 0);
    }
    
}

/*--------------------- home ---------------------*/

function home() {
    scrollspy();
    $('header').show();
    $('#topBar').show();
    $('#home').fadeIn('fast');

    let isMobile = getMobileSet();
    if(isMobile){
        $('body').addClass('mobile');
        $('.app').addClass('mobile');
    }else{
        $('body').removeClass('mobile');
        $('.app').removeClass('mobile');
        //kv ani
        let homeInit = new TimelineMax({ delay: .7 });
        homeInit
            .from($('#main .title > img'), .6, { scale: 3, autoAlpha: 0, ease: Bounce.easeOut })
            .from($('#main .title > .main-btn'), 1, { autoAlpha: 0 }, '-=.3')

        //kv btn
        let btnLight = new TimelineMax({ yoyo: true, repeat: -1 });
        btnLight
            .from($('.main-btn .light'), 1.5, { autoAlpha: 0 })
    } 
}

function scrollspy(){
    let isMobile = getMobileSet();
    $(window).on('scroll',function(){
        if(!isMobile){
            var scrollTop = $(this).scrollTop();
            if(scrollTop >= 40){
                $('header').css('top',0);
            }else{
                $('header').css('top','40px');
            }
        }
    })
}