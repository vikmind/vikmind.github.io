var gulp        = require('gulp');
var del         = require('del');

gulp.task('clean', del.bind(null, ['public/assets/**/*', 'www/**/*']))