// 将首页点击的产品的信息保存为cookie
define(["jquery","cookie"],function(){
	function setDetails(){

	}
	setDetails.prototype = {
		constructor:setDetails,
		init:function(){
			this.$img = $(".hot_list");
			console.log(this.$img.find("img"));
			this.$img.find("img").on("click",$.proxy(this.getId,this))
			// console.log(this.img.find("img"));
			// console.log(this.img.find("img").attr("src"));
		},
		getId:function(){
			console.log(1);
		}













	}


	return new setDetails()



})