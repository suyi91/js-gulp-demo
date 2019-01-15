const { watch, src, task, dest, series, parallel } = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

const filePath = 'src/**/*.js';
const distFolder = ['dist/'];

task(
  'clean',
  () => src(distFolder, { read: false, allowEmpty: true })
    .pipe(clean()),
);

task(
  'compile',
  () => src(filePath)
    .pipe(babel())
    .pipe(dest('dist')),
);

task(
  'lint',
  () => src(filePath)
    .pipe(eslint())
    .pipe(eslint.format()),
);

task(
  'watch',
  parallel(['compile', 'lint']),
);

task(
  'default',
  series(
    'clean',
    () => watch(
      filePath,
      { ignoreInitial: false },
      parallel(['compile', 'lint']),
    ),
  ),
);
