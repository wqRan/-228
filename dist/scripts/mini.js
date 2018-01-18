//  首页的零碎功能集合
define(["jquery"],function(){
	function Mini(){

	}
	Mini.prototype = {
		constructor:Mini,
		init:function(){
			this.cancel();
			this.headfoot();
		},
		//点击按钮使top中部 消失
		cancel:function(){
			var $cancel_btn = $(".cancel");
			var $headMiddle = $("#headMiddle")
			console.log($cancel_btn)
			$cancel_btn.on("click",function(){
				$headMiddle.css({
					display:"none"
				})
			})
		},
		// 点击按钮使图片放大和缩小
		headfoot:function(){
			var $pullc_btn = $(".pullc-btn");	
			var $h_f_img1 = $(".h_f_img1");
			var $h_f_img2 = $(".h_f_img2");
			setTimeout(function(){
				$h_f_img2.css({
					display:"none"
				})
				$h_f_img1.css({
					display:"block"
				})
				$pullc_btn.removeClass("pullc-on")
				$pullc_btn.addClass("pullc-off")
			},3000)
			console.log($(".pullc-off"))			
			$(".pullc-off").on("click",function(){
				$h_f_img2.css({
					display:"block"
				})				
			})
			$pullc_btn.removeClass("pullc-off")
			$pullc_btn.addClass("pullc-on")


		}
	}

	return new Mini();
})