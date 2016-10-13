$(function(){
	//卷帘效果
		//鼠标滑过显示
	$("#select-1").mouseenter(function(){
		$(".contry-list").stop(true,false).slideDown('slow');
	})
		//鼠标离开隐藏
	$("#select-1").mouseleave(function(){
		setTimeout(function(){
			$(".contry-list").stop(true,false).slideUp('5000');
		},1000)
	})
		//鼠标滑过显示
	$("#select-2").mouseenter(function(){
		$(".language").stop(true,false).slideDown('slow');
		
	})
		//鼠标离开隐藏
	$("#select-2").mouseleave(function(){
		
		$(".language").stop(true,false).slideUp('5000');
		
	})
	//遍历contry-list线面的a加边框
	var $contrylist=$(".contry-list a");
	//console.log($contrylist);
	
	 $contrylist.each(function(){
	 	$(this).hover(function(){
	 		$(this).css('border','1px solid blue');
	 	},function(){
	 		$(this).css('border','none');
	 	})
	 })
	//遍历language里面的a加边框
	var $languagea=$(".language a");
	$languagea.each(function(){
		$(this).hover(function(){
			$(this).css('border','1px solid blue')
		},function(){
			$(this).css('border','none');
		})
	})
	//遍历head-right里面的a加字体颜色
	$(".head-right a").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"#911d34"})
		},function(){
			$(this).css({"color":"#93846f"})
		})
	})
	//myshopping里面的a-4里面的b字体颜色变化
	$(".a-4 b").hover(function(){
		$(this).css({"color":"#911d34"})
	},function(){
		$(this).css({"color":"#bdb7b1"})
	})
	//myshopping    rgb发生变化
	$("#myshopping").hover(function(){
		$(this).css({"background":"rgb(156,146,127)","color":"rgb(0,0,0)"})
	},function(){
		$(this).css({"background":"rgb(147,132,111)"})
	})
	//nav里面的li插入图片
	var $item=$(".nav > li >a");
	$item.each(function(){
		$(this).hover(function(){
			
			$(this).css({"background":"url(img/dian.jpg) no-repeat right top","color":"#666"})
		},function(){
			$(this).css({"background":"none","color":"#fff"})
		})
	})
	
	//点击input清除里面的value
	$(".search-key").focus(function(){
		$(this).val("")
	})
	//失去光标回复原来的value
	$(".search-key").blur(function(){
		$(this).val("输入关键字 或 货品编号")
	})
	
	//鼠标滑过更换搜索按钮
	$("#seach-img").mouseenter(function(){
		$(this).attr({"src":"img/search_button_02.gif"})
	})
	//鼠标离开变回原来的按钮
	$("#seach-img").mouseleave(function(){
		$(this).attr({"src":"img/search_button_01.gif"})
	})
	
	//preview里面的a hover变色   离开变回原来的颜色
	$(".preview > a").hover(function(){
		$(this).css({"color":"#911d34"})
	},function(){
		$(this).css({"color":"#666"})
	})
	//hot-seach里面的A hover变色  离开变回原来的颜色
	$(".hot-seach > a").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"#911d34"})
		},function(){
			$(this).css({"color":"#666"})
		})
	})
	
	//dd-text 里面的a字体 滑过变色
	$(".dd-text > a").hover(function(){
		$(this).css({"color":"#911d34"})
	},function(){
		$(this).css({"color":"#666"})
	})
	
	//seemore-2 字体变色
	$(".seemore-2 > a").hover(function(){
		$(this).css({"color":"#911d34"})
	},function(){
		$(this).css({"color":"#666"})
	})
	
	//li里面的a 变色
	$(".seach-tet li a,.seemore a,.links-1 a,.cation dd a,.footer-p a,.privip a").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"#911d34"})
		},function(){
			$(this).css({"color":"#666"})
		})
	})
	
	//鼠标滑过更换按钮
	$(".dz-btn").mouseenter(function(){
		$(this).attr({"src":"img/login_button_02.gif"})
	})
	//鼠标离开变回原来的按钮
	$(".dz-btn").mouseleave(function(){
		$(this).attr({"src":"img/login_button_01.gif"})
	})
	
	
	
	

})












