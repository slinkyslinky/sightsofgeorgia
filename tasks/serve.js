import gulp from 'gulp'
import sync from 'browser-sync' // Server
import html from './html.js'
import styles from './styles.js'
import scripts from './scripts.js'
import images from './images.js'
import fonts from './fonts.js'
import { path } from '../gulpfile.js'

export default function serve() {
    sync.init({
        server: path.buildFolder
    })

    gulp.watch(path.watch.html, gulp.series(html)).on('change', sync.reload)
    gulp.watch(path.watch.styles, gulp.series(styles)).on('change', sync.reload)
    gulp.watch(path.watch.scripts, gulp.series(scripts)).on('change', sync.reload)
    gulp.watch(path.watch.images, gulp.series(images)).on('change', sync.reload)
    gulp.watch(path.watch.fonts, gulp.series(fonts)).on('change', sync.reload)
}