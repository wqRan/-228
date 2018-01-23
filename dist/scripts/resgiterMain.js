define(["jquery","cookie"],function($,cookie){
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
			this.Check = $("#registcheckCode");
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
			// 打开页面自动生成验证码,并验证
			this.Check.on("focus",$.proxy(this.tip5,this));
			this.Check.on("blur",$.proxy(this.check,this));
			this.yzm = $(".regisiter-yzm");
			this.yzm.on("click",$.proxy(this.checkCode,this));
			this.checkCode();
			// 设置一个标志
			this.Submit = $("#registsubmit");
			this.Submit.on("click",$.proxy(this.submit,this))
			this.resginter = [this.Email,this.Phone,this.Confirm,this.Pass,this.Check];
		},
		tip1:function(){
			this.tip(".email11");
		},
		email:function(){
			this.main1(this.Email.val(),/^[a-z]\w{4,19}@[a-z]{1,4}\.[a-z]{1,5}$/gi,".onCorrect1",".email12",".email13",this.Email);
		},
		tip2:function(){
			this.tip(".email21");
		},
		phone:function(){
			this.main1(this.Phone.val(),/^0?(13|14|15|18)[0-9]{9}$/g,".onCorrect2",".email22",".email23",this.Phone);

		},
		tip3:function(){
			this.tip(".email31");
		},
		pass:function(){

			this.main1(this.Pass.val(),/^[^/\\\*<>\|\?]{6,18}$/g,".onCorrect3",".email32",".email33",this.Pass);
			
		},
		tip4:function(){
			this.tip(".email41");
		},
		confirm:function(){
			this.main2(this.Confirm.val(),this.Pass.val(),".onCorrect4",".email42",".email43",this.Confirm);
		},
		tip5:function(){
			this.tip(".email51");
		},
		check:function(){
			this.main2(this.Check.val(),this.yzm.text(),".onCorrect5",".email52",".email53",this.Check);
		},
		tip:function(dom){
			$(dom).css({
					display:"inline-block"
				})
			.siblings().css({
				display:"none"
			})
		},
		main1:function(res,reg,dom1,dom2,dom3,dom4){
			if(res == "") {
				$(dom2).css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
				dom4.count = false;
			}
			if (reg.test(res)) {
				$(dom1).css({
					display:"inline-block"
				})
				.siblings().css({
				display:"none"
				})
				dom4.count = true;
			}
			else if (!(reg.test(res))){
				$(dom3).css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
				dom4.count = false;
			}
		},
		main2:function(res,reg,dom1,dom2,dom3,dom4){
			if(res == "") {
				$(dom2).css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
				dom4.count = false;
			}
			if ((res == reg)) {
				$(dom1).css({
					display:"inline-block"
				})
				.siblings().css({
				display:"none"
				})
				dom4.count = true;
			}
			else if (!(res == reg)){
				$(dom3).css({
					display:"inline-block"
				})
				.siblings().css({
					display:"none"
				})
				dom4.count = false;
			}
		},
		checkCode:function(){
			// 获取随机4位验证码
			var str = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
			var res = "";
			for(var i = 0 ; i < 4 ; i++){
				res += str.charAt(Math.round(Math.random()*62));
				this.yzm.html(res);
			}
			// 获取span中的value;
			// console.log(this.yzm.text());

		},
		submit:function(event){
			var evt = event || window.event;
			var flag = true;
			// 当所有验证都为true时提交页面进入登录页
			for(var i = 0 ; i < this.resginter.length ; i++){
				console.log(i,this.resginter[i].count)
				if (!this.resginter[i].count) {
					flag = false;
					break;
					}
			}	
			// 当为false时阻止页面提交
				if (flag == false) {
					evt.preventDefault();
				}else{
					// 并把注册的信息存入cookie
					this.setCookie();
				}
			
		},
		setCookie:function(event){
			var evt = event || window.event;
			if ($.cookie(this.Phone.val())) {
				// 判断是否账号是否存在
				var scookie = $.cookie("logins");
				var acookie = JSON.parse(scookie);
				acookie.forEach(function(item){
					if (item.id == this.Phone.val()) {
						evt.preventDefault();
						$(".email14").css({
							display:"inline-block"
						})
						.siblings().css({
							display:"none"
						})
					}
				})

			}else{
				// 存入一个cookie
				$.cookie("logins",'{"id":"'+this.Phone.val()+ '","user":"'+this.Pass.val()+'"}')
				// let zh = '{"userphone":"'+userphone+'","password":"'+password+'"}';
			}
			
		}

	}
	return new Resgiter();
})
