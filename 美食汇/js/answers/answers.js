$(function(){
	/*
	 	发表textarea里的内容
	*/
	$("#ans_subBtn").tap(function(){
		var $clone   = $(".ans_moreAnswers").first().clone();
		var $ans_con = $("#addAnswer").val();
		if(Number($("#addAnswer").val())==0){
			/*如果评论回答内容为空,则不发表回答内容*/
		}else{
			$(".ansTakes span",$clone).first().html("0");       //修改点赞数量
			$(".ansCon_detail",$clone).first().text($ans_con);  //修改评论内容
			$(".ansCon_info_reply",$clone).first().html("回复(0)");  //修改回复人数
			$(".ansCon_info_time",$clone).first().html("刚刚");  //修改回复时间
			$(".ansCon_info_account",$clone).html("匿名");  //修改发表人名字
			$(".ansTakes",$clone).removeClass("ans_active");   //去掉点赞样式的class
			$clone.insertAfter(".answers_addAns");
			
			$("#addAnswer").val("");
		}
	});
	
	/*
	 	点赞
	*/
	$(".answers_ques").on("tap",".ansTakes",function(){
		var $goodNum = $(this).find(".goodNum").html(); //获取点赞数量
		if($(this).hasClass("ans_active")){
			$(this).find(".goodNum").html(Number($goodNum)-1);
			$(this).removeClass("ans_active");
		}else{
			$(this).find(".goodNum").html(Number($goodNum)+1);
			$(this).addClass("ans_active");
		}
		
	});
	
	
	
	
	
});
