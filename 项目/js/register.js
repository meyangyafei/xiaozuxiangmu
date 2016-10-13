$(function(){	
	//点击input清除里面的value
	$(".mail-tet").focus(function(){
		$(this).val("")
	})
	//失去光标回复原来的value
	$(".mail-tet").blur(function(){
		$(this).val("电子邮箱")
	})
	//注册页效果
	$(".help-list a").each(function(){
		$(this).hover(function(){
			$(this).css({"color":"#911d34"})
		},function(){
			$(this).css({"color":"#666"})
		})
	})
	
	
	
	//验证邮箱  结尾必须以@XX.com结尾
    var reg1 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.com$/ ;

    $(".input-add").on(  {
      blur: function () {
          if(!(reg1.test($(this).val()))){
              //alert("用户名格式不对")
              var $p1=$(".error_un")
              $p1.text("邮箱格式不正确!").css({"color":"red"});
          } else {
          	$(".error_un").remove();
          } 
      },
      focus: function () {
      }  
        
    })
    
    
    //cookie
	$(".now-reg").on({
		click: function () {
            var name = $(".input-add").val(); //获取用户名
            var password = $(".add-pass").val(); // 获取密码
            var p_value = CookieUtil.getCookie(name); // 从cookie查找用户名对应的密码            
            if(p_value!==password){
               var $p2=$(".error_pw");
              $p2.text("密码不正确!").css({"color":"red"})             
            }
            else if(password==p_value){           
                location.href="index.html";
                $(".now-reg a").attr({"href":"homepag首页.html"})
            }
        }
    })
	
	//点击登录这两个字 跳转登录首页
	$(".privip a").on({
		click:function(){
			$(this).attr({"href":"register.html"})
		}
	})
	
	//新会员注册验证
	$(function(){
		$('.repl a').on('click',function(){
			var $random=Math.floor(Math.random())
			$(".yanzheng-pic").attr({src:'http://www.mallvv.com/shop/index.php?act=seccode&op=makecode&nchash='+ $random})
		})
	})
	$("#btn").on({
		click:function(){
			var $tet=$(".title-name option:selected").text();
			//console.log($tet)
			var $hintlist=$(".hint-list");
			if($tet==="--"){
				$(".li1").text("*请选择称谓").css({"color":"red"});
			}else {
				$(".li1").text("")
			}
			var $name=$(".name").val();
			if($name===""){
				$(".li2").text("*请填写您的姓名").css({"color":"red"});
			}else{
				$(".li2").text("")
			}
			var $contry=$(".contrys option:selected").text();
			//console.log($contry);
			if($contry==="-请选择-"){
				$(".li3").text("*请选择所在地").css({"color":"red"});
			}else {
				$(".li3").text("")
			}
			//邮箱格式验证 两次输入必须一致
			var reg1 = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+\.com$/ ;
			if(!(reg1.test($(".dy-addr1").val()))){            
	              $(".li4").text("*邮箱格式不正确!").css({"color":"red"});
         	 } else if(($(".dy-addr2").val())!==($(".dy-addr1").val())){
          		$(".li4").text("*两次邮箱必须一致!").css({"color":"red"});
         	 }else{
         	 	$(".li4").text("");
         	 }
			
			//登录密码 以字母开头，长度在6~18之间，只能包含字母、数字和下划线
   			 var reg2 = /^[a-zA-Z0-9]\w{5,11}$/;			        
			  if (!(reg2.test($(".pass1").val()))){
			      $(".li5").text("*密码格式不正确!").css({"color":"red"});
			  }
			  else if(($(".pass1").val())!==($(".pass2").val())){
			  		$(".li6").text("*两次密码不一致!").css({"color":"red"});
			  }else{
			  	$(".li5").text("");
			  	$(".li6").text("");
			  }
			  //同意条款判断
			  if(($("input[type='checkbox']").prop("checked"))===false){
			  		$(".li7").text("*必须同意条款!").css({"color":"red"});
			  }else{
			  		$(".li7").text("");
			  }
		
		}
	})
			

})
