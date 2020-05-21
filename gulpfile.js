const { src, dest, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const gulp = require('gulp');//for autoprefixer
const autoprefixer = require('gulp-autoprefixer');//for autoprefixer

//var cssmin = require("gulp-cssmin");
//var rename = require("gulp-rename");

// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on("change", browserSync.reload);
}

//sass-to-css
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    .pipe(sass())
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

//autoprefixer
exports.default = () => (
  gulp.src('src/app.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
);
//autoprefixer

exports.serve = bs;

//Minimize and rename .css with suffix "min"
//gulp.task("default", function () {
//gulp
//.src("src/**/*.css")
//.pipe(cssmin())
//.pipe(rename({ suffix: ".min" }))
//.pipe(gulp.dest("dist"));
//});
