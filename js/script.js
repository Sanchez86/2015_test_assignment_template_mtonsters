 
$(document).ready(function() {
	
	$('.myFa').on('click', function(){
	  $(this).myAccordion()
	})
	$('.accordionHeader').on('click', function(){
	  $(this).myAccordion()
	})
	$('.accordionHeader').on('mouseover', function(){
	  $(this).siblings().eq(0).css('background-color','#036b7e')
	}).on('mouseout', function(){
		 $(this).siblings().css('background-color','')
	})
	
	$('.portfolio img').on('mouseover', function(){
		 $(this).siblings().css('display','block').end().on('mouseout', function(){
			  $(this).siblings().css('display','none')
		 })
	})
	$('.portfolio i').on('mouseover', function(){
		 $(this).css('display','block').end().on('mouseout', function(){
			  $(this).css('display','none')
		 })
	})
		$('.portfolio img').on('mouseover', function(){
		 $(this).siblings().css('display','block').end().on('mouseout', function(){
			  $(this).siblings().css('display','none')
		 })
	})
	
	$('.portfolio .grid_4').on('mouseover', function(){
		 $(this).css('box-shadow','0px 0px 30px 1px rgba(0,0,0,0.75)')
		 .on('mouseout', function(){
			  $(this).css('box-shadow','')
		 })
	})
	
	
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if(st < 320){
			$('.services .row').css({
			'transform':'translate(0%,'+ st/20 +'%)'
		})
		}else if(st >= 320){
			st="";
		}
	})
	
	
	
  $("#owl-example").owlCarousel({
	  autoPlay : false,
	  slideSpeed : 100,
	  paginationSpeed : 1000,
	  singleItem:true

  });
			
	$('.fancybox').fancybox();

	$(".fancybox-effects-a").fancybox();
 
  $("#owl-example2").owlCarousel({
	  autoPlay : false,
	  slideSpeed : 100,
	  paginationSpeed : 1000,
	  singleItem:true

  });
  $(".container").fitVids();
	
	$('#diagram-id-1').circleDiagram({
		"percent": "92%",
		"size": "140",
		"borderWidth": "15",
		"bgFill": "#d7ebef",
		"frFill": "#a5d2da",
		"textSize": "36",
		"textColor": "#3a494c"
	});
	$('#diagram-id-2').circleDiagram({
		"percent": "86%",
		"size": "140",
		"borderWidth": "15",
		"bgFill": "#d4edd9",
		"frFill": "#9bd6a7",
		"textSize": "36",
		"textColor": "#3a494c"
	});
	$('#diagram-id-3').circleDiagram({
		"percent": "78%",
		"size": "140",
		"borderWidth": "15",
		"bgFill": "#fde4bf",
		"frFill": "#fbbe67",
		"textSize": "36",
		"textColor": "#3a494c"
	});
	$('#diagram-id-4').circleDiagram({
		"percent": "75%",
		"size": "140",
		"borderWidth": "15",
		"bgFill": "#72acb7",
		"frFill": "#036b7e",
		"textSize": "36",
		"textColor": "#3a494c"
	});
	
});


// arrow up
  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn(800);
      else $('#top').fadeOut(800);
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
// end arrow up

