define(["jquery"],function(){
	function Classtify(ele1,ele2){

	}
	Classtify.prototype = {
		constructor:Classtify,
		init:function(ele1,ele2){
			this.useCookie();
			this.rendring(ele2);
			this.index = 0;
			this.$list = $(ele1).children();
			for( let i = 0 ; i < this.$list.length ; i++ ){
				this.$list[i].index = i;
				this.$list.eq(i).on("click",this.show.bind(this,ele2))
			}
			// $(ele2).html(this.html);

		},
		show:function(ele2,event){
			var evt = event || window.event;
			// 因为li中绑定了a，所以要用到事件委托，把li的事件同样绑定给a
			this.index = $(evt.delegateTarget).index()
			this.$list.eq(this.index).find("a").css({
				background:"url(../images/sprite-button-8.png) 0 -210px"
			})
			.end()
			.siblings().find("a").css({
				background:"url(../images/sprite-button-8.png) -40px -315px"
			})
			this.rendring(ele2);
		},
		rendring:function(ele2){
			$.ajax("scripts/hotRecommend.json").then(this.rendring_page.bind(this,ele2));
		},
		rendring_page:function(ele2,res){
			if(!this.res){
				this.res = res[1];
			}
			// console.log(this.res);
			// 指定每行显示5条数据
			var random = Math.round(Math.random()*20);
			var rendringArr = [];
			rendringArr = this.res.slice(this.index * 4 + random ,(this.index +1)*4 + random);
			var _this = this;
			var html = "";

			rendringArr.forEach(function(item){
				html +=
						'<dl>'+
						'<dt>'+
							'<a href="Commodity-details.html" target="_blank" title="'+item.main+'">'+
							'<img src="'+item.src+'" main="'+item.main+'" data-id="'+item.id+'">'+
							'</a>'+
						'</dt>'+
						'<dd class="title">'+
							'<a href="javascript:;"  title="'+item.main+'">'+item.main+'</a>'+
						'</dd>'+
						'<dd class="date">'+item.time+'</dd>'+
						'<dd class="address">'+
						'<a href="javascript:;">'+item.local+'</a>'+
						'</dd>'+
						'<dd class="price">'+
						'<span class="hsfh">¥</span>'+
						'<span>'+item.price+'</span> 起</dd>'+
						'</dl>'
			})
			$(ele2).html(html);
			this.findCookie(ele2);
		},
		findCookie:function(ele2){
			this.$img = $(ele2).find("img");
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
			this.$ImgBig = $("#pbigimgBig");
			this.$small = $(".grayBox");
			// 商品详情页调用之前存的cookie
			if ($.cookie("details")) {
				this.acookie = JSON.parse($.cookie("details"));
				this.title = this.acookie.title;
				this.src = this.acookie.src;
				this.id = this.acookie.id;
				this.$title.html(this.title);
				this.$Img.attr("src",this.src);
				this.$Img.attr("title",this.title);
				this.$Img.attr("data-id",this.id);
				this.$ImgBig.attr("src",this.src);
				this.$small.css({
					background:"url("+this.src+")"
				})

			}
		}


	}




	return  Classtify;






})