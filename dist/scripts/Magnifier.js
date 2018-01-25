define(["jquery"],function($){

	function Magnifier(){
		this.init()
	}
	Magnifier.prototype = {
		constructor:Magnifier,
		init:function(){
			var $ = document.querySelectorAll.bind(document);
			this.Small = $(".small")[0];
			this.small_focus = $(".grayBox")[0];
			this.Big = $(".big")[0];
			this.big_Img = $(".big_img")[0];
			this.small_Img = $(".small_img")[0];
			this.Small.onmouseenter = this.show_hide.bind(this,"block");
			this.Small.onmouseout = this.show_hide.bind(this,"none");
			this.Small.onmousemove = this.move.bind(this);

			this.Small.onmousewheel = this.move_wheel.bind(this);
			this.Small.addEventListener("DOMMouseScroll",this.move_wheel.bind(this));
		},
		show_hide:function(status){
			this.Big.style.display = status;
			this.small_focus.style.display = status;
			if (status == "block") {
				this.small_Img.style.opacity = "0.3";
			}else {
				this.small_Img.style.opacity = "1";
			}

			//等比例放大 大框的宽 和 高
			this.propX = this.Small.offsetWidth / this.small_focus.offsetWidth;
			this.propY = this.Small.offsetHeight / this.small_focus.offsetHeight;
			this.big_Img.style.width = this.Small.offsetWidth * this.propX + "px";
			this.big_Img.style.height = this.Small.offsetHeight * this.propY +"px";
			
		},
		move:function(event){
			var e = event || window.event ;
			//鼠标移动位置
			this.offsetX = e.offsetX;  
			this.offsetY = e.offsetY;
			//小框的宽 + 高
			this.offsetW = this.small_focus.offsetWidth;
			this.offsetH = this.small_focus.offsetHeight;
			//移动框最大的宽 + 高
			this.maxWidth = this.Small.offsetWidth - this.offsetW;
			this.maxHeight = this.Small.offsetHeight - this.offsetH;
			//移动时鼠标在移动框的中心点
			var nLeft = this.offsetX - this.offsetW / 2;
			var nTop = this.offsetY - this.offsetH / 2;
			//边界检测 start
			nLeft = nLeft < 0 ? 0 : nLeft;
			nLeft = nLeft > this.maxWidth ? this.maxWidth - 5 : nLeft;
			nTop = nTop < 0 ? 0 : nTop;
			nTop = nTop > this.maxHeight ? this.maxHeight - 5 : nTop;
			//边界检测 over
			//移动框在小框中的位置
			this.small_focus.style.left = nLeft + "px";
			this.small_focus.style.top = nTop + "px";
			
			//移动框背景图片的位置
			this.small_focus.style.backgroundPosition = -nLeft + "px " + -nTop + "px" ;

			//大框图片移动位置
			var bigImgL = nLeft * this.propX;
			var bigImgT = nTop * this.propY
			this.big_Img.style.left = -bigImgL + "px";
			this.big_Img.style.top = -bigImgT + "px";

		},
		move_wheel:function(event){
			var e = event || window.event;
			var turn = "";
			if(e.wheelDelta){
				if(e.wheelDelta > 0){
					//向上
					turn = "up"
				}else{
					turn = "down"
				}
			}else if(e.detail){
				if(e.detail > 0){
					turn = "down"
				}else {
					turn = "up";
				}
			}

			//判断是滑动变大还是变小
			if (turn == "up") {
				var speed = 5;
			}else if (turn == "down") {
				var speed = -5;
			}

			//滑动完移动小框的 宽 + 高
			var sWidth = this.small_focus.offsetWidth + speed;
			var sHeight = this.small_focus.offsetHeight + speed ;

			//给移动的框设定最大值和最小值			
			sWidth = sWidth > 300 ? 300 : sWidth;
			sHeight = sHeight > 300 ? 300 : sHeight;
			sWidth = sWidth < 40 ? 40 : sWidth;
			sHeight = sHeight < 40 ? 40 : sHeight;
			this.small_focus.style.width = sWidth + "px";
			this.small_focus.style.height = sHeight + "px";

			//移动框移动时 left 和 top 值 ；
			var nLeft = this.small_focus.offsetLeft - speed / 2; 
			var nTop = this.small_focus.offsetTop - speed / 2;

			//小图背景 
			this.small_focus.style.left = nLeft + "px";
			this.small_focus.style.top = nTop + "px";
			this.small_focus.style.backgroundPosition = -nLeft +"px " + -nTop + "px";

			//重新计算比例
			var propX = this.Small.offsetWidth / sWidth ;
			var propY = this.Small.offsetHeight / sHeight;
			this.big_Img.style.width = this.Small.offsetWidth * propX + "px";
			this.big_Img.style.height = this.Small.offsetHeight * propY + "px";
			this.big_Img.style.left = -nLeft * propX + "px";
			this.big_Img.style.top = -nTop * propY + "px";
		}
	}

	return new Magnifier;
})