/**
 * ESLint configuration for testing eslint-config-logdna
 * Dogfooding our own configuration using the recommended pattern
 */
'use strict'

const {defineConfig} = require('eslint/config')
const logdna = require('./index.js')

module.exports = defineConfig([
  {
    'files': ['**/*.js']
  , 'extends': [logdna]
  }
, {
    // Additional ignores for this project
    ignores: ['example/**', 'test/fixtures/**', 'template/**']
  }
])

