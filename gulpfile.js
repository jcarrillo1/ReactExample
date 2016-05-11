"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'), //Runs local dev server
    open = require('gulp-open'); //Opens a URL in the web browser

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}

//Starts a local dev server
gulp.task('connect', function() {
    connect.server({
        root:['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true //Reloads whenever updated
    });
});


gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({url: config.devBaseUrl + ":" + config.port + '/'}));
});

//Puts any html files into the dist folder
gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload()); //Connect reloads anytimes there is a change
});

gulp.task('watch', function() {
   gulp.watch(config.paths.html, ['html']);
});    
    
gulp.task('default', ['html', 'open', 'watch']);