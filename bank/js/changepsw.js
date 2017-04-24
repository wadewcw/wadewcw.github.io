/**
 * Created by Administrator on 2017/4/21.
 */
//原密码
var $oldPsw = $('.old_psw')
var $oldTxt = $('.old_txt');
var $oldTit = $('.old_title');
var $oldInfo = $('.old_info');

$oldPsw.click(function(){
    $oldTxt.get(0).focus();
});
$oldPsw.one('click',function () {
    $oldTxt.get(0).focus();
    $oldInfo.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $oldTit.animate({
        top:'5%',
        opacity:'1'
    },600);
});

//新密码
var $newPsw = $('.new_psw');
var $newTxt = $('.new_txt');
var $newTit = $('.new_title');
var $newInfo = $('.new_info');
$newPsw.click(function(){
    $newTxt.get(0).focus();
});
$newPsw.one('click',function () {
    $newTxt.get(0).focus();
    $newInfo.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $newTit.animate({
        top:'5%',
        opacity:'1'
    },600);
});

//再次输入
var $newAgain = $('.new_again');
var $againTxt = $('.again_txt');
var $againTit = $('.again_title');
var $againInfo = $('.again_info');
$newAgain.click(function(){
    $againTxt.get(0).focus();
});
$newAgain.one('click',function () {
    $againTxt.get(0).focus();
    $againInfo.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $againTit.animate({
        top:'5%',
        opacity:'1'
    },600);
});

//输入有误
var $close = $('.close');
var $oldWrong = $('.old_wrong');
var $btn = $('.login');
var $img = $('.back');
$img.click(function () {
    //原密码校验
    if($oldTxt.val().length>7){
        $oldTxt.val('');
        $close.fadeIn();
        $oldWrong.fadeIn();
    }
    $close.click(function () {
        $close.fadeOut();
        $oldWrong.fadeOut();
    })
    $img.attr('src','../img/click.png');
})

$newAgain.bind('input propertychange',function () {
    if($againTxt.val() == $newTxt.val()){
        $img.attr('src','../img/input.png');
    }
});


