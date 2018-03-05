const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('js', function ()
{
    return gulp.src('src/*.*')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('js-watch', ['js'], function (done)
{
    browserSync.reload();
    done();
});

gulp.task('watch', function ()
{
    browserSync.init({
        server: { baseDir: "./dist" }
    });

    gulp.watch("src/*.*", ['js-watch']);
    gulp.watch("dist/*.*").on('change', browserSync.reload);
});

gulp.task('default',['watch']);