var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'builds/development',
    livereload: true
  });
});