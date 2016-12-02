$(function(){
	//我的好乐买
	$('.mine').hover(function(){
		$(this).addClass('hover');
		$('.mine .arr').addClass('hover');
		$('.mine-hide').show();
	},function(){
		$(this).removeClass('hover');
		$('.mine .arr').removeClass('hover');
		$('.mine-hide').hide();
	});
	//手机好乐买
	$('.mobile').hover(function(){
		$(this).addClass('hover');
		$('.mobile .arr').addClass('hover');
		$('.mobile-hide').show();
	},function(){
		$(this).removeClass('hover');
		$('.mobile .arr').removeClass('hover');
		$('.mobile-hide').hide();
	});
	//关注好乐买
	$('.focus').hover(function(){
		$(this).addClass('hover');
		$('.focus .arr').addClass('hover');
		$('.focus-hide').show();
	},function(){
		$(this).removeClass('hover');
		$('.focus .arr').removeClass('hover');
		$('.focus-hide').hide();
	});
	//客户服务
	$('.client').hover(function(){
		$(this).addClass('hover');
		$('.client .arr').addClass('hover');
		$('.client-hide').show();
	},function(){
		$(this).removeClass('hover');
		$('.client .arr').removeClass('hover');
		$('.client-hide').hide();
	});
	//公告
	$('.notice').hover(function(){
		$(this).addClass('hover');
		$('.notice .arr').addClass('hover');
		$('.notice-hide').show();
	},function(){
		$(this).removeClass('hover');
		$('.notice .arr').removeClass('hover');
		$('.notice-hide').hide();
	});
	//搜索框失焦获焦
	$('.search input').focus(function(){
		$(this).val('')
	}).blur(function(){
		$(this).val('Nike童鞋')
	})
	//banner轮播
	var banner = {
		main: $('#banner'),
		imgWrap: $('#banner .img-wrap'),
		imgs: $('#banner .img-wrap img'),
		arrow:$('.arrow'),
		circleItem:$('.circle-item'),
		now: 0,
		next: 0,
		timer: null,
		init:function(){
			this.imgs.eq(0).show();
			this.autoPlay();
			this.mousemove();
			this.click();
			this.circle();
		},
		autoPlay:function(){
			var that = this;
			this.timer = setInterval(function(){
				that.next++;
				that.imgSwitch();
			},2000);
		},
		//变换图片
		imgSwitch:function(){
			var that = this;
			if(that.next >= that.imgs.length){
				that.next = 0;
			}
			that.imgs.eq(that.now).fadeOut();			
			that.imgs.eq(that.next).fadeIn();
			that.circleItem.eq(that.next).addClass('active');
			that.circleItem.eq(that.next).siblings().removeClass('active');
			that.now = that.next;
		},
		//鼠标移入移出
		mousemove:function(){
			var that = this;
			this.main.mouseenter(function(){
				that.arrow.show();
				clearInterval(that.timer);
			});
			this.main.mouseleave(function(){
				that.arrow.hide();
				that.autoPlay();
			})
		},
		//左右点击
		click:function(){
			var that = this;
			$('.arrow-left').click(function(){
				that.next --;
				if(that.next <= 0){
					that.next = that.imgs.length - 1;
				}
				that.imgSwitch();
			});
			$('.arrow-right').click(function(){
				that.next ++;
				that.next %= that.imgs.length;
				that.imgSwitch();
			})
		},
		circle:function(){
			var that = this;
			that.circleItem.click(function(e){
				that.next = $(e.target).index();
				that.imgSwitch();
			})
		}	
	};
	banner.init();
	
	//图片运动
	$('.left').hover(function(){
		$(this).find('img').animate({
			top: -10
		},200)
	},function(){
		$(this).find('img').animate({
			top:0
		},100)
	});
	$('.center').hover(function(){
		$(this).find('img').animate({
			top: -10
		},200)
	},function(){
		$(this).find('img').animate({
			top:0
		},100)
	});
	$('.right').hover(function(){
		$(this).find('img').animate({
			top: -10
		},200)
	},function(){
		$(this).find('img').animate({
			top:0
		},100)
	});
})
