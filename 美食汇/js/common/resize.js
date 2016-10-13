(function () {
	var docEl = document.documentElement,
	    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	    recalc = function() {
	        //设置根字体大小
	        var myfontSize = 20 * (docEl.clientWidth/375);
	        console.log(myfontSize);
	        if(myfontSize > 30){
	        	docEl.style.fontSize = "30px";
	        }else{
	        	docEl.style.fontSize = 20 * (docEl.clientWidth/375) + 'px';
	        }
//			var myfontSize = 20 * (docEl.clientWidth/375);
//			docEl.style.fontSize = myfontSize + "px";
	    };
	//绑定浏览器缩放与加载时间
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
})();
