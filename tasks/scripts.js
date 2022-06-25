import babel from 'gulp-babel'
import gulp from 'gulp'
import webpack from 'webpack-stream'
import { path, isProd, isDev } from '../gulpfile.js'

export default function scripts() {
    return gulp.src(path.src.scripts, { sourcemaps: isDev })
        .pipe(babel())
        .pipe(webpack({
            mode: isProd ? "production" : "development"
        }))

        .pipe(gulp.dest(path.build.scripts, { sourcemaps: isDev }))
}


