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
    t.strictEqual(result.errorCount, 1, 'error count')
    t.strictEqual(result.results[0].messages[0].ruleId, 'eol-last', 'missing newline')
  })

  t.test('max-len', async (t) => {
    const result = cli.executeOnFiles(['max-len-fixture'])
    t.strictEqual(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.strictEqual(messages[0].ruleId, 'max-len', 'max length exceeded')
    t.match(
      messages[0].message
    , /maximum allowed is 90/ig
    , 'message expected line length'
    )
  })

  t.test('no-debugger', async (t) => {
    const result = cli.executeOnFiles(['no-debugger-fixture'])
    t.strictEqual(result.errorCount, 1, 'error count')
    t.strictEqual(result.results[0].messages[0].ruleId, 'no-debugger', 'missing newline')
  })

  t.test('plugin-logdna', async (t) => {
    const result = cli.executeOnFiles(['logdna-plugin-fixture'])
    const messages = result.results[0].messages
    t.strictEqual(result.errorCount, 5, 'error count')

    t.strictEqual(
      messages[0].ruleId
    , 'logdna/require-file-extension'
    , 'file extension required'
    )
    t.strictEqual(
      messages[0].message
    , 'Missing file extension for local module.'
    , 'message expected file extension'
    )

    t.strictEqual(
      messages[1].ruleId
    , 'sensible/check-require'
    , 'required module is missing'
    )
    t.strictEqual(
      messages[1].message
    , 'Missing require: ./test/basic. Path does not exist'
    , 'message expected for missing module'
    )

    t.strictEqual(messages[2].ruleId, 'logdna/grouped-require', 'require grouping')
    t.strictEqual(
      messages[2].message
    , 'Expected \'builtin\' require before \'local\' require.'
    , 'message expected for grouped require'
    )

    t.strictEqual(
      messages[3].ruleId
    , 'logdna/tap-consistent-assertions'
    , 'consistent assertions'
    )
    t.strictEqual(
      messages[3].message
    , 'The "strictEqual" alias is preferred over "isEqual"'
    , 'message expected preferred alias'
    )

    t.strictEqual(
      messages[4].ruleId
    , 'logdna/tap-consistent-assertions'
    , 'consistent assertions'
    )
    t.strictEqual(
      messages[4].message
    , 'The "deepEqual" alias is preferred over "same"'
    , 'message expected preferred alias'
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
    t.strictEqual(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.strictEqual(messages[0].ruleId, 'arrow-parens', 'arrow-parens is the rule id')
    t.strictEqual(
      messages[0].message
    , 'Expected parentheses around arrow function argument.'
    , 'Error message is correct'
    )
  })

  t.test('arrow-body-style', async (t) => {
    const code = '[].map((thing) => thing + 1)'

    const result = cli.executeOnText(code)
    t.strictEqual(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.strictEqual(
      messages[0].ruleId
    , 'arrow-body-style'
    , 'arrow-body-style is the rule id'
    )
    t.strictEqual(
      messages[0].message
    , 'Expected block statement surrounding arrow body.'
    , 'Error message is correct'
    )
  })

  t.test('func-style', async (t) => {
    const code = 'const NOOP = () => {}'

    const result = cli.executeOnText(code)
    t.strictEqual(result.errorCount, 1, 'error count')
    const messages = result.results[0].messages

    t.strictEqual(messages[0].ruleId, 'func-style', 'func-style is the rule id')
    t.strictEqual(
      messages[0].message
    , 'Expected a function declaration.'
    , 'Error message is correct'
    )
  })
})
