define(["jquery"],function($){
	function Pop(){

	}
	Pop.prototype = {
		constructor:Pop,
		init:function(){
			this.creatMask();
			this.creatEle();
		},
		creatMask:function(){
			var $div = $("<div></div>")
			$div.css({
				width :"100%",
				height : "100%",
				position :"fixed",
				zIndex :9000,
				background :"rgba(0,0,0,.5)",
				left:0,
				top:0
			})
			$("body").append($div);
			this.$mask = $div
		},
		creatEle:function(){
			var $div = $("<div></div>")
			$div.css({
				width:200,
				height:200,
				position :"absolute",
				zIndex:9999,
				left:"50%",
				top:"50%",
				lineHeight:"300px",
				textAlign:"center",
				fontSize:"20px",
				background:"#fff",
				marginLeft:-100,
				marginTop:350,
				fontWeight:"bold",
				background:" url(../images/timg.jpg) no-repeat -124px -49px"
			})
			$("body").append($div);
			this.$span = $div

			var $btn = $("<span>x</span>");
			$btn.css({
				position:"absolute",
				top:"-70%",
				right:"3%",
				width:30,
				height:30,
				color:"red",
				lineHight:30,
				fontSize:"18px",
				textAlign:"center",
				fontWeight:"bold"
			})
			this.$btn = $btn
			
			var _this = this;
			$btn.on("click",function(){
				_this.$span.remove();
				_this.$mask.remove();
			})
			this.useCookie();
		},
		useCookie:function(){
			if ($.cookie("shopping_cart")) {
				var html = "";
				var sum = 0;
				var acookie = JSON.parse($.cookie("shopping_cart"))
				acookie.forEach(function(name){
					$(name).each(function(index,item){
						sum += item.num * item.price

						
					})
				})
				
			this.$span.html("共消费"+sum+"元");
			this.$span.append(this.$btn);

			}

		}
	}

	return new Pop();


})
