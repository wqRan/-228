// 登录页面验证cookie
define(["jquery","cookie"],function($,cookie){
	function Login(){

	}
	Login.prototype = {
		constructor:Login,
		init:function(){
			this.user = $("#username");
			this.pass = $("#password");
			this.btn = $(".pt10");
			this.btn.on("click",$.proxy(this.usercheck,this))
			this.usercheck();
		},
		usercheck:function(event){
			var evt = event || window.event;
			var id = this.user.val();
			var mima = this.pass.val();
			// 先获取cookie
			var acookie = $.cookie("logins");
			var scookie = JSON.parse(acookie);
			var flag = false;
			// 判断用户输入的值和cookie是否相等
			if (scookie.id == id && scookie.user == mima) {
				flag = true;
			}else {
				$(".login-cont-rightb-close").css({display:"inline-block"})				
			}		
			console.log(flag);
			
			// 如果不相等，阻止页面跳转
			if (flag == false ) {
				evt.preventDefault();
			}
				
		}





	}
	return new Login();
})