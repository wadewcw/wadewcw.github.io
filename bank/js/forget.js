//手机号
var $phone  =$('.phone');
var $phoneTit = $('.phone_title');
var $phonePla = $('.phone_place');
var $phoneTxt = $('.phone_txt');
$phone.touchstart(function(){
	$phoneTxt.get(0).focus();
});
$phone.one('touchstart',function () {
    $phoneTxt.get(0).focus();
    $phonePla.show().animate({
        top:'0.1rem'
    }).fadeOut();
    $phoneTit.fadeIn(1500);
});

//验证码
var $code = $('.code');
var $codeTit = $('.code_title');
var $codePla = $('.code_place');
var $codeTxt = $('.code_txt');
$code.touchstart(function(){
	$codeTxt.get(0).focus();
});
$code.one('touchstart',function () {
    $codeTxt.get(0).focus();
    $codePla.show().animate({
        top:'0.1rem'
    }).fadeOut();
    $codeTit.fadeIn(1500);
});
//密码
var $password = $('.password');
var $passTit = $('.password_title');
var $passPla = $('.password_place');
var $passTxt = $('.password_txt');
$password.touchstart(function(){
	$passTxt.get(0).focus();
});
$password.one('touchstart',function () {
    $passTxt.get(0).focus();
    $passPla.show().animate({
        top:'0.1rem'
    }).fadeOut();
    $passTit.fadeIn(1500);
});
//再次输入密码
var $pswAgain = $('.psw_again');
var $pswTit = $('.again_title');
var $pswPla = $('.again_place');
var $pswTxt = $('.again_txt');
var $login = $('.login');
var $img = $('.back');
var $codeImg =$('.code_img');
$pswAgain.touchstart(function(){
	$pswTxt.get(0).focus();
});
$pswAgain.one('touchstart',function () {
    $pswTxt.get(0).focus();
    $pswPla.show().animate({
        top:'0.1rem'
    }).fadeOut();
    $pswTit.fadeIn(1500);
});

$phone.bind('input propertychange',function (){
	if($phoneTxt.val().length == 11){
		$codeImg.attr('src','../img/code.png');
		$('.getcode').touchstart(function(){
			$codeImg.attr('src','../img/codedown.png');	
		})	
	}
})


$pswAgain.bind('input propertychange',function () {
    if($pswTxt.val() == $passTxt.val()){
        $img.attr('src','../img/input.png');
    }
});

$login.click(function () {
    $img.attr('src','../img/click.png');
})