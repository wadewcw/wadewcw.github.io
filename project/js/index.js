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
	//导航特效
	$('.sports').hover(function(){
		$('.navsub').show()
	},function(){
		$('.navsub').hide()
	});
	$('.outdoor').hover(function(){
		$('.navsub2').show()
	},function(){
		$('.navsub2').hide()
	});
	$('.shoes').hover(function(){
		$('.navsub3').show()
	},function(){
		$('.navsub3').hide()
	});
	$('.child').hover(function(){
		$('.navsub4').show()
	},function(){
		$('.navsub4').hide()
	});
	$('.global').hover(function(){
		$('.navsub5').show()
	},function(){
		$('.navsub5').hide()
	});
	//list选中加边框
	$('#list').find('a').hover(function(){
		$(this).css({
			borderColor:'#c33'
		})
	},function(){
		$(this).css({
			borderColor:'#e7e7e7'
		})
	});
	$('#list2').find('a').hover(function(){
		$(this).css({
			borderColor:'#c33'
		})
	},function(){
		$(this).css({
			borderColor:'#e7e7e7'
		})
	});
	//倒计时
	function countDown(time){
		//创建一个未来时间的时间戳
		var futureTime = Date.parse(time);
		showTime();
		
		setInterval(showTime,200);	
		function showTime(){
			//获取当前时间的时间戳
			var nowTime = Date.now();
			//距离未来的时间
			var diff = futureTime - nowTime;
			//天
			$('.day').find('i').html( parseInt( diff/1000/60/60/24) );
			//小时
			$('.hour').find('i').html( parseInt( diff/1000/60/60%24) );
			//分钟
			$('.minute').find('i').html( parseInt( diff/1000/60%60) );
			//秒
			$('.second').find('i').html( parseInt( diff/1000%60) );
			//毫秒
			$('.fsecond').find('i').html( parseInt((futureTime - nowTime)/100%10) );
		}
	}	
	countDown('2016/12/5 12:00:00');
	
	function countDown2(time){
		//创建一个未来时间的时间戳
		var futureTime2 = Date.parse(time);
		showTime2();
		
		setInterval(showTime2,200);	
		function showTime2(){
			//获取当前时间的时间戳
			var nowTime2 = Date.now();
			//距离未来的时间
			var diff2 = futureTime2 - nowTime2;
			//天
			$('.day1').find('i').html( parseInt( diff2/1000/60/60/24) );
			//小时
			$('.hour1').find('i').html( parseInt( diff2/1000/60/60%24) );
			//分钟
			$('.minute1').find('i').html( parseInt( diff2/1000/60%60) );
			//秒
			$('.second1').find('i').html( parseInt( diff2/1000%60) );
			//毫秒
			$('.fsecond1').find('i').html( parseInt((futureTime2 - nowTime2)/100%10) );
		}
	}	
	countDown2('2016/12/7 12:00:00');
	
	//回到顶部
	$(window).scroll(function(){
		var t = $('body').scrollTop();
		if(t>=1000){
			$('#gotop').fadeIn()
		}else{
			$('#gotop').fadeOut()
		}
		
	});
	$('#gotop').click(function(){
		$('body').scrollTop(0)
	})
		

})
