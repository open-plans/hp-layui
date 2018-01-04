// 右键tab菜单
// hpRightMenu
layui.define(['layer', 'element'], function(exports) {
	var $ = layui.jquery;
	var layer = layui.layer;
	var element = layui.element;
	var hpRightMenu = {
		// 右键事件阻止
		contextmenu: function(element) {
			$(document).on("contextmenu", element, function() {
				return false;
			});
		},
		// 右键点击事件
		mousedown: function(element, callBack) {
			$(document).on("mousedown", element, function(e) {
				// 判断是右键点击事件并且不是欢迎页面选项卡
				var code = e.keyCode || e.which || e.charCode;
				if(3 == e.which) {
					// 改变this的作用域
					callBack.apply(this, null)
				}
			});
		},
		// 初始化
		init: function(isClose) {
			this.firstTab(isClose);
			this.contextmenu('.hp-tab > .layui-tab-title li');
			this.mousedown('.hp-tab > .layui-tab-title li', this.rightTab);
			this.bodyCkTabClose();
			this.tabEvent();

		},
		// 右键选项卡
		rightTab: function() {
			// 判断是不是首页选项卡
			if($(this).index() > 0) {
				// 获取 当前 弹窗id
				var layId = $(".hp-tab .layui-this").attr('lay-id');
				var thisId = $(this).attr('lay-id');
				// 如果点击的当前对象layid 和 已选择的layid 不等 则要切换选项卡
				if(thisId != layId) {
					// 切换到当前选项卡
					element.tabChange('hp-tab-filter', thisId);
				}
				// 选择框
				layer.tips(rightMenuhtml, $(this), {
					tips: [1, '#009f95'],
					time: false,
				});
			}

		},
		// 第一页是否能关闭
		firstTab: function(isClose) {
			//默认 为 不可以关闭 
			if(!isClose) {
				// 获取 当前 弹窗
				$(".hp-tab .layui-this").find('i').hide();
			}

		},
		// // 点击body关闭tips
		bodyCkTabClose: function() {
			// 点击body关闭tips
			$(document).on('click', 'body', function() {
				layer.closeAll('tips');
			});
		},
		// 选项卡功能事件
		tabEvent: function() {
			this.tabRefresh();
			this.tabClose();
			this.tabCloseOther();
			this.tabCloseAll();
		},
		// 右键选项卡刷新
		tabRefresh: function() {
			// 右键提示框菜单操作-刷新页面
			$(document).on('click', '.hp-tab-refresh', function() {
				// 窗体对象
				var ifr = $(document).find('.layui-tab-content .layui-show iframe');
				// 刷新当前页
				ifr.attr('src', ifr.attr('src'));
			});
		},
		// 右键选项卡关闭
		tabClose: function() {
			// 删除tab
			var _this=this;
			$(document).on('click', '.hp-tab-close', function() {
				// 获取 当前 弹窗id
				var layId = $(".hp-tab .layui-this").attr('lay-id');
				element.tabDelete('hp-tab-filter', layId);
				_this.tabCloseAndDeleteMenuData(layId);
			});
		},
		// 右键选项卡关闭其他
		tabCloseOther: function() {
			// 删除tab
			var _this=this;
			$(document).on('click', '.hp-tab-close-other', function() {
				// 循环删除tab
				$(".hp-tab .layui-this").siblings("li").each(function(index, item) {
					if($(item).index() > 0) {
						var layId = $(item).attr("lay-id");
						element.tabDelete('hp-tab-filter', layId);
						_this.tabCloseAndDeleteMenuData(layId);
					}
				})
			});
		},
		// 右键选项卡关闭所有
		tabCloseAll: function() {
			// 删除tab
			var _this=this;
			$(document).on('click', '.hp-tab-close-all', function() {
				// 循环删除tab
				$(".hp-tab .layui-tab-title > li").each(function(index, item) {
					if($(item).index() > 0) {
						var layId = $(item).attr("lay-id");
						element.tabDelete('hp-tab-filter', layId);
						_this.tabCloseAndDeleteMenuData(layId);
					}
				})
			});
		},
		// 关闭选项卡 并联动删除 菜单的 hp-tab-id
		tabCloseAndDeleteMenuData:function(id){
			  $('#hp-tab-id-'+id).attr("hp-tab-id","");
		}

	}
	//右键菜单
	var rightMenuhtml = '<div class="hp-right-tab-menu none">' +
		'<table class="layui-tab dblclick-tab">' +
		'<tr class="hp-tab-refresh">' +
		'<td><i class="layui-icon">&#x1002;</i>刷新当前页面</td>' +
		'</tr>' +
		'<tr class="hp-tab-close">' +
		'<td><i class="layui-icon">&#x1006;</i>关闭当前页面</td>' +
		'</tr>' +
		'<tr class="hp-tab-close-other">' +
		'<td><i class="layui-icon">&#x1006;</i>关闭其他页面</td>' +
		'</tr>' +
		'<tr class="hp-tab-close-all">' +
		'<td><i class="layui-icon">&#x1006;</i>关闭所有页面</td>' +
		'</tr>' +
		'</table>' +
		'</div>';

	exports('hpRightMenu', hpRightMenu);
});