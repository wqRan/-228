const gulp = require("gulp");//加载gulp模块
const connect = require("gulp-connect");//加载connect插件
const babel = require("gulp-babel");//加载gulp-babel插件
const sass = require("gulp-sass-china");//加载sass
// const concat = require("gulp-concat");//合并所有js文件
// const uglify = require("gulp-uglify");//代码压缩


gulp.task("html",()=>{
	return gulp
				.src(["html/*.html","html/page/*.html"])
				.pipe(gulp.dest("dist/"))//建立dist文件
				.pipe(connect.reload());//自动刷新
})


gulp.task("script",()=>{
	return gulp
				.src(["libs/*.js","model/*.js","src/*.js","!screct.js"])
				.pipe(gulp.dest("dist/scripts"))
})


gulp.task("image",()=>{
	return gulp
				.src(["img/**"])
				.pipe(gulp.dest("dist/images"))
})


gulp.task("watch",()=>{
	gulp.watch(["**/*.html","!module/**/*"],["html"]);//前面的文件发生变化，只有html文件改动
	gulp.watch(["*/*.js","!module/**/*","!es6/*"],["script"]);//只有script改动
	gulp.watch(["es6/*.js","!module/**/*"],["es6"]);
	gulp.watch(["scss/*.scss"],["sass"]);
	gulp.watch(["img/**"],["image"]);

})

gulp.task('server',function(){
	connect.server({
		root:'dist',
		port:88, //端口号
		livereload:true//随时更新
	}) 
})




gulp.task('es6',()=>{
	return gulp
				.src('es6/*.js')
				.pipe(babel({
					presets:['env']
				}))
				.pipe(gulp.dest('dist/scripts/'))
})


gulp.task("sass",()=>{
	 return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task("default",["watch","server"]);

//使得调用gulp时，整个文件都进行加载