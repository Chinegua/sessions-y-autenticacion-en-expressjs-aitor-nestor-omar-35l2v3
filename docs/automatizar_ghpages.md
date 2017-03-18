#Automatizar gh pages

Para automatizar el proceso de gh-pages mediante gulp lo haremos con la siguiente tarea.

```she

    var gulp = require('gulp');
    var ghPages = require('gulp-gh-pages');

    gulp.task('deploy', function() {
      return gulp.src('./html)
        .pipe(ghPages());
    });

```
