console.log('Bienvenue sur Anytutorin ! Tu es développeur et veux travailler avec nous ? Contactes nous sur : jobs@anytutor.in !');

/*
* Vertical scrolling effect
*/
$(function(){
	'use strict';
	$('.lead').bind('click',function(event){
        var $anchor = $(this);
		$('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 700);
		event.preventDefault();
	});
  
});
