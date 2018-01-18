// define(["jquery"],function(){
// 	function goodList(){

// 	}
	// goodList.prototype = {
	// 	constructor:goodList,
	// 	init:function(ele){
			

	// 		var setup = {
	// 			url:"www.zcool.com.cn/recommend/contentRecommend",
	// 			type:"GET",
	// 			data:{
	// 				pageSize:5,
	// 				contentId:"6372959_3",
	// 				day:"2018-01-11"
	// 			},
	// 			context:this
	// 		}
	// 		this.ele = ele;
	// 		$.ajax(setup).then(this.rendring_page)			
			
	// 	},
		// rendring_page:function(res){
		// 	// console.log(res);
		// 	var _this = this;
		// 	res.data.contents.forEach(function(item,index){
		// 		_this.ele.eq(index).find("button").attr("data_id",item.id);
		// 		_this.ele.eq(index).find("img").attr("src",item.cover2x);
		// 		_this.ele.eq(index).find("p").html(item.title);
		// 	})
		// }
// 	}

// 	return new goodList();
// })