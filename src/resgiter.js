require(["scripts/config.js"],function(){
	require(["jquery","cookie","resgiter","login","mini"],
		function($,cookie,resgiter,login,mini){
		// console.log($);
	
		resgiter.init();
		login.init();
		mini.init();
	})
})



