// function defaultTask(cb){
//     console.log('success');
//     cb();
// }

// exports.default = defaultTask

// var gulp = require('gulp');
// var render = require('gulp-nunjucks-render');
// var data = require('gulp-data');

// gulp.task('nunjucks', function() {
//     console.log('did it')
//   return gulp.src('src/pages/**/*.+(nj)')
//   .pipe(data(function () {
//     return require('./src/nunjucks/data.json')
// }))
//   .pipe(render({
//       path: ['src/templates']
//     }))
    
//   .pipe(gulp.dest('public'))
  
// });
var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
 

function getDataForFile(file) {
  return {
    item: 'data loaded for ' + file.relative
  };
}
 
gulp.task('default', function () {

    return gulp.src('src/templates/*.nj')
    .pipe(data(getDataForFile))
    .pipe(nunjucksRender({
      path: 'src/templates',
    }))
    .pipe(gulp.dest('dist'));
});