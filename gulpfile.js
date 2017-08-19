/**
 * Copyright (c) 2017 Digitize OÜ. Subject to MIT license.
 */

const gulp = require('gulp');
const browserify = require('browserify');
const gutil = require('gulp-util');
const tap = require('gulp-tap');
var KarmaServer = require('karma').Server;

// Basic usage 
gulp.task('compile:src', function () {
    // Single entry point to browserify 
    return gulp.src('src/main.js', {read: false})
        .pipe(tap(function (file) {
            gutil.log('bundling ' + file.path);
            file.contents = browserify(file.path, {debug: true}).bundle();
        }))
        .pipe(gulp.dest('dest'))
});

gulp.task('compile:test', function () {
    // Single entry point to browserify 
    return gulp.src('src/tests.js', {read: false})
        .pipe(tap(function (file) {
            gutil.log('bundling ' + file.path);
            file.contents = browserify(file.path, {debug: true}).bundle();
        }))
        .pipe(gulp.dest('dest'))
});

gulp.task('test', ['compile:test'], function (done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', function () {
    // place code for your default task here
});
