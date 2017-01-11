$(document).ready(function() {

	$(".navbar-fixed-top").autoHidingNavbar({
		animationDuration: 400,
		hideOffset: 60
	});

	// $("#toggle_mnu").click(function(){
	// 	$(this).toggleClass("on");
	// 	$("#menu").slideToggle();
	// 	return false;
	// });
	$('.main_carousel .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplayTimeout: 4000000,
	    autoplaySpeed:1400,
	    smartSpeed: 600,
	    pagination:true,
	    nav:true,
	    autoplayHoverPause: true,
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
	            items:1,
	            pagination: true,
	            dots: true
	        },
	        600:{
	            items:2,
	            autoplay: true,
	            pagination: true,
	            dots: true
	        },
	        700:{
	            items:3,
	            autoplay: true,
	            pagination: true,
	            dots: true
	        },
	        900:{
	            items:3,
	            autoplay: true,
	            pagination: false,
	            dots: false
	        },
	        1200:{
	        	items: 5,
	        	autoplay: true,
	        }
	    }
	});
	$('.clients .owl-carousel').owlCarousel({
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
	            items:1,
	            pagination: true,
	            dots: true
	        },
	        600:{
	            items:2,
	            autoplay: true,
	            pagination: true,
	            dots: true
	        },
	        700:{
	            items:3,
	            autoplay: true,
	            pagination: true,
	            dots: true
	        },
	        900:{
	            items:3,
	            autoplay: true,
	            pagination: false,
	            dots: false
	        },
	        1200:{
	        	items: 5,
	        	autoplay: true,
	        }
	    }
	});
	$('.our_partners .owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    margin: 20,
	    autoplayTimeout: 40000000,
	    autoplaySpeed:1400,
	    smartSpeed: 600,
	    pagination:false,
	    nav:false,
	    dots:false,
	    responsive:{
	        0:{
	            items:1,
	            pagination: true,
	            dots: true
	        },
	        600:{
	            items:2,
	            autoplay: true,
	            pagination: true,
	            dots: true
	        },
	        700:{
	            items:2,
	            autoplay: true,
	            pagination: true,
	            dots: true
	        },
	        900:{
	            items:2,
	            autoplay: true,
	            pagination: true,
	            dots: true
	        },
	        1000:{
	            items:3,
	            autoplay: true,
	            pagination: false,
	            dots: false
	        },
	        1200:{
	        	items: 4,
	        	autoplay: true,
	        	pagination: false,
	            dots: false
	        }
	    }
	});
	$("input, select, textarea").jqBootstrapValidation();

	$(".search").click(function(){
		$(".overlay-search").toggleClass("focus-search");
		$("#search-inner").focus();

	});
	$(".search-close").click(function(){
		$(".overlay-search").removeClass("focus-search");
	});

	// $(document).ready(function(){
	//     $(".item_row_tech").height( $(".row_item").height() );
	// });

	


});

// $(function(){
//     $(window).scroll(function() { 
//         if ($(this).scrollTop() > 75) { 
//             $("#ddmenubg2:hidden").css('visibility','visible');   
//             $("#ddmenubg2:hidden").fadeIn('slow');  
//         } 
//         else {     
//             $("#ddmenubg2:visible").fadeOut("slow"); 
//         }  
//     });
// });

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 1) {
        //clearHeader, not clearheader - caps H
        $(".header_top_line").addClass("hidden_bar");
        $(".header").addClass("castombar");
    }else if(scroll <= 50){
    	$(".header_top_line").removeClass("hidden_bar");
    	$(".header").removeClass("castombar");
    }
    // if (scroll >= 50) {
    //     //clearHeader, not clearheader - caps H
    //     $(".navbar").addClass("reloadcss");
    // }
}); //missing );