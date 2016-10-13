$(function(){
	function name(num){
		$.get('../json/kitchen.json', function(response){
			for(var j=0;j<response[0].length;j++){
				$(".kitchen-p1").eq(j).html(response[num][j].name)
				console.log(response[num][j].url)
				$(".kitchen-i1").eq(j).css("background-image",'url('+response[num][j].url+')')
			}
		})
	}
	$(".kitchen-li").on("tap",function(){
		var index=$(this).index();
		$(".kitchen-li").children().removeClass("kitchen-a-current");
		$(this).children().addClass("kitchen-a-current");
		if(index===0){
			name(0)
		}else if(index===1){
			name(1)
		}
	})
	
})
