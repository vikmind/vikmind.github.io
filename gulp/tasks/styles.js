var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var sass         = require('gulp-sass');

var config       = require('../config').styles;
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function(){
	return gulp.src(config.src)
	  .pipe(sourcemaps.init())
	  .pipe(sass())
	  .on('error', handleErrors)
	  .pipe(sourcemaps.write())
	  .pipe(gulp.dest(config.dest))
});