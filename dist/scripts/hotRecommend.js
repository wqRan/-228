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
			
			// var _this = this;
			// var timer = setInterval(function(){
			// 		// $.proxy(_this.onClick(),_this);
			// 		// $.proxy(_this.show(),_this);
			// 		for(var i = 0 ; i < _this.$li.length;i++ ){
			// 			_this.$li[i].index = i;
			// 			console.log(_this.$li[i])
			// 			_this.$li.eq(i).on("click",$.proxy(_this.show,_this));
			// 			console.log(i);
			// 		}

			// 	},3000)	
			
			this.useCookie();			
			$.proxy(this.onClick(),this);
			
		},
		onClick:function(){
			for(var i = 0 ; i < this.$li.length;i++ ){
				this.$li[i].index = i;
				// console.log(this.$li[i])
				this.$li.eq(i).on("click",$.proxy(this.show,this));
				// console.log(i);
			}
		},
		show:function(event){
			var evt = event || window.event;			
			this.index = evt.target.index;
			// 被点击的按钮添加样式
			this.$li.eq(this.index).addClass("selected")
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
						'<a  href="Commodity-details.html" title="'+item.title+'">'+
						'<span class="booking">'+'</span>'+
						'<img src="'+item.src+'" title="'+item.title+'" data-id="'+item.id+'" alt="">'+'</a>'+
						'</dt>'+
						'<dd>'+'<a  href="javascript:;">'+item.main+'</a>'+
						'</dd >'+
						'</dl>'
						// console.log(item.id)
						
			});
			this.$list.html(main);

			this.setCookie();
		},
		setCookie:function(){
			this.$img = $(".hot_list").find("img");
			// console.log(this.$img);
			for(var i = 0 ; i < this.$img.length; i++){
				this.$img[i].index = i;
				this.$img.eq(i).on("click",$.proxy(this.setcookie,this))
			}
			


		},
		setcookie:function(event){
			var evt = event || window.event;
			this.index = event.target.index;
			// console.log(this.index)
			// 把图片的ID 和 src 存到cookie中
			this.id = this.$img.eq(this.index).attr("data-id");
			this.src = this.$img.eq(this.index).attr("src");
			this.title = this.$img.eq(this.index).attr("title");
			console.log(this.src);
			console.log(this.id);
			console.log(this.title);
			$.cookie("details",'{"id":"'+this.id+ '","src":"'+this.src+'","title":"'+this.title+'"}')
			this.useCookie();
		},
		useCookie:function(){
			console.log($.cookie("details"));
			this.$title = $("h1");
			this.acookie = JSON.parse($.cookie("details"));
			console.log(this.acookie.title);
			this.title = this.acookie.title;
			this.$title.html(this.title);
			

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