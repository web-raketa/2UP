var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('app/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    })
})

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/css/main.css', browserSync.reload);
    gulp.watch('app/sass/main.sass', ['sass']);
    gulp.watch('app/js/*.js', browserSync.reload);
})

gulp.task('default', function () {
    gulp.run('watch', 'browser-sync', 'sass')
});
