var gulp = require('gulp'),
    babelify = require('babelify'),
    react = require('react'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify');

var watch = require('gulp-watch');
watch(['./public/javascripts/app.js'], function(){
  console.log('app.js has been modified. recompile');
  gulp.start('default');
});

watch(['./public/javascripts/app-workout.js'], function(){
  console.log('app-workout has been modified. recompile');
  gulp.start('workout');
});


gulp.task('default', function() {
  return browserify('./public/javascripts/app.js')
      .transform("babelify", {presets: ["es2015", "react"]})
      .bundle()
      .pipe(source('build.js'))
      .pipe(gulp.dest('./public/build/'))
})

gulp.task('workout', function() {
  return browserify('./public/javascripts/app-workout.js')
      .transform("babelify", {presets: ["es2015", "react"]})
      .bundle()
      .pipe(source('build-workout.js'))
      .pipe(gulp.dest('./public/build/'))
})
