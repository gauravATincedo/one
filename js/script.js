var $ = jQuery.noConflict();
$(document).ready(function(){
	//Header Search Form
	$('.btn-search').click(function(){
		$('.navbar form').addClass('in');
		$('.navbar form input').focus();
	});
	$('.btn-close').click(function(){
		$('.navbar form').removeClass('in');
	});
	//Homepage Slider
	$('#home-slider').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		autoplay:2000,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});
	//initMobileMenu();
	$('ul.navbar-nav > li a .fa').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		if($(this).hasClass('fa-plus')){
			$(this).removeClass('fa-plus').addClass('fa-minus');
			$(this).parent().parent().find('> ul').slideDown();
		} else {
			$(this).addClass('fa-plus').removeClass('fa-minus');
			$(this).parent().parent().find('> ul').slideUp();
		}
	});
});
function initMobileMenu() {
	$('ul.navbar-nav > li').each(function(e){
		if($(this).find('ul').length){
			$(this).find('> a').append('<i class="fa fa-plus"></i>');
		}
	});
}