
$(function(){
	var $share=$('.share');
	var $popupWin=$('.popupWin');
	$share.on('mouseenter',function(){
		$popupWin.show();
	}).on('mouseleave',function(){
		$popupWin.hide();
	});
	$popupWin.on('mouseenter',function(){
		$popupWin.show();
	}).on('mouseleave',function(){
		$popupWin.hide();
	});
});
$(function(){
	var $brandInfo_right=$('.brandInfo_right');
	var $vip=$('.vip');
	$brandInfo_right.on('mouseenter','em',function(){
		$vip.show();
	}).on('mouseleave','em',function(){
		$vip.hide();
	});
	$vip.on('mouseenter',function(){
		$vip.show();
	}).on('mouseleave',function(){
		$vip.hide();
	});
});
//点击更换图片
$(function(){
	var $mainImg=$('.mainImg');
	var $magnify_show_img=$('.magnify_show_img');
	var $colorList=$('.colorList');
	var $moreStyle=$('.moreStyle');
	$colorList.on('click','img',function(){
		$colorList.find('img').css('border','1px solid #dcdcdc');
		$(this).css('border','1px solid #f8584f');
		var _src=$(this).attr('value');
		var _large_src=$(this).attr('large_src');
		$colorList.find('b').text($(this).attr('title'));
		$mainImg.attr('src',_src);
		$magnify_show_img.attr('src',_large_src);
	});
	$moreStyle.on('mouseenter','img',function(){
		
		var _show_src=$(this).attr('show_src');
		var _large_src=$(this).attr('large_src');
		$mainImg.attr('src',_show_src);
		$magnify_show_img.attr('src',_large_src);
		
	});
	
});
//点击列表切换图片

$(function(){
	var $sizeList=$('.sizeList');
	$sizeList.on('click','i',function(){
		$sizeList.find('i').css({border:'1px solid #dcdcdc',padding:5});
		$(this).css({border:'2px solid #f8584f',padding:4});
		var str=$(this).text();
		//console.log($(this).attr('title'));
		$sizeList.find('b').text(str);
	
	})
});
//商品件数
$(function(){
	var $buyPcs=$('.buyPcs');
	var $counts=$('.counts');
	var $errorMsg=$('.errorMsg');
	$buyPcs.on('click','i',function(){
		var _counts=Number($counts.val());
		
		var ord=Number($(this).attr('value'));
		_counts+=ord;
		$counts.val(_counts);
		if(_counts<=0){
			$errorMsg.text('对不起，数量最少为1件。');
			$errorMsg.show().delay(3000).hide(0);
			$counts.val(1);
		}
		if(_counts>50){
			$errorMsg.text('对不起，数量最多为50件。');
			$errorMsg.show().delay(3000).hide(0);
			$counts.val(50);
		}
	})
});

$(function(){
	var $fixedNav=$('.fixedNav');
	var _top=$fixedNav.offset().top;
	$(window).on('scroll',function(e){
		if($(this).scrollTop()<=_top){
			$fixedNav.css({paddingLeft:159,width:890,left:0,top:0}).find('li').eq(0).hide();
			$fixedNav.find('li').eq(4).hide();
			
		}
		
		if($(this).scrollTop()>_top){
			$fixedNav.css({paddingLeft:0,width:1200,left:-200}).find('li').show();
			$fixedNav.css({top:$(this).scrollTop()-_top});
		}
		
		
	})
	
	
});

//顶部悬浮栏的快速定位
$(function(){
	var $fixedNav=$('.fixedNav');
	var $evaluation=$('.evaluation');
	var $infoBody=$('.infoBody');
	var scrollTop=$(window).scrollTop();
	var _top=$fixedNav.offset().top;
	$fixedNav.on('click','li',function(){
		var index=$(this).index();
		switch(index){
			case 1: $(window).scrollTop(_top);break;
			case 2: $(window).scrollTop($evaluation.offset().top-80);break;
			case 3: $(window).scrollTop($infoBody.offset().top-70);break;
			case 4: $('html,body').animate({scrollTop:200});break;
		}
	
	})
});
//尺码选择定位
$(function(){
	var $sizeList=$('.sizeList');
	var $brandSize=$('.brandSize');
	$sizeList.on('click','span',function(){
		$(window).scrollTop($brandSize.offset().top-80);
	
	})
});
//放大镜
$(function(){
	var $magnify=$('.magnify');
	var $magnify_glass=$('.magnify_glass');
	var $magnify_show_img=$('.magnify_show_img');
	var $magnify_show=$('.magnify_show');
	$magnify.on('mouseenter',function(){
		$magnify_glass.show();
		$magnify_show.show();
		
		$magnify.on('mousemove',function(e){
			var _top=e.pageY-$magnify.offset().top;
			var _left=e.pageX-$magnify.offset().left;
			var myLeft=_left-120;
			var myTop=_top-120;
			if(myLeft<0){
				myLeft=0;
			}
			if(myLeft>240){
				myLeft=240
			}
			if(myTop<0){
				myTop=0;
			}
			if(myTop>240){
				myTop=240
			}
			$magnify_glass.css({
								left:myLeft,
								top:myTop
								});
			$magnify_show_img.css({
								left:-(myLeft*1000/480),
								top:-(myTop*1000/480),
								});					
		});
	}).on('mouseleave',function(){
		$magnify_glass.hide();
		$magnify_show.hide();
	});
});

//购物车点击生成cookie
$(function(){
	$joinBag=$('.joinBag');
	$joinBag.on('click',function(){
		var price=$('.unitPrice1').text();
		var counts=$('.counts').val();
		var size=$('.sizeList_size').text();
		var color=$('.colorList_color').text();
		var obj=new Object();
		obj.price=price;
		obj.counts=counts;
		obj.color=color;
		obj.size=size;
	//	var json=JSON.stringify(obj);
		var json=JSON.stringify(obj);
		
		document.cookie=price+'='+json+';path=/';
		console.log(document.cookie);
		
	})
	
	
	
});











