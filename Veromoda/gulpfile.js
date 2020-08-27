let gulp = require("gulp");

gulp.task("_copy",function(){

    gulp.src("bigCSS/**/*").pipe(gulp.dest("D:/Tiger"));

})

let uglify = require("gulp-uglify");

gulp.task("_uglify",function(){
        gulp.src("随机函数.js").pipe(uglify()).pipe(gulp.dest("D:/Tiger"));
        
    })