//  首页的零碎功能集合
define(["jquery"],function(){
	function Mini(){

	}
	Mini.prototype = {
		constructor:Mini,
		init:function(){
			this.arrow = $(".quick-arrow");
			this.arrow.on("mouseover",$.proxy(this.show,this))
			this.arrow.on("mouseout",$.proxy(this.hide,this))

			// 最底部热门推荐点击时隐藏的菜单显示
			$(".hot-recomd-i").on("click",$.proxy(this.meunshow,this))
			$(document).on("click",$.proxy(this.meunhide,this))

			this.cancel();
			this.headfoot();
			this.stair();

			$(window).on("scroll",$.proxy(this.scrolltop,this))
			$("#clsaaity").offset()
			this.$stairs = $(".stairs").children();

		},
		//点击按钮使top中部 消失
		cancel:function(){
			var $cancel_btn = $(".cancel");
			var $headMiddle = $("#headMiddle")
			$cancel_btn.on("click",function(){
				$headMiddle.css({
					display:"none"
				})
			})
		},
		// 鼠标滑过使积分商城出现
		show:function(){

			$(".undb").css({
				display:"block"
			})
			// .parent().css({
			// })		
		},
		// 鼠标移开使积分商城消失
		hide:function(){
			$(".undb").css({
				display:"none"
			})
			.parent().css({
        		border:"none"
			})
		},
		meunshow:function(){
			$(".hot-city").css({display:"block"})
			event.stopPropagation();
		},
		meunhide:function(){
			$(".hot-city").css({display:"none"})			
		},
		// 点击按钮使图片放大和缩小
		headfoot:function(){
			this.$pullc_btn = $(".pullc-btn");
			this.$h_f_img1 = $(".h_f_img1");
			this.$h_f_img2 = $(".h_f_img2");
			var _this = this;		
			setTimeout(function(){
				_this.$h_f_img2.css({
					display:"none"
				})
				_this.$h_f_img1.css({
					display:"block"
				})
				_this.$pullc_btn.removeClass("pullc-on");
				_this.$pullc_btn.addClass("pullc-off");
				// 由于延时器为异步操作，所以把每一步分开写，等延时器执行完后判断其类名
				_this.changClassOn();
				_this.changClassOff();
			},3000)			
			
		},
		// 为按钮添加类名 pullc-on
		changClassOn:function(){
			if (this.$pullc_btn.hasClass("pullc-off")) {
				var _this = this;
				$(".pullc-off").on("click",function(){
				_this.$h_f_img2.css({
					display:"block"
				})
				_this.$h_f_img1.css({
					display:"none"
				})
				_this.$pullc_btn.removeClass("pullc-off")
				_this.$pullc_btn.addClass("pullc-on")
				_this.changClassOff();
				})

			}

		},
		// 为按钮添加类名 pullc-off
		changClassOff:function(){
			if (this.$pullc_btn.hasClass("pullc-on")) {
				var _this = this;
				$(".pullc-on").on("click",function(){
				_this.$h_f_img2.css({
					display:"none"
				})
				_this.$h_f_img1.css({
					display:"block"
				})
				_this.$pullc_btn.removeClass("pullc-on")
				_this.$pullc_btn.addClass("pullc-off")
				_this.changClassOn();
				})
			}
		},
		scrolltop:function(){
			// 两种方法获取scrollTop值
			// this.scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
			this.scrollTop = $(document).scrollTop();
			// console.log(this.scrollTop);
			var _this = this;
			setTimeout(function(){
				if (_this.scrollTop > 450 ) {
					$(".float-navgation").css({
						display:"block"
					})
				}else{
					$(".float-navgation").css({
						display:"none"
					})
				}
				// if (_this.scrollTop > $("#clsaaity").offset().top ){
				// 	this.$stairs.eq(1).addClass("cur1")
				// }

			},500)
		},
		stair:function(){
			this.$stairs = $(".stairs").children();
			// console.log(this.$stairs.length)
			for(var i = 0 ; i < this.$stairs.length ; i++){
				this.$stairs[i].index = i;
				this.$stairs.eq(i).on("click",$.proxy(this.stairsChange,this))
			}


		},
		stairsChange:function(event){
			var evt = event || window.event;
			this.index = $(evt.delegateTarget).index();
			this.$stairs.eq(this.index).addClass("cur1")
			.siblings()
			.removeClass("cur1")
			.end()
			.find("a").css({color:"#fff"})
			.end()
			.siblings().find("a").css({color:"#000"})

		}

						
			
		
		


	}

	return new Mini();
})