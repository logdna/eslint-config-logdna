'use strict'

const path = require('path')
const fs = require('fs')
const {promisify} = require('util')
const {test, threw} = require('tap')
const {ESLint} = require('eslint')
const config = require('../index.js')
const VALID_CODE = path.join(__dirname, 'fixtures', 'valid-code.js')

const readFile = promisify(fs.readFile)

test('valid config', async (t) => {
  const code = await readFile(VALID_CODE, 'utf8')

  // Use the flat config directly
  const linter = new ESLint({
    overrideConfigFile: true
  , overrideConfig: config
  , fix: false
  })

  const [result] = await linter.lintText(code)
  t.equal(result.errorCount, 0, 'error count')

  // provide more context for failures by emitting a separate `fail`
  // for each unexpected linting error
  if (result.messages.length) {
    for (const {message} of result.messages) {
      t.fail(message)
    }
  }
}).catch(threw)
