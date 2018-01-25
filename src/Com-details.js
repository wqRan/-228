require(["scripts/config.js"],function(){
	require(["jquery","mini",
		"input","hot","commodityHtml","hotCity","classtify","shopping"],
		function($,mini,input,hot,commodity,hotCity,classtify,shopping){
			// 页面零碎功能
			mini.init();

			// 模糊搜索
			input.init();

			// 热门推荐数据及cookie
			hot.init();

			// 二级菜单的隐藏与显示
			commodity;

			// 热门城市数据及cookie
			hotCity.init();

			// 演出分类块的数据及cookie
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


			// 将详情页加入购物车
			shopping.init();
		})
		
})