const { src, dest, watch, series } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const gulp = require('gulp');//for autoprefixer
const autoprefixer = require('gulp-autoprefixer');//for autoprefixer
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

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
    .pipe(autoprefixer({
      cascade: false
    }))
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


function buildCSS(done) {

  src('css/**/**.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('dist/css/'));
  done();
}

function buildJS(done) {

  src(['js/**.js', '!js/**.min.js'])
    .pipe(minify({
      ext: {
        min: '.js'
      }
    }))
    .pipe(dest('dist/js/'));

  src('js/**.min.js').pipe(dest('dist/js/'));

  done();

}


function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done();
}

function php(done) {
  src(['**.php'])
    .pipe(dest('dist/'));
  src('phpmailer/**')
    .pipe(dest('dist/phpmailer'));
  done();
}


function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts'));
  done();
}


function imagemin(done) {

  src('img/**/**')
    .pipe(tinypng({
      key: 'DL4MFWd4l95Q0mlL86sKHVcfwTNrnbw5',
    }))
    .pipe(dest('dist/img/'))

  src('img/**/*.svg')
    .pipe(dest('dist/img'))

  done();

}


exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);

//Minimize and rename .css with suffix "min"
//gulp.task("default", function () {
//gulp
//.src("src/**/*.css")
//.pipe(cssmin())
//.pipe(rename({ suffix: ".min" }))
//.pipe(gulp.dest("dist"));
//});
