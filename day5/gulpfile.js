var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
    browserSync.init({
        proxy: {
		target: “http://cbp-exercises.local/”,
        },
	open: ‘external’,
	host: ‘cbp-exercises.local’
	port: 3000,
        files: ['*.css', '*.html']
    });
});


