require(["scripts/config.js"],function(){
	require(["jquery","mini",
		"input","hot","hotCity","classtify","shopping","pop"],
		function($,mini,input,hot,hotCity,classtify,shopping,pop){

		
		input.init();
		shopping.init();
		$(".submit").on("click",function(event){
			pop.init();
		})
	})
})