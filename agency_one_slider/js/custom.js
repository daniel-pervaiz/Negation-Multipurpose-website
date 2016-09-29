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

	// bootstrap tab panes for portfolio items

	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$('.buttonsActiveItem').children('li').on('click',function(){
		$(this).addClass('activeButton').siblings().removeClass('activeButton');
	});

	// magnific pop up for gallery

	$('.parent-container').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image'
	  // other options
	});
	
	$('.gallery').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});

	 // animate numbers fun facts you can customize it

  var targetFunFactsAnimationNumbers = $('#video').offset().top + 400;

  $(document).scroll(function(){

    if($(this).scrollTop() > targetFunFactsAnimationNumbers)
    {
      $('#animate1').animate(  // animate numbers 
        {someValue: 970}, 
        {
        duration: 1000,
        easing:'swing',
        step: function() {
            $('#animate1').text(Math.round(this.someValue));
        }
      });
      $('#animate2').animate(  // animate numbers 
          {someValue: 720}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animate2').text(Math.round(this.someValue));
          }
      });
      $('#animate3').animate(  // animate numbers 
          {someValue: 450}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animate3').text(Math.round(this.someValue));
          }
      });
      $('#animate4').animate(  // animate numbers 
          {someValue: 24}, 
          {
          duration: 1000,
          easing:'swing',
          step: function() {
              $('#animate4').text(Math.round(this.someValue));
          }
      });
    }
  });

	// wow plugin 

	new WOW().init();
		
})();