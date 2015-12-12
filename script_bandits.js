$(document).ready(function(){
	$(".calendar div").hover(function(){
		$(".calendarHover").animate({height: 150}, 150, 'easeInBack');
		},function(){
		$(".calendarHover").animate({height: 0},0);   // эффект выпадения дополнительного блока календаря
	})

	$('.carousel').carousel({   // интервал переключение слайдов
  	interval: 3500
})
})
