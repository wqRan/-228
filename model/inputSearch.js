
// 模糊搜索
define(["jquery"],function(){
	function Search(){
	}
	Search.prototype = {
		constructor:Search,
		init:function(){
			this.input = $("#search-text");
			this.list = $("searchlist");
			// 添加定时器提高性能
			this.timer = null
			// 输入框获取焦点时
			this.input.on("input",$.proxy(this.oninput,this))
			// 当输入框失去焦点时
			this.input.on("blur",$.proxy(this.offinput,this))
		},
		offinput:function(){
			this.list.css({
					display:"none"
				})
		},
		oninput:function(){
			this.list.css({
				display:"block"
			})
			clearInterval(this.timer);
			this.list = $(".searchlist");
			// 获取输入框的value
			$val = this.input.val();
			var _this = this;
			this.timer = setTimeout(function(){	
				//通过 jQ 的 ajax 请求数据 
				$.ajax({url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $val + "&cb=callback",
				        dataType:'jsonp',//数据类型
				        type: "GET",//获取方式
				        jsonpCallback:"callback",//回调函数名
				        context:this,
				        success:function(result){
        					let n = 7 ;
        					for(let i = 0 ; i < n ; i++){
        						// 获取的结果插到相应是li中
        						_this.list.children().eq(i).html(result.s[i]);
        						}
        					},
       					
   						})
				},500)
				var num = 30+Math.round(Math.random()*2000);	
				this.list.children().eq(7).html("关于"+'"'+$val+'"'+"共有"+num+"场演出");
				
		}
	}
	return new Search();
})