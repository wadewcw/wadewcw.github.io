$(function(){
	//手机号码验证
	var regPhone = /^1[34578]\d{9}$/;
	$('.mobilediv input').focus(function(){
			$('.mobilediv').addClass('focus')
	});
	$('.mobilediv input').blur(function(){
		if(regPhone.test( $('.mobile-val').val() ) ){
			$('.mobileoremail .true').show();
			$('.mobilediv').removeClass('focus').removeClass('red');
			$('.mobile-err b').hide();
		}
		if(regPhone.test( $('.mobile-val').val() ) == false ){
			$('.mobileoremail .true').hide();
			$('.mobile-err b').show();
			$('.mobilediv').removeClass('focus').addClass('red');			
		};		
	});
	$('.deletemobile').click(function(){
		$('.mobilediv input').val("")
	});
	//密码验证
	
	var reg1 = /\w+/;
	var reg2 = /\d[a-zA-Z]/;
	var reg3 = /\w{8,16}/;
	$('.pswdiv input').focus(function(){
		$('.pswdiv').addClass('focus');
		$('.psw-err b').show().html('6-16个字符，可用字母、数字、下划线');
	});
	$('.pswdiv input').keydown(function(){
		if( reg1.test( $('.psw-val').val() ) ){
			$('#lev1').addClass('safered')
		}else{
			$('#lev1').removeClass('safered')
		};
		if( reg2.test( $('.psw-val').val() ) ){
			$('#lev2').addClass('safered')
		}else{
			$('#lev2').removeClass('safered')
		};;
		if( reg3.test( $('.psw-val').val() ) ){
			$('#lev3').addClass('safered')
		}else{
			$('#lev3').removeClass('safered')
		}
	}).blur(function(){
			$('.safe').hide();
			$('.password .true').show();
			$('.pswdiv').removeClass('focus');
			$('.psw-err b').hide();
	});
	//验证码
	$('.codenum').html( createVerify() );
	$('.getcode').click(function(){
		$('.codenum').html( createVerify() );
	})
	function createVerify(){
		var v = '';
		for(var i=0; i<4; i++){
			v += parseInt( Math.random()*9 )
		}
		return v;
	};
	$('.codediv input').focus(function(){
		$('.codediv').addClass('focus');
	});
	$('.codediv input').blur(function(){
		if( $(this).val() == $('.codenum').html() ){
			$('.code .true').show();
			$('.code-err b').hide();
			$('.codediv').removeClass('focus').removeClass('red');
		}else{
			$('.code-err b').show();
			$('.code .true').hide();
			$('.codediv').addClass('red');
		}
	});
	//cookie
	function setCookie(cname,cvalue,expires){
		if(arguments.length == 2){
			document.cookie = cname+'='+cvalue;
		}else {
			//var date = new Date(Date.now() + expires*24*3600*1000);
			var date = new Date();
			date.setDate( date.getDate() + expires );
			var time = date.toGMTString();
			document.cookie = cname+'='+cvalue+';expires='+time;
		}
	};
	function getCookie(cname){
		//按照分隔符'; '将所有的cookie分割成数组
		var cookie = document.cookie;
		var cookieArr = cookie.split('; ');
		//遍历所有的cookie
		for(var i in cookieArr){
			var str = cookieArr[i];//"psw=123456"
			var item = str.split('='); // ['psw','123456']
			//判断当前cookie名和传入的cookie名是否一致
			if(item[0] === cname){
				return item[1];
			}
		}
		return null; // 没有找到返回null
	}
	$('.btn').click(function(){
		setCookie('username',$('.mobile-val').val(),10);
		setCookie('password',$('.psw-val').val(),10);
		//alert('用户名:'+ getCookie('username') + '密码:' + getCookie('password'));
		alert('注册成功!');
	});
	//密码显示隐藏
	$('.deletepsw').click(function(){
		if( $(this).hasClass('hide') ){
			$(this).removeClass('hide');
			$('.pswdiv input').attr('type','password');
		}else{
			$(this).addClass('hide');
			$('.pswdiv input').attr('type','text');		
		}
	})
})
