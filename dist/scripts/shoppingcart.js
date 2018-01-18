define(["jquery","cookie"],function(){

	function Shopping(){

	}
	Shopping.prototype = {
		constructor:Shopping,
		init:function(ele){
			ele.on("click",$.proxy(this.set_shop_time,this))
		},
		set_shop_time:function(e){
			var data_id = $(e.target).attr("data_id");
			//console.log(data_id)

			// 如果有cookie这个结构，点击相同的购物车使其数量自增
			if ($.cookie("shop_cart")) {
				var scookie = $.cookie("shop_cart");
				var acookie = JSON.parse(scookie);
				var flag = false;
				acookie.forEach(function(item){
					if(item.id == data_id){
						item.num ++ ;
						flag = true;
					}
				})
				// 如果是第一次点击就在cookie结构第一次添加这个数据
				if (!flag) {
					var item = {
						"id":data_id,
						"num":1
					}
					acookie.push(item);
				}
				scookie = JSON.stringify(acookie);
				$.cookie("shop_cart",scookie);
				
				//如果没有cookie，就建议一个cookie
			}else {
				$.cookie("shop_cart",'[{"id":" '+data_id+ '","num":1}]')
			}
			console.log(this.get_shop_item())
			this.getCartSum();
			
		},
		getCartSum:function(){
			if (!$.cookie("shop_cart")) {
				return 0 ;
			}
			var acookie = JSON.parse($.cookie("shop_cart"));
			var sum = 0 ;
			for(var i in acookie){
				sum += parseInt(acookie[i].num)
			}

				$(".shopCart").html("共购物"+ sum)
		},
		get_shop_item:function(){
			if ($.cookie("shop_cart")) {
				return JSON.parse($.cookie("shop_cart"))
			}
		},
		remove_shop_item:function(){
			
		}

	}

	return new Shopping();


})