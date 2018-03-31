//hpConfig.js 一些配置信息 和公共工具类
layui.define(['element'], function(exports) {
	var $ = layui.jquery;
	var element = layui.element;
	var hpConfig={
		version:1.0,
		author:'隐无为',
		isAjaxType:'get',// 此参数是为了配置静态服务器用的，因为静态服务器是不能用post的
	}
	
	//将表单序列化成json
		$.fn.serializeJson= function (){
			var serializeObj={};
			$( this .serializeArray()).each( function (){
				serializeObj[ this .name]= this .value .trim();
			});
			return serializeObj;
		};
	

	
	exports('hpConfig', hpConfig);
});