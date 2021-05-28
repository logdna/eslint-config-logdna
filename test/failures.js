'use strict'

const path = require('path')
const {CLIEngine} = require('eslint')
const {test, threw} = require('tap')

test('Invalid linting for larger code blocks read from fixtures', async (t) => {
  const cli = new CLIEngine({
    useEslintrc: false
  , cwd: path.join(__dirname, 'fixtures')
  , configFile: '../../.eslintrc.json'
  })

  t.test('no-eol', async (t) => {
    const result = cli.executeOnFiles(['no-eol-fixture'])
    t.equal(result.errorCount, 1, 'error count')
    t.equal(result.results[0].messages[0].ruleId, 'eol-last', 'missing newline')
  })

  t.test('max-len', async (t) => {
    const result = cli.executeOnFiles(['max-len-fixture'])
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.equal(messages[0].ruleId, 'max-len', 'max length exceeded')
    t.match(
      messages[0].message
    , /maximum allowed is 90/ig
    , 'message expected line length'
    )
  })

  t.test('no-multiple-empty-lines', async (t) => {
    const result = cli.executeOnFiles(['no-multiple-empty-lines-fixture'])
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.equal(messages[0].ruleId, 'no-multiple-empty-lines', 'multiple empty found')
    t.match(
      messages[0].message
    , /more than 1 blank line not allowed/ig
    , 'message expected multiple empty'
    )
  })

  t.test('no-debugger', async (t) => {
    const result = cli.executeOnFiles(['no-debugger-fixture'])
    t.equal(result.errorCount, 1, 'error count')
    t.equal(result.results[0].messages[0].ruleId, 'no-debugger', 'missing newline')
  })

  t.test('plugin-logdna', async (t) => {
    const result = cli.executeOnFiles(['logdna-plugin-fixture'])
    const messages = result.results[0].messages
    t.equal(result.errorCount, 6, 'error count')

    t.equal(
      messages[0].ruleId
    , 'logdna/require-file-extension'
    , 'file extension required'
    )
    t.equal(
      messages[0].message
    , 'Missing file extension for local module.'
    , 'message expected file extension'
    )

    t.equal(
      messages[1].ruleId
    , 'sensible/check-require'
    , 'required module is missing'
    )
    t.equal(
      messages[1].message
    , 'Missing require: ./test/basic. Path does not exist'
    , 'message expected for missing module'
    )

    t.equal(messages[2].ruleId, 'logdna/grouped-require', 'require grouping')
    t.equal(
      messages[2].message
    , 'Expected \'builtin\' require before \'local\' require.'
    , 'message expected for grouped require'
    )

    t.equal(
      messages[3].ruleId
    , 'logdna/tap-no-deprecated-aliases'
    , 'no deprecated assertions'
    )
    t.equal(
      messages[3].message
    , 'The "isEqual" alias is deprecated in favor of "equal"'
    , 'message expected non-deprecated method'
    )

    t.equal(
      messages[4].ruleId
    , 'logdna/tap-no-deprecated-aliases'
    , 'no deprecated assertions'
    )
    t.equal(
      messages[4].message
    , 'The "deepEqual" alias is deprecated in favor of "same"'
    , 'message expected non-deprecated method'
    )

    t.equal(
      messages[5].ruleId
    , 'logdna/tap-no-deprecated-aliases'
    , 'no deprecated assertions'
    )
    t.equal(
      messages[5].message
    , 'The "tearDown" alias is deprecated in favor of "teardown"'
    , 'message expected non-deprecated method'
    )
  })
}).catch(threw)

test('Invlalid linting with quick-and-dirty inline code', async (t) => {
  const cli = new CLIEngine({
    useEslintrc: false
  , cwd: __dirname
  , configFile: '../.eslintrc.json'
  , rules: {
      'strict': 'off'
    , 'sensible/indent': 'off'
    , 'eol-last': 'off'
    , 'no-unused-vars': 'off'
    }
  })

  t.test('arrow-parens', async (t) => {
    const code = '[].map(thing => { return thing + 1 })'

    const result = cli.executeOnText(code)
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.equal(messages[0].ruleId, 'arrow-parens', 'arrow-parens is the rule id')
    t.equal(
      messages[0].message
    , 'Expected parentheses around arrow function argument.'
    , 'Error message is correct'
    )
  })

  t.test('arrow-body-style', async (t) => {
    const code = '[].map((thing) => thing + 1)'

    const result = cli.executeOnText(code)
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.equal(
      messages[0].ruleId
    , 'arrow-body-style'
    , 'arrow-body-style is the rule id'
    )
    t.equal(
      messages[0].message
    , 'Expected block statement surrounding arrow body.'
    , 'Error message is correct'
    )
  })

  t.test('func-style', async (t) => {
    const code = 'const NOOP = () => {}'

    const result = cli.executeOnText(code)
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.equal(messages[0].ruleId, 'func-style', 'func-style is the rule id')
    t.equal(
      messages[0].message
    , 'Expected a function declaration.'
    , 'Error message is correct'
    )
  })
})
