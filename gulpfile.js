var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('default', ['css', 'js', 'html']);

gulp.task('css', function() {
  gulp.src('./src/css/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
  browserify('./src/js/main.jsx')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('html', function() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'));
});