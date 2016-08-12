$(function(){
		$menWearList=$('#menWearList');
		$menWear_contentBox=$('.menWear_contentBox');
		$menWear_contentBox.css({left:($(window).width()-1200)/2});
		$(menWearList).on('mouseenter',function(){
			$menWear_contentBox.show();
		}).on('mouseleave',function(){
			$menWear_contentBox.hide();
			
		});
		//移除三角
		var idx;
	$('.contentLeft').on('mouseenter','li',function(){
		idx=$(this).index();
	
		$menWear_contentBox.show();
		var $arrow=$('<div/>').addClass('arrow');
		var $inner=$('<div/>').addClass('arrow inner');
		$arrow.appendTo($(this));
		$inner.appendTo($(this));
		$(this).removeClass('rightArrow');
		$('.details').show().children('li').hide().eq(idx).show();
	}).on('mouseleave','li',function(){
		$(this).addClass('rightArrow').find('div').remove();
		$('.details').hide();
		$menWear_contentBox.hide();
	});
	var $contentLeft;
	$('.details').on('mouseenter',function(){
		$menWear_contentBox.show()
		$contentLeft=$('.contentLeft').children('li').eq(idx)
		var $arrow=$('<div/>').addClass('arrow');
		var $inner=$('<div/>').addClass('arrow inner');
		$arrow.appendTo($contentLeft);
		$inner.appendTo($contentLeft);
		 $contentLeft.removeClass('rightArrow');
		$(this).show();
	}).on('mouseleave',function(){
		
		$contentLeft.addClass('rightArrow').find('div').remove();
		$(this).hide();
		$menWear_contentBox.hide();
	});
});
	
//男装页面分类
$(function(){
	//获取页面元素
	$menWear_show_left=$('.menWear_show_left');
	$menWear_show_left.on('click','em',function(){
		//初始化样式
		$(this).parent().siblings('li').find('em').removeClass('triangle_myDown'); //重置除点击以外的em的样式
		$(this).parent().siblings('li').find('dl').hide();						//隐藏所有的dl					
		$(this).toggleClass('triangle_myDown').next('a').toggleClass('myHover').siblings('dl').toggle();
	});
	$menWear_show_left.on('click','dt',function(){
		if($(this).text()=='+'){
			$(this).text('-').css('color','#000');
		}else{
			$(this).text('+').css('color','#999999')
		}
		$(this).next('dd').children('a').toggleClass('myHover');
	});
});		
//品牌收起弹出

$(function(){
	$more=$('.more');
	
	$more.on('click',function(){
		var _height=$(this).prev('div').css('height');
		if(_height=='32px'){
			$(this).prev('div').css('height','auto');
		}else{
			$(this).prev('div').css('height','32px')
		}
		
	});
		
});


$(function(){
	//塞选弹窗
	var $chooseStyle=$('.chooseStyle');
	var $chooseSize=$('.chooseSize');
	var index;
	var $brand=$('.brand');
	$chooseStyle.on('mouseenter','i',function(){
		var _height=$brand.css('height');
		var _heihgtNew=84+parseInt(_height);
		
		index=$(this).index();
		$(this).children('span').hide();
		$chooseSize.show().css('top',_heihgtNew+'px').find('ul').hide().eq(index-1).show();
	}).on('mouseleave','i',function(){
		$chooseSize.hide().find('ul').hide();
		$(this).children('span').show();
	});
	$chooseSize.on('mouseenter',function(){
		$chooseStyle.find('i').eq(index-1).children('span').hide();
		$chooseSize.show().find('ul').hide().eq(index-1).show();
	}).on('mouseleave',function(){
		$chooseSize.hide().find('ul').hide();
		$chooseStyle.find('i').children('span').show();
	});
	

});


$(function(){
	//列表页商品预览
	//获取页面元素
	$showPic=$('.showPic');
	var __src=$showPic.attr('src');
	$bigPic=$('.bigPic');
	$bigPic.on('mouseenter','img',function(){
		var _src=$(this).attr('src');
		$(this).css('borderColor','red');
		$showPic.attr('src',_src);
	}).on('mouseleave','img',function(){
		$(this).css('borderColor','#999999');
		$showPic.attr('src',__src);
	});
	
});
$(function(){
	var $brandTitle=$('.brandTitle');
	//var $arrows_down=$('.arrows_down');
	//var $arrows_line=$('.arrows_line');
	$brandTitle.on('mouseenter','li',function(){
		$(this).find('b').css('borderTop','5px solid #fff');
		$(this).find('em').css('background','#fff');
	}).on('mouseleave','li',function(){
		$(this).find('b').css('borderTop','5px solid #000');
		$(this).find('em').css('background','#000');
	});
	
	
})	
		
	
	

