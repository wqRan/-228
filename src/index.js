// 业务逻辑模块
require(["scripts/config.js"],function(){
	require(["jquery","mini","input","hot","place",
		"hotCity","choice","classtify","myBanner"],
		function($,mini,input,hot,place,hotCity,
			choice,classtify,myBanner){
		
		//首页头部小功能集合
		mini.init();
		//console.log(pop);

		// 模糊搜索
		input.init();

		// 人们推荐
		hot.init();

		// place.init();

		// 热门城市列表
		hotCity.init();

		// 选项卡

		choice.init(".choice-btn li",".choice-show dl");

		// 演出分类的数据
		var ele1 = new classtify();
		ele1.init(".classsity-ul1",".classsity-nav-show1");
		var ele2 = new classtify();
		ele2.init(".classsity-ul2",".classsity-nav-show2");
		var ele3 = new classtify();
		ele3.init(".classsity-ul3",".classsity-nav-show3");
		var ele4 = new classtify();
		ele4.init(".classsity-ul4",".classsity-nav-show4");
		var ele5 = new classtify();
		ele5.init(".classsity-ul5",".classsity-nav-show5");
		var ele6 = new classtify();
		ele6.init(".classsity-ul6",".classsity-nav-show6");

		
	})
	

})