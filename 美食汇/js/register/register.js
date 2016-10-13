$(function(){
	/*
	 	Email或者手机号码的验证部分
	*/
	var btn1,btn2,btn3;
	function userAccount(){
		var tel   = /^1[3|5|7|8|][0-9]{9}$/;
		var email = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
		var account = $("#login_userAccount").val();
		var telRes  = tel.test(account);
		var emlRes  = email.test(account);
		if(!(telRes||emlRes)){
			$(".error_tips").html("请输入正确的email或电话号码");
			btn1=false;
		}else{
			btn1=true;
		}
	}
	/*
	 	密码部分的验证
	*/
	function password(){
		var pwVal = $("#login_password").val();
		var pwptn = /^[a-z0-9A-Z]{6,20}$/;
		var pwRes = pwptn.test(pwVal);
		if(!pwRes){
			$(".error_tips").html("输入密码不符合规则");
			btn2=false;
		}else{
			btn2=true;
		}
	}
	
	/*
	 	输入用户名不能为空
	*/
	function userName(){
		var userName = $("#login_nickName").val();
		if(userName.length==0){
			$(".error_tips").html("请输入用户名");
			btn3=false;
		}else{
			btn3=true;
		}
	}
	/*
	 	点击验证码图片换验证码 
	*/
	function replaceCode(){
		var a    = Math.floor(Math.random()*10);
		var b    = Math.floor(Math.random()*10);
		var c    = Math.floor(Math.random()*10);
		var d    = Math.floor(Math.random()*10);
		var code = ""+a+b+c+d;
		$(".reg_num_code").html(code);
	}
	$(".reg_num_code").tap(function(){
		replaceCode();
	});
	
	
	/*
	 	验证码的验证 
	*/
	function code(){
		var numCode   = $(".reg_num_code").html();
		var inputCode = $("#login_code").val();
		if(numCode!=inputCode){
			$(".error_tips").html("请输入正确的验证码");
			btn4=false;
		}else{
			btn4=true;
		}
	}
	
	
	/*
	 	点击提交按钮执行表单验证
	 	1.先验证
	 	2.判断是否应该清空提示信息
	*/
	$(".register_submit").on("tap",function(e){
		code();
		userName();
		password();
		userAccount();
		if(btn1&&btn2&&btn3&&btn4){
			$(".error_tips").html("");
		}
	});
	/*
	 	登录页面的验证
	*/
	$(".login_submit").on("tap",function(e){
		password();
		userAccount();
		if(btn1&&btn2){
			$(".error_tips").html("");
		}
	});
	
	
});




























