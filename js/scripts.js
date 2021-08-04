// jQuery(document).ready(function() {
// });


// SMOOTH SCROLLING (FIX)
// import smoothscroll from 'smoothscroll-polyfill';
// smoothscroll.polyfill();


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


    // Adding&Removing active class on header navigation relative links
    $(document).on('click', 'header nav li', function() {
        $(this).addClass("active").siblings().removeClass("active");
    })

})(jQuery, window);

