'use strict'

module.exports = readIt

function readIt(file) {
  const fs = require('node:fs')
  return fs.readFileSync(file)
}
