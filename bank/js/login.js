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
var $account = $('.account');
var $accountTxt = $('.account_txt');
var $accountPsw = $('.account_psw');
var $infoId = $('.info_id');
var $infoPsw = $('.info_psw');
var $titleId = $('.title_id');
var $titlePsw = $('.title_psw');
var $img = $('.back');
var $btn = $('.login');
var $password = $('.password');
$account.click(function () {
    $accountTxt.get(0).focus();
});
$account.one('click',function () {
    $accountTxt.get(0).focus();
    $infoId.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $titleId.animate({
        top:'5%',
        opacity:'1'
    },600);
});
$password.click(function () {
    $accountPsw.get(0).focus();
});
$password.one('click',function () {
    $infoPsw.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $titlePsw.animate({
        top:'5%',
        opacity:'1'
    },600);
});


$accountPsw.bind('input propertychange',function () {
    if($accountPsw.val().length>5){
        $img.attr('src','../img/input.png');
    }else if($accountPsw.val().length<7){
        $img.attr('src','../img/noclick.png')
    }
});

$img.click(function () {
    $img.attr('src','../img/click.png');
})


