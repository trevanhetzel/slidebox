jQuery(document).ready(function ($) {

    // Carousel
	carousel = function () {

        var $carousel = $(".carousel"),
            $carouselItem = $(".carousel li"),
            $triggerLeft = $(".carousel--left"),
            $triggerRight = $(".carousel--right"),

            total = $carouselItem.length,
            current = 0;


        moveLeft = function () {
            if ( current > 0 ) {
                $carousel.animate({ "left": "+=269px" }, "fast" );
                current--;
            }
        },

        moveRight = function () {
            if ( current < total - 2 ) {
                $carousel.animate({ "left": "-=269px" }, "fast" );
                current++;
            }
        },

        // Initiliaze moveLeft on trigger click
        $triggerLeft.on("click", function () {
            moveLeft();
        });

        // Initiliaze moveRight on trigger click
        $triggerRight.on("click", function () {
            moveRight();
        });

        // Initiliaze moveLeft on left keypress
        $(document).keydown(function(e){
            if (e.keyCode == 37) { 
                moveLeft();
            }
        });

        // Initiliaze moveRight on right keypress
        $(document).keydown(function(e){
            if (e.keyCode == 39) { 
               moveRight();
            }
        });

	},

    // Lightbox
    lightbox = function () {

        var $trigger = ".carousel li a";
        var $image = ".lightbox img";

        // Close lightbox when pressing esc key
        $(document).keydown(function(e){
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
            .on("click", $trigger, function (e) {
                var $this = $(this);

                // Prevent from clicking through
                e.preventDefault();
                e.stopPropagation();

                // Grab the image URL
                dest = $this.attr("href");

                enlarge(dest);

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

        enlarge = function (dest) {
            // Create new DOM elements
            $("body").append("<div class='lightbox-cont'></div><div class='lightbox'></div>");
            $(".lightbox").html(function () {
                return "<img src='" + dest + "'>";
            });
        }

    }

    // Initialize functions
    carousel();
    lightbox();
});