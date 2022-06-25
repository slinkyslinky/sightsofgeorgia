import gulp from 'gulp'
import newer from "gulp-newer"
import fonter from "gulp-fonter"
import { path } from '../gulpfile.js'
import ttf2woff2 from 'gulp-ttf2woff2'

export default function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(newer(path.build.fonts))
        .pipe(fonter({
            formats: ["ttf", "woff", "eot", "svg"]
        }))
        .pipe(gulp.dest(path.build.fonts))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(path.build.fonts))
}

