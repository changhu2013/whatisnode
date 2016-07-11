const gulp = require('gulp');
const watch = require('gulp-watch');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

gulp.task('web', () => {

  gulp.src([
      'public/javascripts/src/**/*.js'
    ])
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('serve', () => {

  gulp.src([
      'src/**/*.js'
    ])
    .pipe(babel({
      presets: ['es2015', 'stage-3']
    }))
    .pipe(gulp.dest('lib'));
})


gulp.task('default', ['serve', 'web']);
gulp.task('watch', () => {

  watch([
      'src/**/*.js',
      'public/javascripts/src/**/*.js'
    ], () => {
      console.log(gulp);
      gulp.tasks.serve.fn();
    });
});
