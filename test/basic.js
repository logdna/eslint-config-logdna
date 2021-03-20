'use strict'

const {test, threw} = require('tap')
const config = require('../index.js')

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

test('basic properties', async (t) => {
  t.ok(isObject(config.parserOptions), 'parserOptions is object')
  t.ok(isObject(config.env), 'env is object')
  t.ok(isObject(config.globals), 'globals is object')
  t.ok(isObject(config.rules), 'rules is object')
}).catch(threw)
