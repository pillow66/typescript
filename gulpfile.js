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
//合并typescript模块
gulp.task('models', function () {
    return gulp.src('app/ts/models/**/*.ts')
        //编译typescript
        .pipe($.typescript())
        //合并模块文件到models.js
        .pipe($.concat('models.js'))
        .pipe(gulp.dest('app/js/models'));
});

gulp.task('typescript', ['models'], function () {
    return gulp.src(['app/ts/*.ts', 'app/ts/outModels/**/*.ts'], {base: 'app/ts'})
        //编译typescript
        .pipe($.typescript())
        .pipe(gulp.dest('app/js'));
});

gulp.task('scripts', ['typescript'], function () {
    return gulp.src('app/js/*.js')
        .pipe($.browserify())
        .pipe(gulp.dest('app/js'))
        .pipe(reload({stream: true}));
});

//启动browserSync服务器
gulp.task('serve', ['scss', 'scripts'], function () {
    //配置服务器
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });

    //文件监控改动
    //流的方式更新
    gulp.watch("app/scss/**/*.scss", ['scss']);
    gulp.watch("app/ts/**/*.ts", ['scripts']);
    //手动重载页面
    gulp.watch("app/**/*.html").on("change", browserSync.reload);
});