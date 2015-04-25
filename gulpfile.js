var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass:custom', function () {
    return gulp.src('scss/*.scss')
        // Convert sass into css
        .pipe(sass({sourcemap: true}))

        // Catch any SCSS errors and prevent them from crashing gulp
        .on('error', function (error) {
            console.error(error);
            this.emit('end');
        })

        // Save the CSS
        .pipe(gulp.dest('css'));
});




// The default task (called when you run `gulp`)
gulp.task('default', function() {
    gulp.run('sass:custom');

    gulp.watch(['scss/*.scss'], function() {
        gulp.run('sass:custom');
    })
});