define(["jquery"],function($){
function Tabs(select_btn,select_show){

	}
	Tabs.prototype = { 		
		constructor:Tabs,
		init:function(select_btn,select_show){
			this.btn = document.querySelectorAll(select_btn);
			this.show = document.querySelectorAll(select_show);
			for(var i = 0 ; i < this.btn.length ; i++){
				this.btn[i].index = i;
				this.btn[i].onclick = this.change.bind(this);
			}
			// setInterval(this.change.bind(this.btn[i].index),2000);
		},
		change:function(event){
			var index = event.target.index;
			for(var i = 0 ; i < this.show.length ; i++){
				// console.log(this)
				this.show[i].style.display = "none";
				this.btn[i].className = "";
			}
			this.show[index].style.display="block";
			this.btn[index].className = "selected";
		}
		
		
	}

		return new Tabs();

})