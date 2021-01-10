"use strict"

// Dependencies
var gulp = require("gulp")
var sass = require("gulp-sass")
var minifyCSS = require("gulp-clean-css")
var uglify = require("gulp-uglify")
var rename = require("gulp-rename")
var changed = require("gulp-changed")

// Style tasks
gulp.task("sass", function () {
  return gulp
    .src("source-files")
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest("destination"))
})

gulp.task("sass", function () {
  return gulp
    .src("src/assets/scss/**/*.scss") // Gets all files ending with .scss in /scss and children dirs
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("src/assets/css"))
})

// Gulp Watch syntax has changed from 3.x in 4.x
gulp.task("watch", function () {
  gulp.watch("src/assets/scss/**/*.scss", gulp.series("sass"))
})
