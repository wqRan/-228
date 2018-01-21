// 业务逻辑模块
require(["scripts/config.js"],function(){
	require(["jquery","mini","supperbanner","pop","goodlist","shop","input","hot","require"],
		function($,mini,banner,pop,goodlist,shop,input,hot){
		$(".container").supperBanner({
			src:[
			"images/banner1.jpg",
			"images/banner2.jpg",
			"images/banner3.jpg",
			"images/banner4.jpg",
			"images/banner5.jpg",
			"images/banner6.jpg",
			"images/banner7.jpg",
			"images/banner8.jpg"				
				],
			create_btn:true,
			autoplay:true,
			movement_mode:"fade",
		})

		// mini.init();
		//console.log(pop);

		$(".btn").on("click",function(){
			pop.init();
		})
		
		// goodlist.init($(".goodslist li"));

		shop.init($(".goodslist li button"));

		// 模糊搜索
		input.init();

		// 人们推荐
		hot.init();

	})
	

})