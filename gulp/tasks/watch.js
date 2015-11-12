var gulp        = require('gulp');
var harp        = require('harp');
var browserSync = require('browser-sync');
var config      = require('../config');

gulp.task('watch', ['clean', 'styles', 'images'], function(){
		harp.server(config.harp.path, {
			port: config.harp.port
		},
		function(){
			browserSync(config.browserSync);
			gulp.watch(config.styles.watch, ['styles']);
			gulp.watch(config.images.src, ['images']);
		});
});
