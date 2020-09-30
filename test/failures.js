'use strict'

const path = require('path')
const fs = require('fs')
const {test, threw} = require('tap')
const {CLIEngine} = require('eslint')
const EOL_CODE = path.join(__dirname, 'fixtures', 'no-eol-fixture')
const MAX_LEN_CODE = path.join(__dirname, 'fixtures', 'max-len-fixture')

const readFile = fs.promises.readFile
test('invalid config', async (t) => {
  const cli = new CLIEngine({
    useEslintrc: false
  , configFile: 'eslintrc.json'
  })

  t.test('no-eol', async (t) => {
    const code = await readFile(EOL_CODE, 'utf8')
    const result = cli.executeOnText(code)
    t.equal(result.errorCount, 1, 'error count')
    t.equal(result.results[0].messages[0].ruleId, 'eol-last', 'missing newline')
  })

  t.test('max-len', async (t) => {
    const code = await readFile(MAX_LEN_CODE, 'utf8')
    const result = cli.executeOnText(code)
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.equal(messages[0].ruleId, 'max-len', 'max length exceeded')
    t.match(messages[0].message, /maximum allowed is 90/ig, 'message expected line length')
  })
}).catch(threw)
