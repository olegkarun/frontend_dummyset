(function () {
'use strict';

module.exports = {
  options: {
    limit: 3
  },
  // Task for dev
  devbase: [
    'clean:temp',
    //'sass:dev',
    'uglify:dev'
  ],
  // Tasks for prod
  prodbase: [
    'clean:alltemp',
    //'sass:prod',
    'uglify:prod'
  ]
};

})(); 