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

			this.cancel();
			this.headfoot();
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
			.parent().css({
        		border:"1px solid #ccc"
			})

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
		}
	}

	return new Mini();
})