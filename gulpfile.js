'use strict'

const { watch } = require('gulp')
// const { spawn } = require('child_process')
const { spawn } = require('cross-spawn')

exports.default = function () {
  watch('src/**\/*.js', { ignoreInitial: false }, function (cb) {
    const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
    cmd.on('close', () => cb())
  })
}


/* const gulp = require('gulp')
//const { spawn } = require('child_process')
const { spawn } = require('cross-spawn')

gulp.task('lint', (cb) => {
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
  cmd.on('close', () => cb())
})

gulp.task('default', ['lint'], () => {
  gulp.watch('src/**\/*.js', ['lint'])
})  */