"use strict";
var gulp = require('gulp'),
    connect = require('gulp-connect'), //Runs local dev server
    open = require('gulp-open'), //Opens a URL in the web browser
    browserify = require('browserify'), //Bundles js
    reactify = require('reactify'), // Will transform jsx to js
    source = require('vinyl-source-stream'), // Conventional text streams
    concat = require('gulp-concat'); // Concatenates files
    //lint = require('gulp-eslint'); //Lint js files, including jsx


var config = {
    port: 8000,
    devBaseUrl: 'http://localhost',
    paths: {
        // Looks for these files
        html: './src/*.html',
        js: [
            './src/**/*.js',
            './src/**/*.jsx'
        ],
        images: './src/images/*',
        css: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './node_modules/toastr/build/toastr.css'
        ],
        mainJs: './src/main.js',
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


// Opens up a browser with this url
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

//Puts any html files into the dist folder
gulp.task('html', function() {
    gulp.src(config.paths.html) //Takes all the html files form source
        .pipe(gulp.dest(config.paths.dist)) //Stores in the dist folder
        .pipe(connect.reload()); //Connect reloads anytimes there is a change
});

//Puts all the js files into one file
//Also will transform jsx to js
gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()  //put it all in one js file
        .on('error', console.error.bind(console)) //show any errors on console
        .pipe(source('bundle.js')) //Put them all into bundle.js
        .pipe(gulp.dest(config.paths.dist + '/scripts')) //Whose destination is dist/scripts folder
        .pipe(connect.reload()); // Connect reloads anytime there is a change
});

//Will bundle up all the css files into one file and put them into the dist/css folder.
//
gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});
gulp.task('images', function() {
    //Send all files to the the dist folder under the imates folder
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    //This would be for a favicon
    gulp.src('./src/images/topleft.png')
        .pipe(gulp.dest(config.paths.dist));
});

//Figure out later what's wrong with the lint file or eslint
//gulp.task('lint', function() {
//	return gulp.src(config.paths.js)
//		.pipe(lint({config: './eslint.config.json'}))
//		.pipe(lint.format());
//});

//Will check current html/js files and monitor for any changes
//gulp.task('watch', function() {
//    gulp.watch(config.paths.html, ['html']);
//    gulp.watch(config.paths.js, ['js', 'lint']);
//});
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

//Run the tasks in this order
//gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);
gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);
