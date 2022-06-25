import imagemin from 'gulp-imagemin' // Минификация изображений
import newer from 'gulp-newer' // Минификация только еще не сжатых
import webp from 'gulp-webp'
import { path, isProd } from '../gulpfile.js'
import gulpIf from 'gulp-if'
import gulp from 'gulp'

export default function images() {
    return gulp.src(path.src.images)
        .pipe(newer(path.build.images))
        .pipe(webp())
        .pipe(gulp.dest(path.build.images))
        .pipe(gulp.src(path.src.images))
        .pipe(newer(path.build.images))
        .pipe(gulpIf(isProd, imagemin({
            verbose: isProd
        })))
        .pipe(gulp.dest(path.build.images))
}

