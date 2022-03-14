		$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
	      console.log($(window).scrollTop())
	    if ($(window).scrollTop() > 280) {
	      $('#nav_bar').addClass('navbar-fixed');
	    }
	    if ($(window).scrollTop() < 281) {
	      $('#nav_bar').removeClass('navbar-fixed');
	    }
	  });
		var $grid = $('.grid').isotope({
		  // options
		});
		// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		var $filters = $( filters );
		$filters.on( 'click', 'button', function() {
			$filters.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
		$('.test-popup-link').magnificPopup({
			type: 'image',
			gallery:{enabled:true}
		});
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:false,
			dots:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:2
				}
			}
		})