//手机号
var $phone  =$('.phone');
var $phoneTit = $('.phone_title');
var $phonePla = $('.phone_place');
var $phoneTxt = $('.phone_txt');
$phone.click(function(){
	$phoneTxt.get(0).focus();
});
$phone.one('click',function () {
    $phoneTxt.get(0).focus();
    $phonePla.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $phoneTit.animate({
        top:'5%',
        opacity:'1'
    },600);
});

//验证码
var $code = $('.code');
var $codeTit = $('.code_title');
var $codePla = $('.code_place');
var $codeTxt = $('.code_txt');
var $codeLeft = $('.left');
$codeLeft.click(function(){
	$codeTxt.get(0).focus();
});
$codeLeft.one('click',function () {
    $codeTxt.get(0).focus();
    $codePla.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $codeTit.animate({
        top:'-7%',
        opacity:'1'
    },600);
});
//密码
var $password = $('.password');
var $passTit = $('.password_title');
var $passPla = $('.password_place');
var $passTxt = $('.password_txt');
$password.click(function(){
	$passTxt.get(0).focus();
});
$password.one('click',function () {
    $passTxt.get(0).focus();
    $passPla.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $passTit.animate({
        top:'5%',
        opacity:'1'
    },600);
});
//再次输入密码
var $pswAgain = $('.psw_again');
var $pswTit = $('.again_title');
var $pswPla = $('.again_place');
var $pswTxt = $('.again_txt');
var $login = $('.login');
var $img = $('.back');
var $codeImg =$('.code_img');
$pswAgain.click(function(){
	$pswTxt.get(0).focus();
});
$pswAgain.one('click',function () {
    $pswTxt.get(0).focus();
    $pswPla.animate({
        top:'0.3rem',
        opacity:'0'
    },600);
    $pswTit.animate({
        top:'5%',
        opacity:'1'
    },600);
});

$phone.bind('input propertychange',function (){
	if($phoneTxt.val().length == 11){
		$codeImg.attr('src','../img/code.png');
		$('.getcode').click(function(){
			$codeImg.attr('src','../img/codedown.png');	
		})	
	}
})


$pswAgain.bind('input propertychange',function () {
    if($pswTxt.val() == $passTxt.val()){
        $img.attr('src','../img/input.png');
    }
});

$img.click(function () {
    $img.attr('src','../img/click.png');
})