$(function(){
	var isleft=true;
	leftmove();
	setInterval(function(){
		if(isleft===true){
			leftmove()
		}else{
			rightmove()
		}
	},3000)
	function leftmove(){
		$(".items-banner-list").animate({left:'-100%'},1000);
		isleft=false;
	}
	function rightmove(){
		$(".items-banner-list").animate({left:0},1000);
		isleft=true;
	}
})
