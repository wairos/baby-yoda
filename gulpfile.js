'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
const webpack = require('webpack-stream');
const webp = require('gulp-webp');

gulp.task('scripts', gulp.parallel(compileJs));
gulp.task('styles', gulp.parallel(compileSass));
gulp.task('watch', gulp.series(compileSass, compileJs, gulp.parallel(watchSass, watchJs)));
gulp.task('watch:styles', gulp.series(compileSass, watchSass));
gulp.task('watch:scripts', gulp.series(compileJs, watchJs));

gulp.task('images', () =>
    gulp.src('./resources/media/**/*.png')
        .pipe(webp())
        .pipe(gulp.dest('./public_html/dist/img'))
);

function watchJs() {
    return gulp.watch('./resources/src/**/*.js', gulp.parallel(compileJs));
}

function watchSass() {
    return gulp.watch('./resources/scss/**/*.scss', gulp.parallel(compileSass));
}

function compileJs() {
    return gulp.src("./resources/src/index.js")
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest("./public_html/dist/js"));
}

function compileSass() {
    return gulp.src('./resources/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./public_html/dist/css'));
}
