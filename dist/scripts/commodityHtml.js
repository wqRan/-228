"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 产品详情页的隐藏菜单
define(["jquery", "cookie"], function () {
	var MeunEvent = function () {
		function MeunEvent() {
			_classCallCheck(this, MeunEvent);

			this.$title = $(".sort-title");
			this.$list = $(".list");
			this.$title.on("mouseover", $.proxy(this.show, this));
			this.$list.on("mouseover", $.proxy(this.show, this));
			this.$title.on("mouseout", $.proxy(this.hide, this));
			this.$list.on("mouseout", $.proxy(this.hide, this));
		}

		_createClass(MeunEvent, [{
			key: "show",
			value: function show() {
				$(".list").css({
					display: "block"
				});
			}
		}, {
			key: "hide",
			value: function hide() {
				$(".list").css({
					display: "none"
				});
			}
		}]);

		return MeunEvent;
	}();

	return new MeunEvent();
});