$(function(){
	function name(num){
		$.get('../json/categories.json', function(response){
			for(var j=0;j<response[0].length;j++){
				$(".categories-span-left").eq(j).html(response[num][j].left)
				$(".categories-span-right").eq(j).html(response[num][j].right)
			}
		})
	}
	$(".categories-prev").on("tap",function(){
		var num=parseInt($(".categories-num").html());
		if(num<6){
			$(".categories-next").removeClass("categories-current").addClass("categories-current");
		}
		if(num>2){
			$(".categories-prev").removeClass("categories-current").addClass("categories-current");
			$(".categories-num").html(num-1);
			name(num-2);
		}else if(num===2){
			$(".categories-num").html(num-1);
			name(num-2);
			$(".categories-prev").removeClass("categories-current");
		}else{
			alert("已经是第一页了")
		}
	})

	$(".categories-next").on("tap",function(){
		var num=parseInt($(".categories-num").html());
		if(num>0){
			$(".categories-prev").addClass("categories-current");
		}
		if(num<5){
			$(".categories-next").addClass("categories-current");
			$(".categories-num").html(num+1);
			name(num);
		}else if(num===5){
			$(".categories-num").html(num+1);
			name(num);
			$(".categories-next").removeClass("categories-current");
		}else{
			alert("已经是最后页了");
		}
	})

})