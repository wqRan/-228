define(["jquery"],function(){
	function Classtify(ele1,ele2){

	}
	Classtify.prototype = {
		constructor:Classtify,
		init:function(ele1,ele2){
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
							'<a href="javascript:;" title="'+item.main+'">'+
							'<img src="'+item.src+'" >'+
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

		}
	}




	return  Classtify;






})