// 将首页点击的产品的信息保存为cookie
define(["jquery","cookie"],function(){
	function shoppingCart(){

	}
	shoppingCart.prototype = {
		constructor:shoppingCart,
		init:function(){
			this.$img = $("#pbigimg");

			//点击时间框获取时间
			this.$date = $("#Jdate").children();
			for(var i = 0 ; i < this.$date.length ; i++){
				this.$date[i].index = i;
				this.$date.eq(i).on("click",$.proxy(this.saveDate,this))
			}
			// 点击价格框选择价格
			this.$money = $("#money").children();
			for(var i = 0 ; i < this.$money.length ; i++){
				this.$money[i].index = i;
				this.$money.eq(i).on("click",$.proxy(this.saveMoney,this))
			}

			// 点击加入购物车
			this.$buy = $(".buy");
			this.$buy.on("click",$.proxy(this.setCookie,this))

			// 点击获取数量
			this.$reduce = $(".relt-prev");
			this.$reduce.on("click",$.proxy(this.small,this));
			this.$more = $(".relt-next");
			this.$more.on("click",$.proxy(this.big,this));

			this.useCookie();
			
		},
		saveDate:function(event){
			var evt = event || window.event;
			var index = evt.target.index;
			this.$time = this.$date.eq(index).text();
			console.log(this.$time);
			this.haveCookie();
		},
		saveMoney:function(event){
			var evt = event || window.event;
			var index = evt.target.index;
			this.$price = this.$money.eq(index).text();
			console.log(this.$price);
			this.haveCookie();
		},
		small:function(){
			this.$num = $(".yl-order").val();
			this.$end = --this.$num
			//设置最少买一张门票 
			if (this.$end < 1 ) {
				this.$end = 1;
			}
			$(".yl-order").val(this.$end)
		},
		big:function(){
			this.$num = $(".yl-order").val();
			this.$end = ++this.$num
			if (this.$end > 6 ) {
				this.$end = 6;
			}
			$(".yl-order").val(this.$end)
		},
		haveCookie:function(){
			this.$endTime = $(".relt-1");
			this.$endTime.html(this.$time);
			this.$endPrice = $(".relt-2");
			this.$endPrice.html(this.$price);
		},
		setCookie:function(event){
			var evt = event || window.event
			this.title = this.$img.attr("title");
			this.id = this.$img.attr("data-id");
			this.$endunm = $(".yl-order").val();
			// 当选择了时间和价格时保存cookie信息
			if (this.$time != undefined && this.$price != undefined) {
				$(".ok").css({
					display:"none"
				})

				// 验证cookie是否存在
				if ($.cookie("shopping_cart")) {
					var acookie = JSON.parse($.cookie("shopping_cart"));
					var flag = false;
					acookie.forEach(function(item){
						if (item.id == this.id) {
							flag = true;
						}
					})
					if (!false) {
						var item = {
							id:this.id,
							title:this.title,
							time:this.$time,
							price:this.$price,
							num:this.$endunm
						}
						acookie.push(item);
					}
					scookie = JSON.stringify(acookie);
					$.cookie("shopping_cart",scookie);			
				}else {
					$.cookie("shopping_cart",'[{"id":"'+this.id+ '","title":"'+this.title+'","time":"'+this.$time+'","price":"'+this.$price+'","num":"'+this.$endunm+'"}]');

				}

			}else{
				$(".ok").css({display:"block"});
				// 信息不完整阻止跳转
				evt.preventDefault();				
			}
				this.useCookie();
		},
		useCookie:function(){
			if ($.cookie("shopping_cart")) {
				var html = "";
				var acookie = JSON.parse($.cookie("shopping_cart"))
				console.log(acookie);
				acookie.forEach(function(name){
					$(name).each(function(index,item){
						var add = item.num * item.price
				html += 
					`<tr>
					<td class="buyCar-table-proinfo">
					<span class="buyCar-table-proinfo-sp2" style="width:340px">
					<strong class="red">[售票中]</strong>				
					<a href="javascript:;" class="c2">${item.title}</a></span>
					</td>
					<td class="time">${item.time}</td>
					<td><span class="endprice">${item.price}</span></td>				
					<td class="endnum" style="width:60px;">${item.num}</td>
					<td><span class="Allprice">${add}</span>元 </td>
					</tr>`


					})
				})

			
				$("#itemList").append(html);


			}

		}

	}


	return new shoppingCart()



})