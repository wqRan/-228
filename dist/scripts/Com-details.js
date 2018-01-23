require(["scripts/config.js"],function(){
	require(["jquery","mini",
		"input","hot"],function($,mini,input,hot){

			mini.init();
			input.init();
			hot.init();
		})
		
})