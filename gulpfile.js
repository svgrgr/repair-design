const { src, dest, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

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
  watch("./js/*.js").on("change", browserSync.reload);
}

function serveSass() {
  return src("./sass/*.sass")
    .pipe(sass())
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

exports.serve = bs;

//Minimize and rename .css with suffix "min"
//gulp.task("default", function () {
//gulp
//.src("src/**/*.css")
//.pipe(cssmin())
//.pipe(rename({ suffix: ".min" }))
//.pipe(gulp.dest("dist"));
//});
