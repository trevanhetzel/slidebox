/*! Slidebox.JS - v1.0 - 2013-11-30
 * http://github.com/trevanhetzel/slidebox
 *
 * Copyright (c) 2013 Trevan Hetzel <trevan.co>;
 * Licensed under the MIT license */

 slidebox = function (params) {

    // Carousel
	carousel = function () {

        var $carousel = $(params.container).children(".carousel"),
            $carouselItem = $(".carousel li"),
            $triggerLeft = $(params.leftTrigger),
            $triggerRight = $(params.rightTrigger),

            total = $carouselItem.length,
            current = 0;


        var moveLeft = function () {
            if ( current > 0 ) {
                $carousel.animate({ "left": "+=" + params.length + "px" }, params.speed );
                current--;
            }
        };

        var moveRight = function () {
            if ( current < total - 2 ) {
                $carousel.animate({ "left": "-=" + params.length + "px" }, params.speed );
                current++;
            }
        };

        // Initiliaze moveLeft on trigger click
        $triggerLeft.on("click", function () {
            moveLeft();
        });

        // Initiliaze moveRight on trigger click
        $triggerRight.on("click", function () {
            moveRight();
        });

        // Initiliaze moveLeft on left keypress
        $(document).keydown(function (e){
            if (e.keyCode == 37) { 
                moveLeft();
            }
        });

        // Initiliaze moveRight on right keypress
        $(document).keydown(function (e){
            if (e.keyCode == 39) { 
               moveRight();
            }
        });

	},

    // Lightbox
    lightbox = function () {

        var trigger = ".carousel li a";

        // Close lightbox when pressing esc key
        $(document).keydown(function (e){
            if (e.keyCode == 27) { 
               closeLightbox();
            }
        });
        
        $(document)
            // Close lightbox on any click
            .on("click", function () {
                closeLightbox();
            })

            // If clicked on a thumbnail trigger, proceed
            .on("click", trigger, function (e) {
                var $this = $(this);

                // Prevent from clicking through
                e.preventDefault();
                e.stopPropagation();

                // Grab the image URL
                dest = $this.attr("href");

                // Grab the caption from data attribute
                capt = $this.children("img").data("caption");

                enlarge(dest, capt);

                /*  If clicked on an enlarged image, stop propagation
                     so it doesn't get the close function */
                $(document).on("click", ".lightbox img", function (e) {
                    e.stopPropagation();
                });
            });

        closeLightbox = function () {
            $(".lightbox-cont").remove();
            $(".lightbox").remove();
        },

        enlarge = function (dest, capt) {
            // Create new DOM elements
            $("body").append("<div class='lightbox-cont'></div><div class='lightbox'></div>");
            $(".lightbox").html(function () {
                return "<img src='" + dest + "'><div class='lightbox-caption'>" + capt + "</div>";
            });
        }

    }

    // Initialize functions
    carousel();
    lightbox();
};