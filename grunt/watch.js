(function () {
    'use strict';
    //var scriptsdistPath = 'public/typo3conf/ext/novadach/Resources/Public/Javascript/src/',
    //stylesdistPath = 'public/typo3conf/ext/novadach/Resources/Public/Stylesheets/scss/';

    var scriptsdistPath = 'public/assets/Javascript/',
            stylesdistPath = 'public/assets/Stylesheets/';

    module.exports = {
        options: {
            spawn: false,
            livereload: 55455
        },
        scripts: {
            files: [
                scriptsdistPath + '**/*.js'
            ],
            tasks: [
                'uglify'
            ]
        },
        styles: {
            files: [
                stylesdistPath + '**/*.scss'
            ],
            tasks: [
                'sass:dev'
            ]
        }
    }
})(); 