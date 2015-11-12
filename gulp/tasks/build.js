var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build', ['styles', 'images'],
	shell.task('./node_modules/.bin/harp compile public/ www')
);