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
			$(this).css({"color":"red"})
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
	
	
	
	//轮播
	window.onload=function(){
		var 
			oBox 		  = $('container'),
			oFlashList= $('flash-list'),
			aListLi   = byTagName(oFlashList, 'li'),
			oFlashBtn   = $('flash-btn'),
			aBtnA   = byTagName(oFlashBtn, 'a'),
			oDirectionBtn = $('direction-btn'),
			oLeftBtn = $('left-btn'),
			oRightBtn  = $('right-btn'),
			iCurIndex = 0, // 默认显示的下标
			oTimer  = null; // 保存定时器的返回值
		// 给所有的小按钮添加click事件
		for(var i = 0; i < aBtnA.length; i++) {
			aBtnA[i].index=i;
			aBtnA[i].onclick = function () {
				iCurIndex=this.index;
				move(iCurIndex);
			}
		}
		//添加enter事件
		oBox.onmouseenter=function () {
			clearInterval(oTimer);
			setStyle(oDirectionBtn, {display:'block'});
		}
		
		//添加leave事件
		oBox.onmouseleave= function () {
			autoMove();
			setStyle(oDirectionBtn, {display:'none'});
		}
		//添加右侧onclick事件
		oRightBtn.onclick=function(){
			iCurIndex++;
			if(iCurIndex===aListLi.length){
				iCurIndex=0;
			}
			move(iCurIndex)
		}
	//添加左侧onclick事件
		oLeftBtn.onclick=function(){
			iCurIndex--;
			if(iCurIndex<0){
				iCurIndex=aListLi.length-1;
			}
			move(iCurIndex);
		}
		//自动轮播
		oTimer=setInterval(function () {
				move(iCurIndex);
			},1000);
	
	
	
	
		// 通过ID获取DOM对象
		function $(id) {
			return document.getElementById(id);
		}
	
		// 通过节点名称获取DOM列表
		function byTagName(obj, tagName) {
			return obj.getElementsByTagName(tagName);
		}
	
		// 封装修改样式
		function setStyle(obj, oTarget) {
			for(var sAttr in oTarget) {
				obj.style[sAttr]=oTarget[sAttr];
			}
		}
	
		// 每一个li做动画的过程
		function move(iIndex) {
			// 让其它的li都隐藏掉
			for(var j = 0; j < aListLi.length; j++) {
				(function (obj) {
					timeMove(obj, {opacity:0}, Tween.Linear, 200, function () {
						setStyle(obj, {display: 'none'});
					});
				})(aListLi[j]);
	
				// 默认去掉所有按钮的className
				aBtnA[j].className = '';
			}
			// 显示当前的li
			setStyle(aListLi[iIndex], {display: 'block'});
			timeMove(aListLi[iIndex], {opacity:100}, Tween.Linear, 200);
	
			// 当前按钮添加className
			aBtnA[iIndex].className = 'active';
		}
	
		// 往右运动
		function rightMove() {
			iCurIndex++;
	
			// 右侧临界点判断
			if(iCurIndex === aListLi.length) {
				iCurIndex = 0;
			}
			move(iCurIndex);
		}
	
		// 自动轮播的函数
		function autoMove() {
			oTimer=setInterval(function () {
				rightMove();
			},3000);
		}
	}
	//show-container 滑过RGB变化
	$(".new-show > .show-container").each(function(){
		$(this).hover(function(){
			$(this).css({"background":"rgb(156,146,127)","color":"rgb(0,0,0)"})
		},function(){
			$(this).css({"background":"rgb(147,132,111)","color":"rgb(147,132,111)"})
		})
	})
	//container-pic 里面的a 滑过变色 离开恢复
	
	//console.log($(".contant-pic >a"))
	$(".contant-pic >a").each(function(){
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
	$(".seach-tet li a,.seemore a,.links-1 a,.cation dd a,.footer-p a").each(function(){
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
	
	
	//点击input清除里面的value
	$(".mail-tet").focus(function(){
		$(this).val("")
	})
	//失去光标回复原来的value
	$(".mail-tet").blur(function(){
		$(this).val("电子邮箱")
	})
	




























	
})
