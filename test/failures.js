'use strict'

const path = require('path')
const {ESLint} = require('eslint')
const {test, threw} = require('tap')

test('Invalid linting for larger code blocks read from fixtures', async (t) => {
  const linter = new ESLint({
    useEslintrc: false
  , cwd: path.join(__dirname, 'fixtures')
  , overrideConfigFile: '../../.eslintrc.json'
  })

  t.test('no-eol', async (t) => {
    const [result] = await linter.lintFiles(['no-eol-fixture'])
    t.equal(result.errorCount, 1, 'error count')
    t.equal(result.messages[0].ruleId, 'eol-last', 'missing newline')
  })

  t.test('max-len', async (t) => {
    const [result] = await linter.lintFiles(['max-len-fixture'])
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.messages

    t.equal(messages[0].ruleId, 'max-len', 'max length exceeded')
    t.match(
      messages[0].message
    , /maximum allowed is 90/ig
    , 'message expected line length'
    )
  })

  t.test('no-unused-vars for arguments', async (t) => {
    const [result] = await linter.lintFiles(['no-unused-args-fixture'])
    t.equal(result.errorCount, 2, 'error count')

    const messages = result.messages
    t.ok(
      messages.every(({ruleId}) => {
        return ruleId === 'no-unused-vars'
      })
    , 'errors from expected rule'
    )

    t.match(
      messages[0].message
    , "'c' is defined but never used."
    , 'message expected for unused after-used'
    )
    t.match(
      messages[1].message
    , "'r' is defined but never used."
    , 'message expected for unused'
    )
  })

  t.test('no-multiple-empty-lines', async (t) => {
    const [result] = await linter.lintFiles(['no-multiple-empty-lines-fixture'])
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.messages

    t.equal(messages[0].ruleId, 'no-multiple-empty-lines', 'multiple empty found')
    t.match(
      messages[0].message
    , /more than 1 blank line not allowed/ig
    , 'message expected multiple empty'
    )
  })

  t.test('no-debugger', async (t) => {
    const [result] = await linter.lintFiles(['no-debugger-fixture'])
    t.equal(result.errorCount, 1, 'error count')
    t.equal(result.messages[0].ruleId, 'no-debugger', 'missing newline')
  })

  t.test('plugin-logdna', async (t) => {
    const [result] = await linter.lintFiles(['logdna-plugin-fixture'])
    const messages = result.messages
    t.equal(result.errorCount, 6, 'error count')

    t.equal(
      messages[0].ruleId
    , 'sensible/check-require'
    , 'file extension required'
    )
    t.equal(
      messages[0].message
    , 'Missing require: ./test/basic. Path does not exist'
    , 'message expected file extension'
    )

    t.equal(
      messages[1].ruleId
    , 'logdna/require-file-extension'
    , 'required module is missing'
    )
    t.equal(
      messages[1].message
    , 'Missing file extension for local module.'
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

  t.test('function-call-argument-newline', async (t) => {
    const [result] = await linter.lintFiles(['function-call-argument-newline-fixture'])
    const messages = result.messages
    t.equal(result.errorCount, 4, 'error count')
    t.equal(
      messages[0].message
    , 'Expected newline after \'(\'.'
    , 'fooBar call 1: first param should be on separate line from function'
    )

    t.equal(
      messages[1].message
    , 'Expected indentation of 14 spaces but found 0.'
    , 'fooBar call 1: arguments should align on first punctuation'
    )

    t.equal(
      messages[2].message
    , 'Expected newline between arguments/params.'
    , 'fooBar call 2: second param should be followed by newline'
    )

    t.equal(
      messages[3].message
    , 'There should be a line break after this argument.'
    , 'fooBar call 2: space after second param should be newline'
    )
  })

  t.test('function-paren-newline', async (t) => {
    const [result] = await linter.lintFiles(['function-paren-newline-fixture'])
    const messages = result.messages
    t.equal(result.errorCount, 2, 'error count')

    t.equal(
      messages[0].message
    , 'Expected newline after \'(\'.'
    , 'fooBar definition: first param should be on new line'
    )

    t.equal(
      messages[1].message
    , 'Expected newline between arguments/params.'
    , 'twoBar definition: all params should be on own lines'
    )
  })
}).catch(threw)

test('Invalid linting with quick-and-dirty inline code', async (t) => {
  const linter = new ESLint({
    useEslintrc: false
  , cwd: __dirname
  , overrideConfigFile: '../.eslintrc.json'
  , overrideConfig: {
      rules: {
        'strict': 'off'
      , 'sensible/indent': 'off'
      , 'eol-last': 'off'
      , 'no-unused-vars': 'off'
      }
    }
  })

  t.test('arrow-parens', async (t) => {
    const code = '[].map(thing => { return thing + 1 })'

    const [result] = await linter.lintText(code)
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.messages

    t.equal(messages[0].ruleId, 'arrow-parens', 'arrow-parens is the rule id')
    t.equal(
      messages[0].message
    , 'Expected parentheses around arrow function argument.'
    , 'Error message is correct'
    )
  })

  t.test('arrow-body-style', async (t) => {
    const code = '[].map((thing) => thing + 1)'

    const [result] = await linter.lintText(code)
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.messages

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

    const [result] = await linter.lintText(code)
    t.equal(result.errorCount, 1, 'error count')
    const messages = result.messages

    t.equal(messages[0].ruleId, 'func-style', 'func-style is the rule id')
    t.equal(
      messages[0].message
    , 'Expected a function declaration.'
    , 'Error message is correct'
    )
  })
})
