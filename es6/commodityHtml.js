
// 产品详情页的隐藏菜单
define(["jquery","cookie"],function(){

	class MeunEvent{

		constructor(){
			this.$title = $(".sort-title");
			this.$list = $(".list")
			this.$title.on("mouseover",$.proxy(this.show,this))
			this.$list.on("mouseover",$.proxy(this.show,this))
			this.$title.on("mouseout",$.proxy(this.hide,this))
			this.$list.on("mouseout",$.proxy(this.hide,this))
		}
		show(){
			$(".list").css({
				display:"block"
			})
		}
		hide(){
			$(".list").css({
				display:"none"
			})
		}

	}

	return new MeunEvent();

})