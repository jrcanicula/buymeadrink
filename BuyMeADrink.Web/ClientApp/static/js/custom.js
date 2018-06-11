/*
===========================================================================
 EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Template Name   : Mandy - Responsive Personal Portfolio Template
 Author          : mital_04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Copyright (c) 2017 - Mandy - Responsive Personal Portfolio Template
===========================================================================
*/

(function($){
	"use strict";
	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
		$(window).scroll(function(){
			var HscrollTop  = $(window).scrollTop();  
		    if (HscrollTop >= 100) {
		       $('header').addClass('fixed-header');
		    }
		    else {
		       $('header').removeClass('fixed-header');
		    }
		});
	/* ---------------------------------------------- /*
	* Header End
	/* ---------------------------------------------- */

	/* ---------------------------------------------- /*
	 * Pre Loader
	/* ---------------------------------------------- */
	 var $window = $(window);
	 $window.load(function () {
        $("#loading").fadeOut("slow");
   	});

	 /* ---------------------------------------------- /*
	 * Nav Bar
	/* ---------------------------------------------- */
	$('.navbar').singlePageNav({
        offset: 50,                 // Offset from top
        currentClass: 'current',    // Class added to menu link when section is active
        currentThreshold: 500,      // Threshold for triggering current section action
        duration: 500,              // Duration of scroll animation in milliseconds
        effect: 'swing'
    });

    /* ---------------------------------------------- /*
	  Start Counter JS
	 /* ---------------------------------------------- */

	var a = 0;
	$(window).scroll(function() {
	  var oTop = $('.counter-box').offset().top - window.innerHeight;
	  if (a == 0 && $(window).scrollTop() > oTop) {
	    $('.count').each(function () {
	          $(this).prop('Counter',0).animate({
	              Counter: $(this).text()
	          }, {
	              duration: 4000,
	              easing: 'swing',
	              step: function (now) {
	                  $(this).text(Math.ceil(now));
	              }
	          });
	      });
	    a = 1;
	  }
	});


	 $(document).ready(function() {
	 	/* ---------------------------------------------- /*
		 * Screenshots Slider
		/* ---------------------------------------------- */
		$('.app-screenshots-slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    center:true,
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
		})

		/* ---------------------------------------------- /*
		 * Desktop Screenshots Slider
		/* ---------------------------------------------- */
		$('.desk-screenshots-slider').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:false,
		    center:true,
		    responsive:{
		        0:{
		            items:2
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:2
		        }
		    }
		})

		/* ---------------------------------------------- /*
		 * Testimonial Slider
		/* ---------------------------------------------- */
		$('.testimonial-slider').owlCarousel({
		    loop: true,
		    margin: 10,
		    nav:false,
		    items:2,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:2
		        }
		    }
		})

		/* ---------------------------------------------- /*
		 * Blog Slider
		/* ---------------------------------------------- */
		$('.blog-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav:false,
		    center:true,
		    items:1
		})
		
	 }); // Document Get Ready End here
	 
})(jQuery);