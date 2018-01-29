//hp-tab 选项卡
layui.define(['element'], function(exports) {
	var $ = layui.jquery;
	var element = layui.element;
	var hp_tab = {
		init: function() {
			$('.hp-tab-add').on('click', function() {
				var othis = $(this);
				var href = othis.attr("hp-href");
				var title = othis.html();
				var hp_tab_id = othis.attr("hp-tab-id");
				if(hp_tab_id) {
					hp_tab.tabChange(hp_tab_id);
				} else {
					hp_tab_id = new Date().getTime();
					othis.attr("hp-tab-id", hp_tab_id);
					othis.attr("id", "hp-tab-id-"+hp_tab_id);
					hp_tab.tabAdd(hp_tab_id, title, href);
				}
				hp_tab.winResize();
			});

			//监听选项卡删除
			element.on('tabDelete(hp-tab-filter)', function(data) {
				var id=$(this).parent().attr("lay-id");
				$('#hp-tab-id-'+id).attr("hp-tab-id","");
			});

		},
		tabAdd: function(id, title, href) {
			//新增一个Tab项
			element.tabAdd('hp-tab-filter', {
				title: title,
				content: '<iframe class="hp-iframe" style="width:100%"  src="' + href + '" />',
				id: id //实际使用一般是规定好的id，这里以时间戳模拟下
			})
			element.tabChange('hp-tab-filter', id); 
		},
		tabDelete: function(othis) {
			//删除指定Tab项
			element.tabDelete('hp-tab-filter', '44'); 

			othis.addClass('layui-btn-disabled');
		},
		tabChange: function(id) {
			//切换到指定Tab项
			element.tabChange('hp-tab-filter', id); 
		},
		/**
		 * 监听浏览器窗口改变事件
		 */
		winResize: function() {
			$(window).on('resize', function() {
				var currBoxHeight = $('.layui-body').height(); //获取当前容器的高度
				$('.layui-tab-content iframe').height(currBoxHeight - 86);
			}).resize();
		}

	}

	exports('hpTab', hp_tab);
});