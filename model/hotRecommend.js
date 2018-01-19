define(["jquery"],function(){
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
			// 遍历选项卡按钮，绑定点击事件
			
			// for(var i = 0 ; i < this.$li.length;i++ ){
			// 	this.$li[i].index = i;
			// 	// console.log(this.$li[i])
			// 	this.$li.eq(i).on("click",$.proxy(this.show,this))
			// }
			var _this = this;
			this.rendring();
			var i = 0 ;
			setInterval(function(){
				i++;
				if (i == 3) {
					i = 0
				}
				_this.$li[i].index = i;
				_this.$li.eq(i).on("click",$.proxy(_this.show,_this))
				// $.proxy(_this.show(_this.index),this);
				// console.log(1)
			},2000)


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
			var _this = this;
			var main = "";
			// 添加数据
			rendringArr.forEach(function(item){
				main += '<dl class="com_dl_jsop">'+
						'<dt class="com_dt_jsop">'+
						'<a  href="'+item.href+'" title="'+item.title+'">'+
						'<span class="booking">'+'</span>'+
						'<img src="'+item.src+'" alt="">'+'</a>'+
						'</dt>'+
						'<dd>'+'<a  href="javascript:;">'+item.main+'</a>'+
						'</dd>'+
						'</dl>'
						
			});
			this.$list.html(main);
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