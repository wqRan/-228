// 即将开票预定 区域的选项卡功能
define(["jquery"],function($){
function Tabs(select_btn,select_show){

	}
	Tabs.prototype = { 		
		constructor:Tabs,
		init:function(select_btn,select_show){
			this.$btn = $(select_btn);
			this.$show = $(select_show);
			this.index = 0;
			this.$parent = this.$btn.parent();
			// 为按钮绑定事件
			this.$btn.on("click",$.proxy(this.change,this))
			// 鼠标移动暂停播放
			this.$parent.on("mouseover",$.proxy(this.stop,this))
			// 鼠标移除自动播放
			this.$parent.on("mouseout",$.proxy(this.go_on,this))
			// 自动播放功能
			this.timer = setInterval( $.proxy(this.autoplay,this),2300)
		},
		autoplay:function(){
			// 循环按钮下标
			var max = this.$btn.length;
			if (this.index == max -1) {
				this.index = 0;
			}else {
				this.index ++
			}
			//按钮自动触犯点击事件
			this.$btn.eq(this.index).trigger("click");
		},
		change:function(event){
			// 获取所点击按钮的下标
			var ele = event.target;
			var index = $(ele).index();

			this.$show.eq(index).css({
				display:"block"
			})
			.siblings().css({display:"none"})
			this.$btn.eq(index).addClass("selected")
			.siblings()
			.removeClass("selected")
		},
		stop:function(){
			clearInterval(this.timer);
		},
		go_on:function(){
			this.timer = setInterval( $.proxy(this.autoplay,this),2300)
		}
		
		
	}

		return new Tabs();

})