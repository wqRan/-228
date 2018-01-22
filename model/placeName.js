define(["jquery"],function($){
	function PlaceName(){

	}
	PlaceName.prototype ={
		constructor:PlaceName,
		init:function(){
			// 
			var setajax ={
				url:"https://www.228.com.cn/ajax/findpronum.json?nc=30",
				type:"GET",
				context:this
			}
			$.ajax(setajax).then($.proxy(this.rendring,this))
		},
		rendring:function(res){
			console.log(res);
		}



	}
	return new PlaceName();



})