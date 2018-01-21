define(["jquery","cookie"],function(){
	function Resgiter(){

	}
	Resgiter.prototype = {
		constructor:Resgiter,
		init:function(){
			this.Email = $("#registEmail");
			this.Phone = $("#registPhone");
			this.Pass = $("#regisPass");
			this.Confirm = $("#regisConfirm");
			this.CheckCode = ("#registcheckCode");
			this.Img = $("#imageCoderegist");
			// 邮箱验证
			this.Email.on("focus",$.proxy(this.tip1,this));
			this.Email.on("blur",$.proxy(this.email,this));
			// 手机号码验证
			this.Phone.on("focus",$.proxy(this.tip2,this));
			this.Phone.on("blur",$.proxy(this.phone,this));
			// 密码验证
			this.Pass.on("focus",$.proxy(this.tip3,this));
			this.Pass.on("blur",$.proxy(this.pass,this));
			// 确认密码
			this.Confirm.on("focus",$.proxy(this.tip4,this));
			this.Confirm.on("blur",$.proxy(this.confirm,this));
		},
		tip1:function(){
			this.tip(".email11");
		},
		email:function(){
			
			var res = this.Email.val();
			// console.log(res)
			var reg = /^[a-z]\w{4,19}@[a-z]{1,4}\.[a-z]{1,5}$/gi;
			if (reg.test(res)) {
				// console.log(1)
				// console.log($(".onCorrect"));
				$(".onCorrect1").css({
					display:"inline-block"
				})
				.siblings().css({
				display:"none"
				})
			}else if (res == "") {
				$(".email12").css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
			}else {
				$(".email13").css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
			}
		},
		tip2:function(){
			this.tip(".email21");
		},
		phone:function(){
			var res = this.Phone.val();
			var reg = /^0?(13|14|15|18)[0-9]{9}$/g;
			if (reg.test(res)) {
				$(".onCorrect2").css({
					display:"inline-block"
				})
				.siblings().css({
				display:"none"
				})
			}else if(res == ""){
				$(".email22").css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
			}else {
				$(".email23").css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
			}
		},
		tip3:function(){
			this.tip(".email31");
		},
		pass:function(){
			this.main(this.Pass.val() ".onCorrect3" "/^[^/\\\*<>\|\?]{6,18}$/" ".email32" ".email33"  )
			var res = this.Pass.val();
			var reg = /^[^ /\\\*<>\|\?]{6,18}$/;	
			if (reg.test(res)) {
				$(".onCorrect3").css({
					display:"inline-block"
				})
				.siblings().css({
				display:"none"
				})
			}else if(res == ""){
				$(".email32").css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
			}else{
				$(".email33").css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
			}
		},
		tip4:function(){
			this.tip(".email41");
		},
		confirm:function(){

		},
		tip:function(dom){
			$(dom).css({
					display:"inline-block"
				})
			.siblings().css({
				display:"none"
			})
		},
		main:function(res,reg,dom1,dom2,dom3){
			var res = res;
			var reg = reg.replace(/^\"|\"$/g,'');	

			if (reg.test(res)) {
				$(dom1).css({
					display:"inline-block"
				})
				.siblings().css({
				display:"none"
				})
			}else if(res == ""){
				$(dom2).css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
			}else{
				$(dom3).css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
			}
		}

	}
	return new Resgiter();
})
