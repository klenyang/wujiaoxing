$(function(){
	var $car_bagList5=$('.car_bagList5');
	var $car_bagList6=$('.car_bagList6');
	var $carCounts=$('.carCounts');
	var $unitPrice=$('.unitPrice');
	

	//获取cookie
	
	var cookie=document.cookie.split('; ');
			
			$.each(cookie,function(idx,val){
					var  info= JSON.parse(val.split('=')[1]);
					
					
					$unitPrice.text(info.price);//单价
					
					$('.colorSelect').text(info.color);//颜色
					$('.sizeSelect').text(info.size);//尺码
					$carCounts.val(info.counts);//数量
					
			});
		//var price=$unitPrice.text();
		//console.log(price);
	showNum();
	$car_bagList5.on('click','span',function(){
		var _counts=Number($carCounts.val());
		
		var ord=Number($(this).attr('value'));
		_counts+=ord;
		$carCounts.val(_counts);
		showNum();
		//console.log($car_bagList6.text());
	});
	$carCounts.on('input',function(){
		showNum();
	});
	function showNum(){
		if($carCounts.val()>50){
			$carCounts.val(50);
		}
		if($carCounts.val()<1){
			$carCounts.val(1);
		}
		var price=$unitPrice.text();
		console.log(price);
		$('.car_counts').text($carCounts.val());
		$('.total').text(price*$carCounts.val());
		$('.totalprice').text('￥'+price*$carCounts.val());
		$car_bagList6.text('￥'+price*$carCounts.val());
		
	}
});