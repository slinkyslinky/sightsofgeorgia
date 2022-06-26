import dartSass from 'sass'
import gulpSass from 'gulp-sass' // Обработка SCSS
import csso from 'gulp-csso'  // CSS минификация
import concat from 'gulp-concat' // Соединение CSS
import autoprefixer from 'gulp-autoprefixer' //Префиксы для CSS
import shorthand from 'gulp-shorthand' // Минификация свойств CSS
import groupMediaQueries from 'gulp-group-css-media-queries'
import webpCss from 'gulp-webp-css'
import sassGlob from 'gulp-sass-glob'
import { path, isProd, isDev } from '../gulpfile.js'
import gulpIf from 'gulp-if'
import gulp from 'gulp'

const sass = gulpSass(dartSass)

export default function styles() {
    return gulp.src(path.src.styles, { sourcemaps: isDev })
        .pipe(sassGlob())
        .pipe(sass())

        .pipe(autoprefixer())
        .pipe(shorthand())

        .pipe(concat('index.css'))
        .pipe(webpCss())
        .pipe(groupMediaQueries())
        .pipe(gulpIf(isProd, csso()))
        .pipe(gulp.dest(path.build.styles, { sourcemaps: isDev }))
}

