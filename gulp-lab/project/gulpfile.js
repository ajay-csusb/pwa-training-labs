const gulp = require('gulp');

function copy() {
  return gulp.src([
    'app/*.html',
    'app/**/*.jpg',
    'app/**/*.css',
    'app/**/*.js'
  ])
  .pipe(gulp.dest('build'));
}

gulp.task('copy', copy);