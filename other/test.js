//test
layui.define([], function(exports) {
	var $ = layui.jquery;
	var element = layui.element;
	var test={
		version:1.0,
		author:'隐无为',
		isAjaxType:'get',// 此参数是为了配置静态服务器用的，因为静态服务器是不能用post的
	}
	exports('test', test); 
});