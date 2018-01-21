define(["jquery","cookie"],function(){
	function Resgiter(){

	}
	Resgiter.prototype = {
		constructor:Resgiter,
		init:function(){
			this.Email = $(".registEmail");
			console.log(this.Email)
		}
	}
	return new Resgiter();
})
