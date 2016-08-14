var gulp = require('gulp');
var rename = require("gulp-rename");
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

/**************************************************/
/* Build into distributable, development versions */
/**************************************************/

gulp.task('build', ['build-razilocomponent']);

gulp.task('build-razilocomponent', function() {
	gulp.src('./build/razilocomponent.es6.js')
		.pipe(browserify({transform: ['babelify']}))
		.on('error', function(err) { console.log(err); util.beep(); this.emit('end'); })
		.pipe(rename('razilocomponent.js'))
		.pipe(gulp.dest('./build/'))
		.pipe(rename('razilocomponent.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/'));
});
