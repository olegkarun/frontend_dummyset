(function () {
    'use strict';

    ﻿var compass = require('compass-importer');
    var sass = require('node-sass');

    module.exports = {

        // Development process SASS compile
        dev: {
            options: {
                outputStyle: "nested", //addinional expanded
                sourceComments: true,
                sourceMapEmbed: true,
                sourceMapRoot: "public/assets/Stylesheets/css",
                sourceMap: true,
                importer: compass,
                implementation: sass
            },
            files: {
                'public/assets/Stylesheets/css/style.css': 'public/assets/Stylesheets/scss/style.scss',
                'public/assets/Stylesheets/css/rte.css': 'public/assets/Stylesheets/scss/rte.scss'
            }
        },

        // Stage process SASS compile
        prod: {
            options: {
                outputStyle: "compressed", //addinional compact
                ourceComments: false,
                sourceMap: false,
                importer: compass,
                implementation: sass
            },
            files: {
                'public/assets/Stylesheets/css/style.css': 'public/assets/Stylesheets/scss/style.scss'
            }
        }
    };
}
)(); 