	$(function(){
		//图片轮播
			var $showImg=$('.showImg');
			var $picList=$('.picList');
			var index=1;
			//悬停更换图片
			$picList.on('mouseenter','a',function(){
				index=$(this).index();
				console.log(index);
				showChange();
				clearInterval(myTime);
				//$(this).css('background','#fff');
			}).on('mouseleave','a',function(){    //划出继续播放
				//$(this).css('background','');
				myTime=setInterval(function(){
					index++;
					if(index>5){
						index=0;
					}
					showChange();
				},2000);
			});
			$showImg.on('mouseenter','img',function(){
				
				console.log(index);
				
				clearInterval(myTime);
				
			}).on('mouseleave','img',function(){    //划出继续播放
				myTime=setInterval(function(){
					index++;
					if(index>5){
						index=0;
					}
					showChange();
				},2000);
			});
			//图片显示
			function showChange(){
				$showImg.find('a').eq(index).siblings().fadeOut();
				$showImg.find('a').eq(index).fadeIn();
			}
			//自动播放图片
			var myTime=setInterval(function(){
					showChange();
					index++;
					if(index>5){
						index=0;
					}
					
			},2000);
			//移除三角
			var idx;
		$('.contentLeft').on('mouseenter','li',function(){
			idx=$(this).index();
			
			var $arrow=$('<div/>').addClass('arrow');
			var $inner=$('<div/>').addClass('arrow inner');
			$arrow.appendTo($(this));
			$inner.appendTo($(this));
			$(this).removeClass('rightArrow');
			$('.details').show().children('li').hide().eq(idx).show();
		}).on('mouseleave','li',function(){
			$(this).addClass('rightArrow').find('div').remove();
			$('.details').hide();
		});
		var $contentLeft;
		$('.details').on('mouseenter',function(){
			
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
		});
		
		//折扣商品移动
		//获取页面元素
		var $prevBtn=$('.prevBtn');
		var $nextBtn=$('.nextBtn');
		var $sale=$('.sale');
		//绑定事件
		$nextBtn.on('click',function(){
			$sale.find('ul').animate({left:-1200},1000);
		});
		$prevBtn.on('click',function(){
			$sale.find('ul').animate({left:0},1000);
		});
	});
	//限时抢购
	$(function(){
		var d = new Date();
		d.setDate(30);
		d.setHours(0);
		d.setMinutes(0);
		d.setSeconds(0);
		console.log(d);
		var $remainTime=$('.remainTime');
		function test(){
			var now = new Date();
			var seconds = parseInt((d.getTime()-now.getTime())/1000);
			if(seconds<0){
				console.log(444);
				clearInterval(remainTime);
				$remainTime.text('00:00:00');
			}else{
				
				var hours = parseInt(seconds/3600);
				if(hours<10){
					hours='0'+hours;
				}
				var minutes = parseInt(seconds%3600/60);
				if(minutes<10){
					minutes='0'+minutes;
				}
				seconds = seconds%60;
				if(seconds<10){
					seconds='0'+seconds;
				}
				var str = hours+":"+minutes+":"+seconds;
				$remainTime.text(str);	
			}
			
		}
		var remainTime=setInterval(test,1000);
	});		
		
			
		
	
	

