import gulp from 'gulp'
import gulpIf from 'gulp-if'

import file from 'gulp-file'
import * as nodePath from 'path'


// Config
export const isProd = process.argv.includes('--production')
export const isDev = !isProd


// Pathes

const rootFolder = nodePath.basename(nodePath.resolve())
const srcFolder = './src'
const buildFolder = './dist'

export const path = {

    build: {
        html: `${buildFolder}/`,
        styles: `${buildFolder}/styles/`,
        scripts: `${buildFolder}/scripts/`,
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/images/`,
        videos: `${buildFolder}/videos/`,

    },
    src: {
        html: [
            `${srcFolder}/pages/**/*.html`,
            `!${srcFolder}/pages/index/index.html`,
            `${srcFolder}/pages/index/index.html`,
            `!${srcFolder}/pages/404/404.html`,
            `${srcFolder}/pages/404/404.html`,

        ],
        styles: [
            `${srcFolder}/styles/*.scss`,
            `${srcFolder}/pages/**/*.scss`,

        ],
        scripts: [
            `${srcFolder}/pages/**/*.js`,
            `${srcFolder}/**/*.js`,
            `!${srcFolder}/pages/index/index.js`,
            `${srcFolder}/pages/index/index.js`,
        ],
        fonts: `${srcFolder}/fonts/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}`,
        images: `${srcFolder}/images/*.{png,jpg,jpeg,gif,svg}`,
        videos: `${srcFolder}/videos/*.{mp4,webm,wav,ovg}`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        styles: `${srcFolder}/**/*.scss`,
        scripts: [
            `${srcFolder}/pages/**/*.js`,
            `${srcFolder}/modules/**/*.js`,
            `${srcFolder}/**/*.js`,
        ],

        fonts: `${srcFolder}/fonts/**/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}`,
        images: `${srcFolder}/images/**/*.{png,jpg,jpeg,gif,svg}`,
        videos: `${srcFolder}/videos/**/*.{mp4,webm,wav,ovg}`,
    },
    clear: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',
}

// Tasks

import clear from "./tasks/clear.js"
import fonts from "./tasks/fonts.js"
import html from "./tasks/html.js"
import images from "./tasks/images.js"
import scripts from "./tasks/scripts.js"
import styles from "./tasks/styles.js"
import serve from "./tasks/serve.js"
import videos from "./tasks/videos.js"

const dev = () => {
    return gulp.series(
        clear,
        gulp.parallel(html, styles, scripts, images, fonts, videos),
        serve
    )
}

const build = () => {
    return gulp.series(
        clear,
        gulp.parallel(html, styles, scripts, images, fonts, videos),

    )
}

// Main Task

gulp.task('default', isDev ? dev() : build())





// Creating of the BEM block
// ** npm run block example => blocks/example/example.html ** 

gulp.task('block', function () {
    return gulp.src('./src/blocks/common/*.*', { read: false })
        .pipe(file(process.argv[4] + '.html', ''))
        .pipe(file(process.argv[4] + '.scss', ''))
        .pipe(file(process.argv[4] + '.js', ''))
        .pipe(gulp.dest(`./src/blocks/${process.argv[4]}/`))

});