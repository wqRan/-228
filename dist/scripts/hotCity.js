define(["jquery"],function(){
	function hotCity(){

	}
	hotCity.prototype = {
		constructor:hotCity,
		init:function(){
			this.rendring();
			this.index = 0;
			this.$list = $(".city-list-uls").children();
			// console.log(this.$list);
			for( var i = 0 ; i < this.$list.length ; i++ ){
				this.$list[i].index = i;
				this.$list.eq(i).on("click",$.proxy(this.show,this))
			}

			// 使其二级菜单显示，但会触发事件冒泡；
			$(".city-links").on("click",function(){
				$(".allcity").css({display:"block"})
				event.stopPropagation()
			})
			$(document).on("click",function(){
				$(".allcity").css({display:"none"});
				
			})
			

		},
		show:function(event){
			var evt = event || window.event;
			// 因为li中绑定了a，所以要用到事件委托，把li的事件同样绑定给a
			this.index = $(evt.delegateTarget).index()
			this.rendring();
		},
		rendring:function(){
			$.ajax("scripts/hotRecommend.json").then(this.rendring_page.bind(this));
		},
		rendring_page:function(res){
			if(!this.res){
				this.res = res[1];
			}
			// 指定每行显示5条数据
			var rendringArr = [];
			rendringArr = this.res.slice(this.index * 5 ,(this.index +1)*5);
			var _this = this;
			var html = "";
			// 添加数据
			rendringArr.forEach(function(item){
				html +=
						'<dl class="com_dl_jsop">'+
						'<dt class="com_dt_jsop" >'+
							'<a href="javascript:;" title="'+item.main+'">'+
							'<img src="'+item.src+'" >'+
							'</a>'+
						'</dt>'+
						'<dd class="title-main">'+
							'<a href="javascript:;"  title="'+item.main+'">'+item.main+'</a>'+
						'</dd>'+
						'<dd>'+
						'<span class="hsfh">¥</span>'+
						'<span class="price">'+item.price+'</span> 起</dd>'+
						'</dl>'
			})
			$(".city-product-list").html(html);
			// 使对应的地区名字也更换
			$(".lans").html(this.$list.eq(this.index).find("a").text());

		}



	}



	return new hotCity();
})