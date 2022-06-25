import gulp from 'gulp'
import include from 'gulp-file-include' // Соединение частей html
import htmlmin from 'gulp-htmlmin' //HTML минификация
import webpHtml from 'gulp-webp-html'
import { path, isProd } from '../gulpfile.js'
// Config

// const app = require("../config/app.js")

export default function html() {
    return gulp.src(path.src.html)
        .pipe(include({
            prefix: '@@',
            basepath: '@root'
        }))
        .pipe(webpHtml())
        .pipe(htmlmin({
            collapseWhitespace: isProd
        }))
        .pipe(gulp.dest(path.build.html))
}


