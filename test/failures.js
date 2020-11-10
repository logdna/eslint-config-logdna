'use strict'

const path = require('path')
const fs = require('fs')
const {test, threw} = require('tap')
const {CLIEngine} = require('eslint')
const EOL_CODE = path.join(__dirname, 'fixtures', 'no-eol-fixture')
const MAX_LEN_CODE = path.join(__dirname, 'fixtures', 'max-len-fixture')
const LOGDNA_PLUGIN_CODE = path.join(__dirname, 'fixtures', 'logdna-plugin-fixture')

const readFile = fs.promises.readFile
test('invalid config', async (t) => {
  const cli = new CLIEngine({
    useEslintrc: false
  , cwd: __dirname
  , configFile: '../eslintrc.json'
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

  t.test('plugin-logdna', async (t) => {
    const code = await readFile(LOGDNA_PLUGIN_CODE, 'utf8')
    const result = cli.executeOnText(code)
    t.equal(result.errorCount, 4, 'error count')
    const messages = result.results[0].messages

    t.equal(messages[0].ruleId, 'logdna/require-file-extension', 'file extension required')
    t.equal(
      messages[0].message
      , 'Missing file extension for local module.'
      , 'message expected file extension'
    )

    t.equal(messages[1].ruleId, 'logdna/grouped-require', 'require grouping')
    t.equal(
      messages[1].message
      , 'Expected \'builtin\' require before \'local\' require.'
      , 'message expected for grouped require'
    )

    t.equal(messages[2].ruleId, 'logdna/tap-consistent-assertions', 'consistent assertions')
    t.equal(
      messages[2].message
      , 'The "strictEqual" alias is preferred over "isEqual"'
      , 'message expected preferred alias'
    )

    t.equal(messages[3].ruleId, 'logdna/tap-consistent-assertions', 'consistent assertions')
    t.equal(
      messages[3].message
      , 'The "deepEqual" alias is preferred over "same"'
      , 'message expected preferred alias'
    )
  })
}).catch(threw)
