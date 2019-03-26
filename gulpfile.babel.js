import gulp from 'gulp'
import sass from 'gulp-sass'
import browserSync from 'browser-sync'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import cleancss from 'gulp-clean-css'
import rename from 'gulp-rename'
import autoprefixer from 'gulp-autoprefixer'
import bourbon from 'node-bourbon'
import notify from 'gulp-notify'
import sourcemaps from 'gulp-sourcemaps'
import plumber from 'gulp-plumber'
import pump from 'pump'

const compileStyle = () => {
    return (
        gulp
        .src('src/sass/**/*.s*')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                includePaths: bourbon.includePaths
            }).on('error', notify.onError())
        )
        .pipe(rename({
            basename: 'styles',
            suffix: '.min',
            prefix: ''
        }))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleancss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
    )
}

const compileScript = cb => {
    pump(
        [
            gulp.src([
                // 'node_modules/jquery/dist/jquery.min.js',
                // 'node_modules/popper.js/dist/umd/popper.min.js',
                // 'node_modules/bootstrap/dist/js/bootstrap.min.js',
                'src/js/main.js'
            ]),
            concat('scripts.min.js'),
            plumber(),
            uglify(),
            gulp.dest('src/js'),
            browserSync.reload({
                stream: true
            })
        ],
        cb
    )
}


const compileMarkup = done => {
    browserSync.reload(), done()
}

const buildTask = done => {
    gulp.src(['src/*.html']).pipe(gulp.dest('build'))
    gulp.src(['src/css/*.css']).pipe(gulp.dest('build/css'))
    gulp.src(['src/fonts/**/*']).pipe(gulp.dest('build/fonts'))
    gulp.src(['src/js/scripts.min.js']).pipe(gulp.dest('build/js'))
    gulp.src(['src/img/**/*']).pipe(gulp.dest('build/img'))
    done()
}

const watchStyle = () => {
    gulp.watch('src/sass/**/*.s*', compileStyle)
}

const watchScript = () => {
    gulp.watch(['src/js/main.js'], compileScript)
}

const watchMarkup = () => {
    gulp.watch('src/*.html', compileMarkup)
}

const compile = gulp.parallel(compileStyle, compileScript)

const startServer = () => {
    browserSync({
        server: {
            baseDir: './src'
        },
        notify: false,
        tunnel: false
    })
}

const build = gulp.series(compile, buildTask)

const serve = gulp.series(compile, startServer)

const watch = gulp.parallel(watchStyle, watchScript, watchMarkup)

const defaultTasks = gulp.parallel(serve, watch)

exports.build = build

exports.default = defaultTasks