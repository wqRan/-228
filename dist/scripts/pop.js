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
				background:"#fff",
				marginLeft:-100,
				marginTop:-100
			})
			$("body").append($div);

			var $btn = $("<span>x</span>");
			$btn.css({
				position:"absolute",
				top:"5%",
				right:"5%",
				width:30,
				height:30,
				color:"red",
				lineHight:30,
				background:"blue",
				textAlign:"center",
				fontWeight:"bold"
			})
			$div.append($btn);
			var _this = this;
			$btn.on("click",function(){
				$div.remove();
				_this.$mask.remove();
			})

		}

	}

	return new Pop();


})
