(function(){

  "use strict"
  

  	// backstretch slider documentation is provided for further information

	$(".header").backstretch([
	    "assets/header/header1.jpg",
	    "assets/header/header2.jpg"
	  ], {
	      fade: 750,
	      duration: 4000
	  });
	  $('#next').click(function(x) {
	    x.preventDefault();
	    $('.header').data('backstretch').next();
	  });
	  $('#prev').click(function(x) {
	    x.preventDefault();
	    $('.header').data('backstretch').prev();
  	});


	// magnific popup plug in for filterable galleries 
	 
  	$('.parent-container').magnificPopup({
		  delegate: 'a', // child items selector, by clicking on it popup will open
		  type: 'image'
		  // other options
	});


	// navigation scroll/swing code you can customize it 

	$(".scroll").on('click',function(event){
	     event.preventDefault();
	     //calculate destination place
	     var dest=0;
	     if($(this.hash).offset().top > $(document).height()-$(window).height()){
	          dest=$(document).height()-$(window).height();
	     }else{
	          dest=$(this.hash).offset().top - 60;
	     }
	     //go to destination
	     $('html,body').animate({scrollTop:dest}, 1000,'swing');
	 });


	// drop down navigation menu effect

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});


	// wow plugin 

 	new WOW().init();

 	
})();