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
			this.useCookie();
			

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
							'<a href="Commodity-details.html" target="_blank" title="'+item.main+'">'+
							'<img src="'+item.src+'" main="'+item.main+'" data-id="'+item.id+'">'+
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

			this.findCookie();
		},
		// 找到对应的img
		findCookie:function(){
			this.$img = $(".city-product-list").find("img");
			for(var i = 0 ; i < this.$img.length; i++){
				this.$img[i].index = i;
				this.$img.eq(i).on("click",$.proxy(this.setCookie,this))
			}

		},
		setCookie:function(event){
			var evt = event || window.event;
			this.index = event.target.index;
			// console.log(this.index)
			// 把图片的ID 和 src 存到cookie中
			this.id = this.$img.eq(this.index).attr("data-id");
			this.src = this.$img.eq(this.index).attr("src");
			this.title = this.$img.eq(this.index).attr("main");
			$.cookie("details",'{"id":"'+this.id+ '","src":"'+this.src+'","title":"'+this.title+'"}')
			this.useCookie();
		},
		useCookie:function(){
			this.$title = $("h1");
			this.$Img = $("#pbigimg");
			// 判断是否存在，如果存在商品详情页使用cookie的信息
			if ($.cookie("details")) {
				this.acookie = JSON.parse($.cookie("details"));
				this.title = this.acookie.title;
				this.src = this.acookie.src;
				this.id = this.acookie.id;
				this.$title.html(this.title);
				this.$Img.attr("src",this.src);
				this.$Img.attr("title",this.title);
				this.$Img.attr("src",this.src);
				this.$Img.attr("data-id",this.id);

			}
		}



	}



	return new hotCity();
})