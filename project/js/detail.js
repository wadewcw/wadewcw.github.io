$(function() {
	$('#head').load('head.html', function() {
		//我的好乐买
		$('.mine').hover(function() {
			$(this).addClass('hover');
			$('.mine .arr').addClass('hover');
			$('.mine-hide').show();
		}, function() {
			$(this).removeClass('hover');
			$('.mine .arr').removeClass('hover');
			$('.mine-hide').hide();
		});
		//手机好乐买
		$('.mobile').hover(function() {
			$(this).addClass('hover');
			$('.mobile .arr').addClass('hover');
			$('.mobile-hide').show();
		}, function() {
			$(this).removeClass('hover');
			$('.mobile .arr').removeClass('hover');
			$('.mobile-hide').hide();
		});
		//关注好乐买
		$('.focus').hover(function() {
			$(this).addClass('hover');
			$('.focus .arr').addClass('hover');
			$('.focus-hide').show();
		}, function() {
			$(this).removeClass('hover');
			$('.focus .arr').removeClass('hover');
			$('.focus-hide').hide();
		});
		//客户服务
		$('.client').hover(function() {
			$(this).addClass('hover');
			$('.client .arr').addClass('hover');
			$('.client-hide').show();
		}, function() {
			$(this).removeClass('hover');
			$('.client .arr').removeClass('hover');
			$('.client-hide').hide();
		});
		//公告
		$('.notice').hover(function() {
			$(this).addClass('hover');
			$('.notice .arr').addClass('hover');
			$('.notice-hide').show();
		}, function() {
			$(this).removeClass('hover');
			$('.notice .arr').removeClass('hover');
			$('.notice-hide').hide();
		});
	});
	$('#head2').load('head2.html', function() {
		$('.search input').focus(function() {
			$(this).val('')
		}).blur(function() {
			$(this).val('Nike童鞋')
		})
	})
	$('#nav2').load('nav.html', function() {
		//导航特效
		$('.sports').hover(function() {
			$('.navsub').show()
		}, function() {
			$('.navsub').hide()
		});
		$('.outdoor').hover(function() {
			$('.navsub2').show()
		}, function() {
			$('.navsub2').hide()
		});
		$('.shoes').hover(function() {
			$('.navsub3').show()
		}, function() {
			$('.navsub3').hide()
		});
		$('.child').hover(function() {
			$('.navsub4').show()
		}, function() {
			$('.navsub4').hide()
		});
		$('.global').hover(function() {
			$('.navsub5').show()
		}, function() {
			$('.navsub5').hide()
		});
		//list选中加边框
		$('#list').find('a').hover(function() {
			$(this).css({
				borderColor: '#c33'
			})
		}, function() {
			$(this).css({
				borderColor: '#e7e7e7'
			})
		});
		$('#list2').find('a').hover(function() {
			$(this).css({
				borderColor: '#c33'
			})
		}, function() {
			$(this).css({
				borderColor: '#e7e7e7'
			})
		});
	})
	$('#foot').load('footer.html');
	var detail = {
		init: function() {
			this.main = $('.proinfo');
			this.sizeCon = this.main.find('.sizenum');
			//数量
			this.amountInput = this.main.find('.number');
			//增加数量按钮
			this.amountInc = this.main.find('.minus');
			//减少数量按钮
			this.amountDec = this.main.find('.add');
			//库存
			this.stock = this.main.find('.stock');
			this.data = {};
			//方法调用
			this.initData();
		},
		initData: function() {
			//通过attr方法获取元素的属性
			var gid = $('.colorImg').find('a.hover').attr('data-gid');
			var that = this;
			//getJSON(url,fn)
			$.getJSON('js/detail.json', function(result) {
				//console.log(result);
				that.data = result[gid];

				//点击尺寸事件
				that.sizeClick();
				//增加
				that.increase();
				//减少
				that.decrease();
				//直接输入
				that.input();

				//加入购物车
				that.addCart();
			});
		},
		//尺寸选择
		sizeClick: function() {
			$('.sizenum a').click(function() {
				$(this).addClass('hover').siblings().removeClass('hover');
			})
		},
		//数量增加点击
		increase: function() {
			var that = this;
			$('.add').click(function() {
				var amount = parseInt(that.amountInput.val());
				var stock = that.stock.html();
				//判断是否超出库存
				if (amount >= stock) {
					return;
				}
				//数量++
				amount++;
				that.amountInput.val(amount);
			});
		},
		decrease: function() {
			var that = this;
			$('.minus').click(function() {
				var amount = parseInt(that.amountInput.val());
				//判断是否越界
				if (amount <= 1) {
					return;
				}
				//数量--
				amount--;
				that.amountInput.val(amount);
			});
		},
		//直接输入
		input: function() {
			var that = this;
			$('.number').on('input', function() {
				var amount = that.amountInput.val();
				//如果是空，不做处理
				if (amount == '') {
					return;
				}
				amount = parseInt(amount);
				var stock = that.stock.html();
				//判断是不是NaN或者是不是0
				if (isNaN(amount) || amount == 0) {
					$(this).val(1);
					return;
				}
				//判断是否越界 
				if (amount >= stock) {
					that.amountInput.val(stock);
					return;
				}
				that.amountInput.val(amount);
			});
			//失去焦点判断是不是空 =》 1
			$('.number').blur(function() {
				var amount = that.amountInput.val();
				//如果是空，不做处理
				if (amount == '') {
					that.amountInput.val(1);
				}
			});
		},
		//加入购物车
		addCart: function() {
			var that = this;
			//【加入购物车】按钮点击
			$('.prodcart').click(function() {
				//data() 获取以data-开的自定义属性的值
				var gid = $('.colorImg').find('a.hover').attr('data-gid');
				//sizeId
				var sizeId = that.sizeCon.find('.hover span').attr('data-size');
				var amount = parseInt(that.amountInput.val());
				//cookie在哪？ $.cookie()
				var cart = $.cookie('tb_cart') || '{}';
				cart = JSON.parse(cart);
				//判断购物车是否已经存在当前商品
				if (!cart[sizeId]) {
					cart[sizeId] = {
						"goods-id": gid,
						"size-id": sizeId,
						"amount": amount
					};
				} else {
					cart[sizeId].amount += amount;
				}
				//重新写到cookie中
				$.cookie('tb_cart', JSON.stringify(cart), {
					expires: 365,
					path: '/'
				});
				console.log(JSON.parse($.cookie('tb_cart')));
				alert('添加成功');
			})
		}
	};
	detail.init();

	//滤镜和大图显示隐藏
	$('.wrap').mouseenter(function() {
		$('.filter').show();
		$('.big').show();
	}).mouseleave(function() {
		$('.filter').hide();
		$('.big').hide();
	});
	//滤镜和大图移动
	$('.wrap').mousemove(function(e) {
		var l = e.pageX-20;
		var t = e.pageY-150;
		//处理left和top，做边缘处理（防止越界）
		l = l < 200 ? 200 : (l > 450) ? 450 : l;
		t = t < 200 ? 200 : (t > 450) ? 450 : t;
		$('.filter').css({
			left: l - 200,
			top: t - 200
		});
		$('.bigImg').css({
			left: -2 * (l - 200),
			top: -2 * (t - 200)
		})
	});
	

	//商品颜色类型切换
	$('.colorImg a').click(function() {
		$(this).addClass('hover');
		$(this).siblings().removeClass('hover');
		$('.pDetail .wrap img').attr('src', $(this).find('img').attr('src'));
		$('.bigImg').attr('src', $(this).find('img').attr('src'));
	});
	//小图切换
	$('.othimg li').hover(function() {
		$(this).find('.othBor').addClass('hover');
		$(this).siblings().find('.othBor').removeClass('hover');
		$('.pDetail .wrap img').attr('src',$(this).find('img').attr('src'));
		$('.bigImg').attr('src', $(this).find('img').attr('src'));
	});

	//选项卡
	$('.pro-item').hover(function() {
			$(this).find('a').addClass('select');
			$(this).siblings().find('a').removeClass('select');
		}, function() {
			$(this).find('a').removeClass('select');
		})
		//选项卡置顶
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 800) {
			$('.protab').css({
				position: 'fixed',
				top: 0
			});
			$('.procart').show();
		};
		if ($(window).scrollTop() < 800) {
			$('.protab').css({
				position: 'relative'
			});
			$('.procart').hide();
		}
	});
})