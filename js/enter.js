$(function(){
	var $enterBox_right_nav=$('.enterBox_right_nav');
	
	$enterBox_right_nav.on('click','span',function(){
		$enterBox_right_nav.find('span').css({
											marginTop:0,
											border:'1px solid #cccccc',
											marginTop:4,
											padding:'6px 0 10px 0',				
			
											});
		$(this).css({
					marginTop:0,
					borderTop:'2px solid #cc0000',
					borderBottom:'none',
					paddingTop:10,
					});
		
		
	});

});
$(function(){
	var $yanzhengma=$('.yanzhengma');
		$yanzhengma.text(showCode());
				$yanzhengma.on('click',function(){
					
					$yanzhengma.text(showCode());
				})
				function showCode(){
					var let = new Array('a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9');
					var index;;
					var str='';
					for(i=0;i<4;i++){
						index=parseInt(Math.random()*let.length)
						str+=let[index];
					}
					return str;
				};
	
	
});
//登录框的提醒
$(function(){
	var $enterMsg=$('.enterMsg');
	$enterMsg.on('focus','input',function(){
		$(this).parent().next().children('i').show();
	}).on('blur','input',function(){
		$(this).parent().next().children('i').hide();
	});
	
	
});
//获取cookie
$(function(){
	var $enter_userCode=$('.enter_userCode');
	var $yanzhengma=$('.yanzhengma');
	var $remind1=$('.remind1');
	var $remind3=$('.remind3');
	var yanzhengma=$yanzhengma.text();

	$enter_userCode.bind('blur',function(){
		
		if($enter_userCode.val()!=yanzhengma){
			$remind3.show().css('color','red').text('验证码有误');
			//console.log($remind3.text());
			//return false;
			
		}else{
			$remind3.hide().css('color','#999999').text('请输入验证码');
			$('.loginBtn').on('click',function(){
				console.log(document.cookie);
			var cookie=document.cookie.split('; ');
			console.log(cookie);
			if(cookie!=''){
				$.each(cookie,function(idx,val){
					var  info= JSON.parse(val.split('=')[1]);
					console.log(info);
					if($('.enter_userName').val()==info.name && $('.enter_userKey').val()==info.pass){
							location.href = "../index.html";
							return false;
					}else{
						$remind1.show().css('color','red').text('用户名或密码错误');
						return false;
					}
				});
				
			}else{
				$remind1.show().css('color','red').text('用户名或密码错误');
						return false;
				
			}
			
		
			});
			
		}
		
		
	});
	
	
});
	



















