//hpIndex js   主页 js 
layui.define(['element'], function(exports) {
	var $ = layui.jquery;
	var hpIndex = {
		// 初始化
		init: function() {
			this.initEvent();
		},
		// 初始化事件
		initEvent: function() {
			/**          						
			 * 侧边栏显示/隐藏功能
			 */
			$(".hp-side-menu").click(function() {
				if($(".layui-layout-admin .layui-side").css("left") == '0px') {
					$(".layui-layout-admin .layui-side").animate({
						left: "-200px"
					});
					/*$(".layui-layout-admin .layui-logo").animate({left: "-200px"});*/
					$(".layui-layout-admin .layui-body").animate({
						left: "0px"
					});
					$(".layui-layout-admin .layui-footer").animate({
						left: "0px"
					});
				} else {
					$(".layui-layout-admin .layui-side").animate({
						left: "0px"
					});
					$(".layui-layout-admin .layui-body").animate({
						left: "200px"
					});
					/*   $(".layui-layout-admin .layui-logo").animate({left: "0px"});*/
					$(".layui-layout-admin .layui-footer").animate({
						left: "200px"
					});
				}
			});
		}
	}

	exports('hpIndex', hpIndex);
});