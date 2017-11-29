/**
 *
 * Gulpfile setup
 *
 * @since 1.0.0
 * @authors Mr.DucPham
 * @package NodeJS
 * @forks _s & some-like-it-neat
 */

 var gulp = require('gulp'),
    livereload  = require('gulp-livereload');

gulp.task('watch', function() {
    console.log('\x1b[32m', '=================\x1b[36m Starting Watch \x1b[0m\'===================>' ,'\x1b[0m');
    livereload.listen();
    gulp.watch('**/*.php', function(files) {
        console.log('\x1b[32m', '--->Running \x1b[36mLivereload  PHP...\x1b[0m', '\x1b[0m');
        livereload.changed(files);
        console.log('\x1b[36m',"============ End Reload PHP ============",'\x1b[0m');
    });
    gulp.watch('**/*.ejs',function(files) {
        console.log('\x1b[32m', '--->Running \x1b[36mLivereload  CTP...\x1b[0m', '\x1b[0m');
        livereload.changed(files);
        console.log('\x1b[36m',"============ End Reload CTP ============",'\x1b[0m');
    });
    gulp.watch('**/*.css',function(files) {
        console.log('\x1b[32m', '--->Running \x1b[36mLivereload  CSS...\x1b[0m', '\x1b[0m');
        livereload.changed(files);
        console.log('\x1b[36m',"============ End Reload CSS ============",'\x1b[0m');
    });
    gulp.watch('**/*.js',function(files) {
        console.log('\x1b[32m', '--->Running \x1b[36mLivereload  JS...\x1b[0m', '\x1b[0m');
        livereload.changed(files);
        console.log('\x1b[36m',"============ End Reload JS ============",'\x1b[0m');
    });
});
