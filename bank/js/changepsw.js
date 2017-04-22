/**
 * Created by Administrator on 2017/4/21.
 */
//原密码

var $oldTxt = $('.old_txt');
var $oldTit = $('.old_title');
var $oldInfo = $('.old_info');
$oldTxt.one('focus',function () {
    $oldInfo.show().animate({
        top:'0.5px'
    }).fadeOut('fast');
    $oldTit.fadeIn(1500);
});

//新密码
var $newTxt = $('.new_txt');
var $newTit = $('.new_title');
var $newInfo = $('.new_info');
$newTxt.one('focus',function () {
    $newInfo.show().animate({
        top:'0.5px'
    }).fadeOut('fast');
    $newTit.fadeIn(1500);
});

//再次输入
var $againTxt = $('.again_txt');
var $againTit = $('.again_title');
var $againInfo = $('.again_info');
$againTxt.one('focus',function () {
    $againInfo.show().animate({
        top:'0.5px'
    }).fadeOut('fast');
    $againTit.fadeIn(1500);
});

//输入有误
var $close = $('.close');
var $oldWrong = $('.old_wrong');
var $btn = $('.login');

$btn.click(function () {
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
    //新密码旧密码不一致
    if($newTxt.val() != $againTxt.val() ){
        alert('22')
    }
})