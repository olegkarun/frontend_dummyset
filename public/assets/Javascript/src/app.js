'use strict';
const tbUI = (function ($) {

    function testFunc() {
        
        var testVar = 'Hi';
        console.log(testVar);
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
