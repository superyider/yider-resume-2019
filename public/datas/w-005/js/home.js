/**
 * Created by MarcoBC.Chen on 2016/4/14.
 */
function toInitHome() {

    var x = window.localStorage.getItem("isPlayed");
    console.log('xxxxxxxxx', x);
    if (x == 1) {
        $('.psdCont').css('display', 'none');
        $("#mainCon").trigger("SHOW_PAN");
        TweenMax.set($('.nav-black'), {autoAlpha: 1});
        TweenMax.killTweensOf($('.psdObj'));
    } else {
        $('.numButton').css('display', 'block');
        TweenMax.to($('.psdObj'), 1, {
            autoAlpha: 0.7,
            yoyo: true,
            repeat: -1,
            ease: RoughEase.ease.config({
                template: Power2.easeInOut,
                strength: 2,
                points: 100,
                taper: "none",
                randomize: true,
                clamp: true
            })
        });
    }

    TweenMax.set($('.panTitleBox'), {autoAlpha: 0});
    TweenMax.set($('.displayBox li'), {autoAlpha: 0.2});

    onNumClick();
}

/*
function setPanBtn() {

    $('.btn-rule').on('click', {status: 'open'}, switchRule);
    $('.rule .btn-close').on('click', {status: 'close'}, switchRule);

    $('.btnForm').on('click', {status: 'open'}, switchFormPage);
    $('.formPage .btn-close').on('click', {status: 'close'}, switchFormPage);

    $('.panTitleBox').on('click', {status: 'open'}, switchcarLight);
    $('.carInfoLightBox .btn-close').on('click', {status: 'close'}, switchcarLight);

    for (var i = 0; i < 8; i++) {
        $('.btnCar' + i).on('click', {id: i}, function (e) {
            console.log(e.data.id);
            if (e.data.id == 0) {
                onNavClick(3);
                onSubNavClick(4);
            }
            if (e.data.id == 1) {
                onNavClick(3);
                onSubNavClick(0);
            }
            if (e.data.id == 2) {
                onNavClick(3);
                onSubNavClick(2);
            }
            if (e.data.id == 3) {
                onNavClick(3);
                onSubNavClick(1);
            }
            if (e.data.id == 4) {
                onNavClick(3);
                onSubNavClick(4);
            }
            if (e.data.id == 5) {
                onNavClick(3);
                onSubNavClick(0);
            }
            if (e.data.id == 6) {
                onNavClick(3);
                onSubNavClick(3);
            }
            if (e.data.id == 7) {
                onNavClick(3);
                onSubNavClick(1);
            }
        });

        $('.car' + i+'_B').on('click', {id: i}, function (e) {
            if (e.data.id == 0) {
                onNavClick(3);
                onSubNavClick(4);
                trackEvent('cars', '_gla360');
            }
            if (e.data.id == 1) {
                onNavClick(3);
                onSubNavClick(0);
                trackEvent('cars', '_a360');
            }
            if (e.data.id == 2) {
                onNavClick(3);
                onSubNavClick(2);
                trackEvent('cars', '_cla360');
            }
            if (e.data.id == 3) {
                onNavClick(3);
                onSubNavClick(1);
                trackEvent('cars', '_b360');
            }
            if (e.data.id == 4) {
                onNavClick(3);
                onSubNavClick(4);
                trackEvent('cars', '_gla360');
            }
            if (e.data.id == 5) {
                onNavClick(3);
                onSubNavClick(0);
                trackEvent('cars', '_a360');
            }
            if (e.data.id == 6) {
                onNavClick(3);
                onSubNavClick(3);
                trackEvent('cars', '_clasb360');
            }
            if (e.data.id == 7) {
                onNavClick(3);
                onSubNavClick(1);
                trackEvent('cars', '_b360');
            }
        });
    }
}
*/

function onNumClick() {
    for (var i = 0; i < 9; i++) {
        $('.numButton .btn' + i).on('click', {id: i}, function (e) {

            toCheckPsd(e.data.id);
        });
        $('.numButton .btn' + i).on('mouseenter', {id: i}, function (e) {
            $('.btn' + e.data.id).css('opacity', '0.5');
        });
        $('.numButton .btn' + i).on('mouseleave', {id: i}, function (e) {
            $('.btn' + e.data.id).css('opacity', '1');
        });
    }

    $('body').on('keydown', function (e) {
        var kd_down = e.keyCode;
        var sendKd_down;
        if (kd_down == 97 || kd_down == 49) {
            sendKd_down = 0
        }
        if (kd_down == 98 || kd_down == 50) {
            sendKd_down = 1
        }
        if (kd_down == 99 || kd_down == 51) {
            sendKd_down = 2
        }
        if (kd_down == 100 || kd_down == 52) {
            sendKd_down = 3
        }
        if (kd_down == 101 || kd_down == 53) {
            sendKd_down = 4
        }
        if (kd_down == 102 || kd_down == 54) {
            sendKd_down = 5
        }
        if (kd_down == 103 || kd_down == 55) {
            sendKd_down = 6
        }
        if (kd_down == 104 || kd_down == 56) {
            sendKd_down = 7
        }
        if (kd_down == 105 || kd_down == 57) {
            sendKd_down = 8
        }

        $('.btn' + sendKd_down).css('opacity', '0.5');
    });
    $('body').on('keyup', function (e) {
        //console.log(e.keyCode);
        var kd = e.keyCode;
        var sendKd;
        if (kd == 97 || kd == 49) {
            sendKd = 0
        }
        if (kd == 98 || kd == 50) {
            sendKd = 1
        }
        if (kd == 99 || kd == 51) {
            sendKd = 2
        }
        if (kd == 100 || kd == 52) {
            sendKd = 3
        }
        if (kd == 101 || kd == 53) {
            sendKd = 4
        }
        if (kd == 102 || kd == 54) {
            sendKd = 5
        }
        if (kd == 103 || kd == 55) {
            sendKd = 6
        }
        if (kd == 104 || kd == 56) {
            sendKd = 7
        }
        if (kd == 105 || kd == 57) {
            sendKd = 8
        }

        toCheckPsd(sendKd);
    });
}
var correctArray = ['E','L','S','W','O','R','D'];

//var correctArray = ['E','L','S','W','O','R','D'];

var inputArray = [];
function toCheckPsd(_id) {

    $('.btn' + _id).css('opacity', '1');
    var inputNum = _id + 1;
    inputArray.push(inputNum);

    var checklength = inputArray.length - 1;

    var a = inputArray.slice(checklength, checklength + 1);
    var b = correctArray.slice(checklength, checklength + 1);

    if (inputNum == b) {
        console.log('ok');
        //console.log('checklength:', checklength);
        TweenMax.to($('.displayNum' + checklength), 0.3, {autoAlpha: 1});

    } else {

        inputArray.splice(checklength, 1);
        //console.log('checklength:', checklength);

        TweenMax.to($('.displayBox ul'), 0.1, {
            x: -10,
            yoyo: true,
            repeat: 5,
            ease: Back.easeInOut
        });
    }
    //console.log(inputArray.slice(checklength, checklength + 1));

    if (inputArray.length == correctArray.length) {
        alert(12342342);
        /*

        trackEvent('home', '11688');
        window.localStorage.setItem("isPlayed", "1");
        inputArray.splice(0, 5);

        TweenMax.to($('.psdCont .bg'), 0.6, {scale: 10, autoAlpha: 1, delay: 0.5, ease: Power2.easeIn});
        TweenMax.to($('.psdCont .psdObj'), 0.3, {scale: 0, autoAlpha: 0, delay: 1, ease: Power2.easeIn});
        TweenMax.to($('.psdCont .psdObj'), 1, {scale: 1.1, delay: 0.2, ease: Power2.easeOut});
        TweenMax.to($('.psdCont .psdObj'), 0.1, {
            yoyo: true,
            repeat: 10,
            delay: 0.5,
            ease: RoughEase.ease.config({
                template: Power2.easeInOut,
                strength: 1,
                points: 20,
                taper: "none",
                randomize: true,
                clamp: false
            }),
            y: 5
        });


        TweenMax.to($('.psdCont'), 0.6, {
            delay: 1, onComplete: function () {
                $('.psdCont').css('display', 'none');
                $("#mainCon").trigger("SHOW_PAN");
            }
        });

        */

        $('body').off('keyup');
    }else{
        alert('nono');
    }
}

function switchRule(e) {
    if (e.data.status == 'open') {
        $('.rule').css('display', 'block');
        TweenMax.to($('.rule'), 0.5, {alpha: 1});

    } else {
        TweenMax.to($('.rule'), 0.5, {
            alpha: 0, onComplete: function () {
                $('.rule').css('display', 'none');
            }
        });
    }
}


function switchFormPage(e) {
    if (e.data.status == 'open') {
        $('.formPage').css('display', 'block');
        TweenMax.to($('.formPage'), 0.5, {alpha: 1});

    } else {
        TweenMax.to($('.formPage'), 0.5, {
            alpha: 0, onComplete: function () {
                $('.formPage').css('display', 'none');
            }
        });
    }
}

function switchcarLight(e) {

    trackEvent('_more', '');
    onNavClick(2);
}