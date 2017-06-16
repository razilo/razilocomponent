var gulp = require('gulp');
var rename = require("gulp-rename");
var browserify = require('gulp-browserify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var util = require('gulp-util');
var vulcanize = require('gulp-vulcanize');

/**************************************************/
/* Build into distributable, development versions */
/**************************************************/

gulp.task('build', ['build-vulc', 'build-es6-js', 'build-sass']);

gulp.task('build-vulc', function () {
    return gulp.src('./src/app/index.component.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false
        }))
		.pipe(rename('index.vulc.html'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('build-es6-js', function() {
	gulp.src('./index.es6.js')
		.pipe(browserify({transform: ['babelify']}))
		.on('error', function(err) { console.log(err); util.beep(); this.emit('end'); })
		.pipe(rename('index.js'))
		.pipe(gulp.dest('./build/'))
		.pipe(rename('index.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/'));
});

gulp.task('build-sass', function() {
	gulp.src('./index.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({errLogToConsole: true, outputStyle: 'compact'}).on('error', sass.logError))
		.pipe(rename('index.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./build/"))
		.pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('index.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./build/"));
});

/********************************************/
/* Build then Watch for changes and rebuild */
/********************************************/

gulp.task('watch', ['build'], function() {
	gulp.watch([
		'./src/application/**/*.*'
	], ['build-vulc']);

	gulp.watch([
		'./index.es6.js'
	], ['build-es6-js']);

	gulp.watch([
		'./index.scss'
	], ['build-sass']);
});

/*************************/
/* Testing Using Jasmine */
/*************************/

var Server = require('karma').Server;

gulp.task('test-once', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
