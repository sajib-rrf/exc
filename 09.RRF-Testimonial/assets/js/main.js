(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".testimonial-carousel").owlCarousel({
        	items : 3,
        	margin : 30,
        	nav : false,
        	dots : true,
        	loop : true
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	