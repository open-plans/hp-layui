// 表单全屏层
// hpFormAll
layui.define(['layer', 'element', 'hpConfig'], function(exports) {
	var $ = layui.jquery;
	var layer = layui.layer;
	var element = layui.element;
    var hpConfig = layui.hpConfig;
	var hpFormAll = {
		open: function(elm, url, title) {
			$(document).on('click', elm, function() {

				if(hpConfig.isAjaxType == 'get') {
					$.get(url, {}, function(str) {
						layer.open({
							type: 1,
							content: str,
							maxmin: true,
							shade: 0,
							title: title || '无标题',
							success: function(layero, index) {
								//console.log('兼容静态服务器 post 不能请求')
								//console.log(layero, index);

								layer.full(index);
								setTimeout(function() {
									layero.find(".layui-layer-min").show();
									layero.find(".layui-layer-maxmin").hide()
								}, 100)
							},
							full: function(layero) {
								//console.log(11);
							},
							min: function(layero) {
								//console.log(layero);
								//console.log(22)
								layero.find(".layui-layer-setwin a").eq(1).show();
							},
							restore: function(layero) {
								layero.find(".layui-layer-max").hide();
								//layero.find(".layui-layer-maxmin").show()
								//layero.find(".layui-layer-setwin a").eq(1).removeClass('layui-layer-ico layui-layer-max')
								//.addClass('layui-layer-ico layui-layer-max layui-layer-maxmin')
							},
						});
					});
				} else {
					$.post(url, {}, function(str) {
						layer.open({
							type: 1,
							content: str,
							maxmin: true,
							shade: 0,
							title: title || '无标题',
							success: function(layero, index) {
								//console.log('兼容静态服务器 post 不能请求')
								//console.log(layero, index);

								layer.full(index);
								setTimeout(function() {
									layero.find(".layui-layer-min").show();
									layero.find(".layui-layer-maxmin").hide()
								}, 100)
							},
							full: function(layero) {
								//console.log(11);
							},
							min: function(layero) {
								//console.log(layero);
								//console.log(22)
								layero.find(".layui-layer-setwin a").eq(1).show();
							},
							restore: function(layero) {
								layero.find(".layui-layer-max").hide();
								//layero.find(".layui-layer-maxmin").show()
								//layero.find(".layui-layer-setwin a").eq(1).removeClass('layui-layer-ico layui-layer-max')
								//.addClass('layui-layer-ico layui-layer-max layui-layer-maxmin')
							},
						});
					});
				}

			});

		},
		openOpt: function(elm, url, opt) {
			$(document).on('click', elm, function() {
				//layer.closeAll('page'); //关闭所有页面层

				if(hpConfig.isAjaxType == 'get') {
					//layer.closeAll('page'); //关闭所有页面层
					$.get(url, {}, function(str) {
						var param = {
							type: 1,
							content: str,
						}
						$.extend(opt, param)
						layer.open(opt);
						//console.log('兼容静态服务器 post 不能请求');
					});
				} else {
					$.post(url, {}, function(str) {
						var param = {
							type: 1,
							content: str
						}
						$.extend(opt, param)
						layer.open(opt);
					});
				}

			});
		}

	}

	exports('hpFormAll', hpFormAll);
})