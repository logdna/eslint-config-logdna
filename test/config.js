'use strict'

const path = require('path')
const fs = require('fs')
const {promisify} = require('util')
const {test, threw} = require('tap')
const {CLIEngine} = require('eslint')
const VALID_CODE = path.join(__dirname, 'fixtures', 'valid-code')

const readFile = promisify(fs.readFile)
test('valid config', async (t) => {
  const code = await readFile(VALID_CODE, 'utf8')
  const cli = new CLIEngine({
    useEslintrc: false
  , configFile: '.eslintrc.json'
  })

  const result = cli.executeOnText(code)
  t.equal(result.errorCount, 0, 'error count')
}).catch(threw)
