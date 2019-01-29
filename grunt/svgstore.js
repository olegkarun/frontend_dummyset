//http://danburzo.ro/svg-icon-system/

module.exports = {
    icons: {
        files: {
            'public/assets/Images/svg/dist/icons.svg': ['public/assets/Images/svg/src/**/*.svg']
        },
        options: {
            prefix: 'icon-', // This will prefix each ID
            svg: {// will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
                viewBox: '0 0 100 100',
                xmlns: 'http://www.w3.org/2000/svg'
            }
        }
    }
};

//next look svginjector svginjector:icons

//grunt svgstore
//grunt svginjector