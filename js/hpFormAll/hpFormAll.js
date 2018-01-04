// 表单全屏层
// hpFormAll
layui.define(['layer', 'element'], function(exports) {
	var $ = layui.jquery;
	var layer = layui.layer;
	var element = layui.element;

	var hpFormAll = {
		open: function(elm,url,title) {
			$(document).on('click', elm, function() {
				//Ajax获取
				var Ajax = false; //兼容静态服务器 post 不能请求
					//layer.closeAll('page'); //关闭所有页面层
					$.post(url, {}, function(str) { 
						layer.open({
							type: 1,
							content: str,
							maxmin:true,
							shade: 0,
							title:title||'无标题',
							success: function(layero, index) {
								console.log('兼容静态服务器 post 不能请求')
								console.log(layero, index);
								
								layer.full(index);
								setTimeout(function(){
									layero.find(".layui-layer-min").show();
									layero.find(".layui-layer-maxmin").hide()
								},100)
							},
							full:function(layero){
								console.log(11);
							},
							min:function(layero){
								console.log(layero);
								console.log(22)
								layero.find(".layui-layer-setwin a").eq(1).show();
							}, 
							restore:function(layero){
								layero.find(".layui-layer-max").hide();
								//layero.find(".layui-layer-maxmin").show()
								//layero.find(".layui-layer-setwin a").eq(1).removeClass('layui-layer-ico layui-layer-max')
								//.addClass('layui-layer-ico layui-layer-max layui-layer-maxmin')
							},
						});
					});
				if(!Ajax) {
					//layer.closeAll('page'); //关闭所有页面层
					$.get(url, {}, function(str) {
						layer.open({
							type: 1,
							content: str,
							maxmin:true,
							shade: 0,
							title:title||'无标题',
							success: function(layero, index) {
								console.log('兼容静态服务器 post 不能请求')
								console.log(layero, index);
								
								layer.full(index);
								setTimeout(function(){
									layero.find(".layui-layer-min").show();
									layero.find(".layui-layer-maxmin").hide()
								},100)
							},
							full:function(layero){
								console.log(11);
							},
							min:function(layero){
								console.log(layero);
								console.log(22)
								layero.find(".layui-layer-setwin a").eq(1).show();
							}, 
							restore:function(layero){
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
		openOpt:function(elm,url,opt){
				$(document).on('click', elm, function() {
				var Ajax = false; //兼容静态服务器 post 不能请求
					//layer.closeAll('page'); //关闭所有页面层
					$.post(url, {}, function(str) {
				var param = {
					type: 1,
					content: str
				}
				$.extend(opt, param)
				layer.open(opt);
					});
				if(!Ajax) {
					//layer.closeAll('page'); //关闭所有页面层
					$.get(url, {}, function(str) { 
								var param = {
					type: 1,
					content: str,
				}
				$.extend(opt, param)
						layer.open(opt);
						console.log('兼容静态服务器 post 不能请求');
					});
				}
			});
		}

	}

	exports('hpFormAll', hpFormAll);
})