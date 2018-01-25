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
			var flag = false;
			if($.cookie("logins")) {
				var acookie = $.cookie("logins");
				var scookie = JSON.parse(acookie);
				if (scookie.id == id && scookie.user == mima) {
					flag = true;
					$(".tips").css({display:"none"});
				}else {
					$(".tips").css({display:"inline-block"});					
					evt.preventDefault();
					// flag = false;				
				}
					// 如果不相等，阻止页面跳转
					if (flag == false && id =="" && mima == "") {
						evt.preventDefault();
						$(".tips").css({display:"inline-block"});
					}

			}else{
				$(".tips").css({display:"inline-block"});
				evt.preventDefault();
			}			
			
			// 判断用户输入的值和cookie是否相等
			
			// console.log(flag);
			
			
				
		}





	}
	return new Login();
})