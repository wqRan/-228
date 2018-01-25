define(["jquery","cookie"],function(){
	function Hot(){

	}
	Hot.prototype = {
		constructor:Hot,
		init:function(){
			this.$list = $(".hot_list");
			// console.log(this.$list);
			this.$li = $(".hot-product-list").children();
			// console.log(this.$li.length);
			this.index = 0;
			this.rendring();
			// 遍历选项卡按钮，绑定点击事件
			this.$timer = null;
			// this.$timer = setInterval($.proxy(this.onClick,this),2000);
			// toggle
			this.useCookie();			
			//$.proxy(this.onClick(),this);

			this.$li.on("click",$.proxy(this.show,this))
			

			setInterval($.proxy(this.autoplay,this),2000)

		},

		autoplay:function(){

			var max = this.$li.length;

			if(this.index == max - 1){
				this.index = 0;
			}else{
				this.index ++;
			}

			//console.log(this.index)

			this.$li.eq(this.index).trigger("click")

		},
		show:function(e){
			var ele = e.target;
			var index = $(ele).index()

			// 被点击的按钮添加样式
			this.$li.eq(index).addClass("selected")
			.siblings()
			.removeClass("selected")	
			this.rendring();		
		},
		// 访问jsonp数据
		rendring:function(){
			$.ajax("scripts/hotRecommend.json").then(this.rendring_page.bind(this))
		},
		rendring_page:function(res){
			// console.log(res[0]);

			if(!this.res){
				this.res = res[0];
			}
			// console.log(this.res)
			// 指定每行显示5条数据
			var rendringArr = [];
			rendringArr = this.res.slice(this.index * 5 ,(this.index +1)*5);
			// console.log(rendringArr);
			var main = "";
			// 添加数据
			rendringArr.forEach(function(item){
				main += '<dl class="com_dl_jsop">'+
						'<dt class="com_dt_jsop">'+
						'<a  href="Commodity-details.html" target="_blank" title="'+item.title+'">'+
						'<span class="booking">'+'</span>'+
						'<img src="'+item.src+'" title="'+item.title+'" data-id="'+item.id+'" alt="">'+'</a>'+
						'</dt>'+
						'<dd>'+'<a  href="javascript:;">'+item.main+'</a>'+
						'</dd >'+
						'</dl>'
						// console.log(item.id)
						
			});
			this.$list.html(main);

			this.findCookie();
		},
		findCookie:function(){
			this.$img = $(".hot_list").find("img");
			// console.log(this.$img);
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
			this.title = this.$img.eq(this.index).attr("title");
			$.cookie("details",'{"id":"'+this.id+ '","src":"'+this.src+'","title":"'+this.title+'"}')
			this.useCookie();
		},
		useCookie:function(){
			// console.log($.cookie("details"));
			this.$title = $("h1");
			this.$Img = $("#pbigimg");
			if ($.cookie("details")) {
				this.acookie = JSON.parse($.cookie("details"));
				// console.log(this.acookie);
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
	return new Hot();

	// function Cityshow(){

	// }
	// Cityshow.prototype{
	// 	constructor:Cityshow(){
			
	// 	}
	// }
	// return new Cityshow()
})