$(function () {
		// 检测依赖（zepto)
	if(!Zepto) {
		console.error("zepto not found!");
		return;
	}

	// 获取footer和header节点
	var
		nHeader = $("#headerCom"),
		nFooter = $("#footerCom"),
		root = "module/header_com/html/";

	// 添加DOM结构
	$.get(root + 'header.html', function(response){
	  	nHeader.append(response)
	});
	$.get(root + 'footer2.html', function(response){
	  	nFooter.append(response)
	});

})