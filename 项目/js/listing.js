$(function(){
	//滑过字体变色
	$(".good-container .goods-tets li a,span,.safe a").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"#911d34"})
		},function(){
			$(this).css({"color":"#666"})
		})
	})
	
	$(".exop img").hover(function(){
		$(this).attr({"src":"img/write_a_review_02.gif"})
	},function(){
		$(this).attr({"src":"img/write_a_review_01.gif"})
	})
	
	$(".cart-pic img").hover(function(){
		$(this).attr({"src":"img/add_to_cart_02.gif"});
	},function(){
		$(this).attr({"src":"img/add_to_cart_01.gif"});
	})
	
	
	
	$(".meili p a").hover(function(){
		$(this).css({"text-decoration":"underline"})
	},function(){
		$(this).css({"text-decoration":"none"})
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})


















































