// 业务逻辑模块
require(["scripts/config.js"],function(){
	require(["jquery","mini","supperbanner","pop","goodlist","shop"],function($,mini,banner,pop,goodlist,shop){
		$(".container").supperBanner({
			src:[
				
				],
			autoplay:true,
			movement_mode:"scroll",
		})

		// mini.init();
		//console.log(pop);

		$(".btn").on("click",function(){
			pop.init();
		})
		
		// goodlist.init($(".goodslist li"));

		shop.init($(".goodslist li button"));

	})
	

})