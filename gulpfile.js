let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () { // создаем задачу для gulp
  gulp.src('grow-shrink-basis.css') // путь к css
    .pipe(autoprefixer()) //пропускаем его через автопрефиксер
    .pipe(gulp.dest('build')) // и помещаем в билд проекта
});

gulp.task('watch', function () { // создаем таск для отслеживания изменений в css и динамического создания автопрефиксов
  gulp.watch('grow-shrink-basis.css', ['styles']); // путь-к-файлу css и имя таска
});
