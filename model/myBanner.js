define(["jquery"],function($){
    // slidePic:为大图片的外层ul
    // slideItem:底部小图片的外层ul
    // preBtn,nextBtn分别为向前向后按钮
    var slidePictures = function(dom1,dom2,dom3,dom4) {
        var self          = this;
        this.slidePic     = $(dom1); //内容区域大图片的外层ul
        this.slideItem    = $(dom2); //底部小图片的外层ul
        this.slidePic_li  = $(dom1+" li"); //内容区域大图片
        this.slideItem_li = $(dom2+" li"); //底部小图片
        this.prevBtn      = $(dom3); //前进按钮
        this.nextBtn      = $(dom4); //后退按钮
        this.length       = this.slidePic_li.length; //ul中图片的个数，因为大图和小图是一一对应的，所以个数相同
        this.speed        = 700; //speed为图片滑动速度，数值越大速度越慢
        this.index        = 0; //第一次显示的是第一张图片，所以索引为0；表明当前正在显示的图片索引
        this.timer;            //定义一个定时器参数
        // 初始化各项参数和属性
        self.init();
        // 首先克隆一份第一张图片,并将其添加到外层ul中
        var clone = this.slidePic_li.first().clone();
        this.slidePic.append(clone);
        // 这里需要重新获取一下li,因为之前的this.slidePic_li保存的是克隆前的数据
        this.length = $(dom1+ " li").length;
        this.prevBtn.click(function() {
            self.moveByClick(1);
        });
        this.nextBtn.click(function() {
            self.moveByClick(-1);
        });
    }

    slidePictures.prototype = {
    	
        // 初始化函数，当页面刚加载完给页面一些默认的样式，或者执行相关函数
        init: function() {
            // 首先给外层ul一个left属性为0；
            this.slidePic.css("left", 0);
            // 获取每一个图片的宽度
            this.width = this.slidePic_li.width();
            // 将第一个小图片透明度默认设为1
            this.slideItem_li.first().css("opacity", "1");
            // 给每一个小图片添加一个id属性，用于标识
            this.giveItemAttrId();
            this.autoChange();
            this.cancleTimer();
            this.mouseoverShowBigPic();
        },
        // 突出显示底部小图片，用于标识当前大图位置，id为0即显示第一个
        showItem: function(id) {
            // 判断id值
            var item = id;
            if (item == this.length - 1) {
                item = 0;
            }
            // 将所有的小图片透明度设为.3
            // this.slideItem_li.css("opacity", ".3");
            // 将当前id的小图片透明度设为1
            this.slideItem_li.eq(item).css("opacity", "1");
            this.slideItem_li.eq(item).addClass("active")
            .siblings()
            .removeClass("active")

        },
        // 得到当前透明度为needOpc的图片序号
        getCurrentShowPic: function(needOpc) {
            var item = 0;
            this.slideItem_li.each(function(index, el) {
                var opc = $(this).css("opacity");
                if (opc == needOpc) {
                    item = index;
                }
            });
            return item;
        },
        mouseoverShowBigPic:function(){
            var self = this;
            this.slideItem_li.on('mouseover',function(){
                var id = $(this).attr("id");
                self.showNow(id);//显示大图片
                self.showItem(id);//显示对应小图片
            })
        },
        // 鼠标划过小图片时显示对应的大图
        showNow: function(id) {

            // 找到当前显示的图片的序号，item为当前序号
            var item = this.getCurrentShowPic();
            // 计算需要移动的距离
            var needMove = id * this.width;
            // 如果当前显示的图片在鼠标划过的图片的左方，则向左滑动，否则向右滑动
            if (id > item) {
                this.slidePic.stop().animate({ left: "-" + needMove + "px" }, this.speed);
            } else {
                this.slidePic.stop().animate({ left: "-" + needMove + "px" }, this.speed);
            }
            // 更新this.index;
            this.index = id;
        },
        // 每次鼠标点击左右按钮时滑动一张图片
        moveByClick: function(flag) {
            //如果没有传入参数则默认为1；
            var flag = flag||-1;
            // flag用于标记点击的是左键还是右键,flag > 0为左键，反之为右键
            // length为图片的个数
            var length = this.length;
            var width = this.width;
            var speed = this.speed;
            // 当点击的是左键时
            if (flag > 0) {
                this.index--;
                if (this.index == -1) {
                    this.slidePic.css("left", "-" + (length - 1) * width + "px");
                    // 突出显示对应的底部小图片
                    this.index = length - 2;
                }
                this.slidePic.stop().animate({ left: "-" + this.index * width + "px" }, speed);
                this.showItem(this.index);
                
            } else { //点击右键时
                this.index++;
                /*当index为最后一张图片时，先将外层ul的left值设为0
                此时最后一张图片为后来克隆添加上的，将left值改为0后实际上显示的是第一张图片了
                但是由于最后一张和第一张相同，人眼看不出差别，所以以为还没有改变
                然后再将index设为1，让其切换到下一张图片，从而实现无缝轮播
                点击左键时原理相同
                */
                if (this.index == length) {
                    this.slidePic.css("left", "0px");
                    this.index = 1;
                }
                this.slidePic.stop().animate({ left: "-" + this.index * width + "px" }, speed);
                this.showItem(this.index);
                
            }
        },
        // 将所有的小图片透明度设为需要的值
        hideAllitem: function(opc) {
            this.slideItem_li.each(function(index, el) {
                $(this).css("opacity", opc);
            });
            
        },
        
        // 自动切换
        autoChange: function() {
            var self = this;
            this.timer = setInterval(function(){
                self.moveByClick();
            },3000);
        },
        //当鼠标划过相关区域时，停止自动播放
        cancleTimer:function(){
            var self = this;
            $("#container").on("mouseover",function(){
                clearInterval(self.timer);
                $(".wrap").css({display:"block"})
            });
            $("#container").on("mouseout",function(){
            	$(".wrap").css({display:"none"})
                self.autoChange();
            })
        },
        // 给底部小图片一个id属性，用于标识
        giveItemAttrId: function() {
            var self = this;
            this.slideItem_li.each(function(index, el) {
                $(this).attr("id", index);
            });
        }

    };
    window["slidePictures"] = slidePictures;
   		new slidePictures(".pic",".dot",".preBtn",".nextBtn")
})