﻿#永乐票务
**永乐票务**是售卖各种门票的电商网站。以下是我的项目的概述：
- **首页** ：可以进入登录注册界面，点击商品进入其对应的商品详情页，并把商品信息存入cookie，搜索框具有模糊搜索功能，首页具有自动分页、选项卡自动点击、楼梯、无缝轮播图等功能
- **注册页** ：注册需要验证邮箱地址、手机号码、设置密码、确认密码、验证码，点击输入框时提醒输入，若无内容提醒不能为空，输入符合对应的正则则提示正确，所有验证均为正确时跳转到登录页面并将注册信息存入cookie
- **登录页** ：需要验证输入的手机号和密码是否符合注册页面保存的cookie且不能为空，验证成功跳转到首页，否则提示并阻止跳转
- **商品详情** ：使用保存的cookie来呈现商品的详情信息，商品图片有放大镜功能，可以选择观看演出时间、票价、购买数量（最多6张）；所有信息选择完毕方可点击加入购物车按钮，进入购物车详情页面，并将商品的详细信息存入cookie，
- **购物车** ：填写收货地址、并选择配送方式，可以往购物车添加多种商品，并显示在商品详情页所选择观看演出的时间、票价、购买数量、总价，可点击确认并提交订单按钮
- **商品结算** ：点击购物车的确认并提交订单按钮对所有商品进行结算的