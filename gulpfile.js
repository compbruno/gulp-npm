const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

function compilaSass() {
  return gulp
  .src('css/scss/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream())
}


gulp.task('sass', compilaSass)

// Função para juntar o JS
function gulpJS() {
  return gulp
  .src('js/main/*.js')
  .pipe(concat('main.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('js/'))
  .pipe(browserSync.stream())
}

gulp.task('mainjs', gulpJS)

// JS Plugins

function pluginJS() {
  return gulp
  .src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/moment/min/moment.min.js',
    'js/plugin/*.js'
  ])
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('js/'))
  .pipe(browserSync.stream())
}

gulp.task('pluginjs', pluginJS)

function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
}

gulp.task('browser-sync', browser)

//Função de watch do gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass)
  gulp.watch('js/main/*.js', gulpJS)
  gulp.watch('js/plugins/*.js', pluginJS)
  gulp.watch(['*.html', '*.php']).on('change', browserSync.reload)
}

// Tarefa de watch
gulp.task('watch', watch)

// Tarefa padrão do gulp
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs', 'pluginjs'))