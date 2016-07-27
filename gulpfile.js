'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var sassSrc = './scss/**/*.scss';
var cssDest = './css';
var jQuerySrc = './bower_components/jquery/dist/**/*.js';
var jQueryDest = './js/jquery/dist' ;

var onError = function(err) {
  console.log(err);
};

gulp.task('sass', function () {
  gulp.src(sassSrc)
    .pipe(sass({includePaths: ['./scss']}).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task( 'jquery', function() {
  return  gulp.src(jQuerySrc)
            .pipe(gulp.dest(jQueryDest) );
});

// gulp.task('default', function () {
//   gulp.watch('./scss/**/*.scss', ['sass']);
// });

//**TODO: add***

// gulp.task( 'automate', function() {
//   gulp.watch( [ sassSrc, jsSrc ], [ 'scripts', 'styles' ] );
// });
 
// gulp.task( 'default', ['scripts', 'styles', 'automate'] );