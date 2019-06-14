'use strict';

//dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

//Compile SCSS
function style() {
    return gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(SCSS_DEST));
}

exports.default = style;