import gulp from 'gulp'
import { path } from '../gulpfile.js'
import newer from "gulp-newer" // Работа только с новыми

export default function videos() {
    return gulp.src(path.src.videos)
        .pipe(newer(path.build.images))
        .pipe(gulp.dest(path.build.videos))
}