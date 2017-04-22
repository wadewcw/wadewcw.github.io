/**
 * Created by Administrator on 2017/4/18.
 */
/*$('input').one('focus',function () {
    $(this).prop("placeholder", "");
    $(this).prev().slideToggle();
});
$('.account_psw').bind('input propertychange',function () {
    if($('.account_psw').val().length>5){
        $('.login').addClass('current');
    }else if($('.account_psw').val().length<7){
        $('.login').removeClass('current');
    }
});
$('.login').mousedown(function () {
    $(this).css('background','#209ED8')
})*/

var $accountTxt = $('.account_txt');
var $accountPsw = $('.account_psw');
var $infoId = $('.info_id');
var $infoPsw = $('.info_psw');
var $titleId = $('.title_id');
var $titlePsw = $('.title_psw');
var $img = $('.back');
var $btn = $('.login');

$accountTxt.one('focus',function () {
    $infoId.show().animate({
        top:'0.1rem'
    }).fadeOut('fast');
    $titleId.fadeIn(1500);
});
$accountPsw.one('focus',function () {
    $infoPsw.show().animate({
        top:'0.1rem'
    }).fadeOut();
    $titlePsw.fadeIn(1500);
});


$accountPsw.bind('input propertychange',function () {
    if($accountPsw.val().length>5){
        $img.attr('src','../img/input.png');
    }else if($accountPsw.val().length<7){
        $img.attr('src','../img/noclick.png')
    }
});

$btn.click(function () {
    $img.attr('src','../img/click.png');
})


