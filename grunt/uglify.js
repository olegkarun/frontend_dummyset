(function () {
    'use strict';
    module.exports = {
        dev: {
            options: {
                beautify: true,
                sourceMap: {
                    includeSources: true
                }
            },
           
            files: [{
                    'public/assets/Javascript/dist/app.min.js': [
                        'public/assets/Javascript/src/**/*.js'
                    ]
                }]
        },
        prod: {
            files: [{
                    'public/assets/Javascript/dist/app.min.js': [
                        'public/assets/Javascript/src/app.js'
                    ]
                }]
        }
    };

}
)(); 