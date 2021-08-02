// jQuery(document).ready(function() {
// });


(function($, window) {
    // console.log('test jquery');

    // jQuery('#about-me-img').before('<img src="./themes/adchallenge/images/Rectangle13.png" id="about-me-img-before"/>');
    // jQuery('#about-me-img').after('<img src="./themes/adchallenge/images/Rectangle14.png" id="about-me-img-after"/>');
    
    // FIXED ANCHOR-ING
    var adjustAnchor = function() {

        var $anchor = $(':target'),
            fixedElementHeight = 202; // *** 99 (header height) + 103 (content padding)

        if ($anchor.length > 0) {
            $('html, body')
                // .stop()
                // .animate({
                //     scrollTop: $anchor.offset().top - fixedElementHeight
                // }, 200);
                window.scrollTo(0, $anchor.offset().top - fixedElementHeight);
        }
    };

    $(window).on('hashchange load', function() {
        adjustAnchor();
    });

})(jQuery, window);


