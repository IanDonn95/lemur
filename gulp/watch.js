'use strict';

var gulp = require('gulp');


gulp.task('watch', gulp.series('dev:styles', 'dev:scripts', 'dev:inject', 'dev:fonts' ,function () {
  gulp.watch('app/styles/**/*.less', gulp.series('dev:styles'));
  gulp.watch('app/styles/**/*.css', gulp.series('dev:styles'));
  gulp.watch('app/**/*.js', gulp.series('dev:scripts'));
  gulp.watch('app/images/**/*', gulp.series('build:images'));
  gulp.watch('bower.json', gulp.series('dev:inject'));
}));
