$(function(){
	$('.user input').focus(function(){
		$('.user').addClass('focus')
	}).blur(function(){
		$('.user').removeClass('focus')
	});
	$('.pass input').focus(function(){
		$('.pass,.triangle').addClass('focus')
	}).blur(function(){
		$('.pass,.triangle').removeClass('focus')
	});
	$('.logbtn input').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	})
})
