$(function(){
	$('.changeOpacity').on('mouseover','a',function(){
		$(this).stop().animate({opacity:0.7},500).stop(false,true).animate({opacity:0.8},500);
	}).on('mouseout','a',function(){
		$(this).stop().animate({opacity:1},200);	
	});
	
	//登录弹窗
	$('.head_1').on('mouseover',function(){
		$(this).addClass('head_login').css('color','#000').next('ul').css('display','block');
	}).on('mouseout',function(){
		$(this).removeClass('head_login').css('color','#999999').next('ul').css('display','none');
	});
	$('.login').on('mouseover',function(){
		$(this).css('display','block').prev('a').addClass('head_login').css('color','#000');
	}).on('mouseout',function(){
		$(this).css('display','none').prev('a').removeClass('head_login').css('color','#999999');
	});
	//邦购弹窗
	$('.mybg').on('mouseover',function(){
		$(this).addClass('head_login').css('color','#000').next('ul').css('display','block');
	}).on('mouseout',function(){
		$(this).removeClass('head_login').css('color','#999999').next('ul').css('display','none');
	});
	$('.myMessage').on('mouseover',function(){
		$(this).css('display','block').prev('a').addClass('head_login').css('color','#000');
	}).on('mouseout',function(){
		$(this).css('display','none').prev('a').removeClass('head_login').css('color','#999999');
	});
	
	//APP下载弹窗
	$('.head_app').on('mouseover',function(){
		$(this).addClass('head_login').css('color','#000').next('div').css('display','block');
	}).on('mouseout',function(){
		$(this).removeClass('head_login').css('color','#999999').next('div').css('display','none');
	});
	$('.appCode').on('mouseover',function(){
		$(this).css('display','block').prev('a').addClass('head_login').css('color','#000');
	}).on('mouseout',function(){
		$(this).css('display','none').prev('a').removeClass('head_login').css('color','#999999');
	});
	//微信弹窗
	$('.weichat').on('mouseover',function(){
		$(this).next('div').css('display','block');
	}).on('mouseout',function(){
		$(this).next('div').css('display','none');
	});
	$('.weiCode').on('mouseover',function(){
		$(this).css('display','block');
	}).on('mouseout',function(){
		$(this).css('display','none');
	});
	//搜索框提醒信息
	$('#search').on('focus',function(){
	
		if($(this).val()=='只为特别的你'){
		   $(this).val('');
		}
	}).on('blur',function(){
		if($(this).val()==''){
			$(this).val('只为特别的你');
		}
	});
	//返回顶部
	var $goTop=$('.goTop');
	
	$(window).on('scroll',function(){
		var scrollTop=$(window).scrollTop();
		var screenHight=$(window).height();
		//console.log(screenHight);
		if(scrollTop>=screenHight){
			$goTop.show();
		}else{
			$goTop.hide();
		}
		$goTop.on('click',function(){
			$('html,body').stop(false,false).animate({scrollTop:0});
			
		});
	});
	
});
		