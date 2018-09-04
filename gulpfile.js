var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

var scss_file = 'app/assets/sass/**/*.scss';

var css_dest = 'app/assets/css/';

var sass_dev_options = {
	outputStyle: 'expanded'
}

var sass_prod_options = {
	outputStyle: 'compressed'
}

gulp.task('sassdev', function() {

	return gulp.src(scss_file)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(css_dest))

});

gulp.task('sassprod', function() {

	return gulp.src(scss_file)
		.pipe(sass().on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(css_dest))

});

gulp.task('w', function() {

	gulp.watch(scss_file, ['sassdev']);
	gulp.watch(scss_file, ['sassprod']);

});

gulp.task('default', ['sassdev', 'sassprod', 'w']);