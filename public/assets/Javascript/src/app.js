'use strict';
const tbUI = (function ($) {


    function testFunc() {

        var testVar = 'Hi';
        console.log(testVar);

        $('.js-tilt').tilt({
            maxTilt: 35,
            perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
            easing: "ease", // Easing on enter/exit.
            scale: 1, // 2 = 200%, 1.5 = 150%, etc..
            speed: 200, // Speed of the enter/exit transition.
            transition: false, // Set a transition on enter/exit.
            disableAxis: null, // What axis should be disabled. Can be X or Y.
            reset: false, // allow dont jump when hover lost
            
            glare: false, // Enables glare effect
            maxGlare: 0     // From 0 - 1. 
        });

        var $compass = $('.compass'),
                $controls = $compass.find('.link');

        $controls.hover(function () {
            var target = $(this).data('blur'),
                    $blurs = $('.blurs .blur'),
                    $links = $('.controls .link'),
                    $navOverlay = $('.interactiv-nav .nav-item .overlay');      
            
            $navOverlay.removeClass('hover');
            $blurs.removeClass('hover');
            $links.removeClass('hover');
            
            $(this).addClass('hover');
            $('.blurs').find(target).addClass('hover');
            $('.interactiv-nav .nav-item').find(target).addClass('hover');
        });

        $compass.mouseleave(function () {
            $('.blurs .blur').removeClass('hover');
            $('.interactiv-nav .nav-item .overlay').removeClass('hover');
            $('.controls .link').removeClass('hover');
        });



    }

    return {
        init: function () {
            testFunc();
        }
    };

})(jQuery);

(function ($) {
    tbUI.init();
})(jQuery);
