$(document).ready(function() {


	// $("#toggle_mnu").click(function(){
	// 	$(this).toggleClass("on");
	// 	$("#menu").slideToggle();
	// 	return false;
	// });
	$('.main_carousel .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplayTimeout: 4000,
	    autoplaySpeed:1400,
	    smartSpeed: 600,
	    pagination:true,
	    nav:true,
	    navText: ['<img src="../img/prev.png"/>','<img src="../img/next.png"/>'],
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1,
	            autoplay: false,
	        },
	        700:{
	            items:1,
	            autoplay: true,
	        }
	    }
	});
	$('.parther .owl-carousel').owlCarousel({
	    loop:true,
	    items: 5,
	    margin:10,
	    autoplayTimeout: 4000,
	    autoplaySpeed:1400,
	    smartSpeed: 600,
	    pagination:false,
	    nav:false,
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2,
	            autoplay: true,
	        },
	        700:{
	            items:3,
	            autoplay: true,
	        },
	        1200:{
	        	items: 5,
	        	autoplay: true,
	        }
	    }
	});
	// $("input, select, textarea").jqBootstrapValidation();

	$(".search").click(function(){
		$(".overlay-search").toggleClass("focus-search");
		$("#search-inner").focus();

	});
	$(".search-close").click(function(){
		$(".overlay-search").removeClass("focus-search");
	});






});



