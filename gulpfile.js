'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var $ = require('gulp-load-plugins')();

//编译scss为css
gulp.task('scss', function () {
    return gulp.src('app/scss/**/*.scss')
        //编译sass
        .pipe($.sass())
        //加css兼容前缀
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('app/css'))
        .pipe(reload({stream: true}));
});

//编译typescript为js
gulp.task('typescript', function () {
    return gulp.src('app/ts/**/*.ts')
        //编译typescript
        .pipe($.typescript())
        //CommonJS模式引入
        .pipe($.browserify())
        .pipe(gulp.dest('app/js'))
        .pipe(reload({stream: true}));
});

//启动browserSync服务器
gulp.task('serve', ['scss', 'typescript'], function () {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });

    //文件监控改动
    //流的方式更新
    gulp.watch("app/scss/**/*.scss", ['scss']);
    gulp.watch("app/ts/**/*.ts", ['typescript']);
    //手动重载页面
    gulp.watch("app/**/*.html").on("change", browserSync.reload);
});