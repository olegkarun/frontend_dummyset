'use strict';
const tbUI = (function ($) {


    function testFunc() {

        var testVar = 'Hi';
        console.log(testVar);

        $('.js-tilt').tilt({
            maxTilt: 30,
            perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
            easing: "cubic-bezier(0.905, 0.160, 0.100, 0.900)", // Easing on enter/exit.
            scale: 1, // 2 = 200%, 1.5 = 150%, etc..
            speed: 100, // Speed of the enter/exit transition.
            transition: true, // Set a transition on enter/exit.
            disableAxis: null, // What axis should be disabled. Can be X or Y.
            reset: true, // If the tilt effect has to be reset on exit.
            glare: false, // Enables glare effect
            maxGlare: 1       // From 0 - 1. 
        });

        var $compass = $('.compass'),
                $controls = $compass.find('.link');

        $controls.hover(function () {
            var target = $(this).data('blur'),
                    $blurs = $('.blurs .blur');
            $blurs.removeClass('hover');
            $('.blurs').find(target).addClass('hover');
        });

        $compass.mouseleave(function () {
            $('.blurs .blur').removeClass('hover');
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
