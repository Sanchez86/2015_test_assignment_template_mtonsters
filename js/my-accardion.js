$(function(){
	
$.fn.myAccordion = function(){
	return $(this)
	.siblings()
		.eq(1)
			.slideToggle()
	.end()
		.siblings()
			.eq(1)
				.children()
					.toggleClass('fa-minus')
	.end()
		.toggleClass('accActive')
}
});