'use strict'

// ESLint flat config for LogDNA/Mezmo projects
// Compatible with ESLint 9+ and 10+
const base = {
  files: ['**/*.js', '**/*.mjs', '**/*.cjs']

, languageOptions: {
    ecmaVersion: 2022
  , sourceType: 'script'
  , globals: {
      __dirname: 'readonly'
    , __filename: 'readonly'
    , Buffer: 'readonly'
    , console: 'readonly'
    , exports: 'readonly'
    , global: 'readonly'
    , module: 'readonly'
    , process: 'readonly'
    , require: 'readonly'
    , setImmediate: 'readonly'
    , setInterval: 'readonly'
    , setTimeout: 'readonly'
    , clearImmediate: 'readonly'
    , clearInterval: 'readonly'
    , clearTimeout: 'readonly'
    , URL: 'readonly'
    , URLSearchParams: 'readonly'
    , Atomics: 'readonly'
    , SharedArrayBuffer: 'readonly'
    , debug: false
    }
  , parserOptions: {
      ecmaFeatures: {
        globalReturn: true
      }
    }
  }
, plugins: {
    n: require('eslint-plugin-n')
  , sensible: require('eslint-plugin-sensible')
  , logdna: require('eslint-plugin-logdna')
  }
, rules: {
    'array-callback-return': 'error'
  , 'no-async-promise-executor': 'error'
  , 'no-await-in-loop': 'off'
  , 'no-cond-assign': ['error', 'except-parens']
  , 'no-const-assign': 'error'
  , 'no-debugger': 'error'
  , 'no-empty-pattern': 'error'
  , 'no-fallthrough': 'warn'
  , 'no-inner-declarations': 'error'
  , 'no-irregular-whitespace': 'error'
  , 'no-misleading-character-class': 'error'
  , 'no-prototype-builtins': 'error'
  , 'no-self-assign': 'error'
  , 'no-self-compare': 'error'
  , 'no-sparse-arrays': 'error'
  , 'no-template-curly-in-string': 'error'
  , 'no-undef': 'error'
  , 'no-unexpected-multiline': 'error'
  , 'no-unmodified-loop-condition': 'off'
  , 'no-unreachable': 'error'
  , 'no-unsafe-finally': 'error'
  , 'no-unsafe-negation': 'error'
  , 'no-unused-expressions': ['error', {
      allowShortCircuit: false
    , allowTernary: false
    }]
  , 'no-unused-labels': 'error'
  , 'no-unused-vars': ['error', {
      vars: 'all'
    , args: 'after-used'
    , ignoreRestSiblings: true
    , varsIgnorePattern: '^_$'
    }]
  , 'no-use-before-define': ['error', {
      functions: false
    }]
  , 'no-useless-backreference': 'error'
  , 'no-useless-catch': 'error'
  , 'no-useless-escape': 'error'
  , 'require-atomic-updates': 'error'
  , 'use-isnan': 'error'
  , 'valid-typeof': 'error'
  , 'accessor-pairs': 'off'
  , 'arrow-body-style': ['error', 'always']
  , 'block-scoped-var': 'error'
  , 'class-methods-use-this': ['off', {
      exceptMethods: []
    }]
  , 'complexity': ['off', 11]
  , 'consistent-return': 'off'
  , 'consistent-this': ['error', 'that']
  , 'curly': ['error', 'multi-line']
  , 'default-case': 'off'
  , 'dot-notation': ['error', {
      allowKeywords: true
    }]
  , 'eqeqeq': ['error', 'allow-null']
  , 'func-style': ['error', 'declaration']
  , 'guard-for-in': 'error'
  , 'max-classes-per-file': 'off'
  , 'max-depth': 'off'
  , 'max-lines': 'off'
  , 'max-lines-per-function': 'off'
  , 'max-nested-callbacks': 'off'
  , 'max-params': 'off'
  , 'max-statements': 'off'
  , 'new-cap': 'off'
  , 'no-alert': 'error'
  , 'no-array-constructor': 'error'
  , 'no-bitwise': 'off'
  , 'no-caller': 'error'
  , 'no-case-declarations': 'error'
  , 'no-console': 'off'
  , 'no-continue': 'off'
  , 'no-delete-var': 'error'
  , 'no-div-regex': 'off'
  , 'no-else-return': 'off'
  , 'no-empty': 'error'
  , 'no-empty-function': ['error', {
      allow: ['arrowFunctions', 'functions', 'methods']
    }]
  , 'no-eq-null': 'error'
  , 'no-eval': 'error'
  , 'no-extend-native': 'error'
  , 'no-extra-bind': 'error'
  , 'no-extra-label': 'error'
  , 'no-global-assign': ['error', {
      exceptions: []
    }]
  , 'no-implicit-coercion': ['off', {
      'boolean': false
    , 'number': true
    , 'string': true
    , 'allow': []
    }]
  , 'no-implicit-globals': 'off'
  , 'no-implied-eval': 'error'
  , 'no-invalid-this': 'off'
  , 'no-iterator': 'error'
  , 'no-labels': ['error', {
      allowLoop: false
    , allowSwitch: false
    }]
  , 'no-lone-blocks': 'off'
  , 'no-lonely-if': 'off'
  , 'no-loop-func': 'error'
  , 'no-magic-numbers': 'off'
  , 'no-multi-assign': 'off'
  , 'no-multi-str': 'error'
  , 'no-negated-condition': 'off'
  , 'no-nested-ternary': 'off'
  , 'no-new': 'warn'
  , 'no-new-func': 'error'
  , 'no-new-wrappers': 'error'
  , 'no-object-constructor': 'error'
  , 'no-octal': 'error'
  , 'no-octal-escape': 'error'
  , 'no-param-reassign': 'off'
  , 'no-plusplus': 'off'
  , 'no-proto': 'error'
  , 'no-redeclare': 'error'
  , 'no-regex-spaces': 'error'
  , 'no-restricted-exports': 'off'
  , 'no-restricted-globals': 'off'
  , 'no-restricted-imports': 'off'
  , 'no-restricted-properties': ['error', {
      object: 'arguments'
    , property: 'callee'
    , message: 'arguments.callee is deprecated,'
    }, {
      property: '__defineGetter__'
    , message: 'Please use Object.defineProperty instead.'
    }, {
      property: '__defineSetter__'
    , message: 'Please use Object.defineProperty instead.'
    }]
  , 'no-restricted-syntax': 'off'
  , 'no-return-assign': 'error'
  , 'no-script-url': 'error'
  , 'no-sequences': 'error'
  , 'no-shadow': 'off'
  , 'no-shadow-restricted-names': 'error'
  , 'no-ternary': 'off'
  , 'no-throw-literal': 'error'
  , 'no-undef-init': 'off'
  , 'no-undefined': 'off'
  , 'no-underscore-dangle': 'off'
  , 'no-unneeded-ternary': 'off'
  , 'no-useless-call': 'off'
  , 'no-useless-computed-key': 'off'
  , 'no-useless-concat': 'error'
  , 'no-useless-constructor': 'error'
  , 'no-useless-rename': 'error'
  , 'no-useless-return': 'error'
  , 'no-var': 'off'
  , 'no-void': 'error'
  , 'no-warning-comments': ['off', {
      terms: ['todo', 'fixme', 'xxx']
    , location: 'start'
    }]
  , 'no-with': 'error'
  , 'object-shorthand': 'off'
  , 'one-var': ['off', {
      uninitialized: 'always'
    , initialized: 'never'
    }]
  , 'operator-assignment': 'off'
  , 'prefer-arrow-callback': 'off'
  , 'prefer-const': 'warn'
  , 'prefer-destructuring': 'off'
  , 'prefer-exponentiation-operator': 'off'
  , 'prefer-named-capture-group': 'off'
  , 'prefer-numeric-literals': 'off'
  , 'prefer-object-has-own': 'off'
  , 'prefer-object-spread': 'error'
  , 'prefer-promise-reject-errors': 'off'
  , 'prefer-regex-literals': 'off'
  , 'prefer-rest-params': 'off'
  , 'prefer-spread': 'off'
  , 'prefer-template': 'off'
  , 'radix': 'off'
  , 'require-await': 'off'
  , 'require-unicode-regexp': 'off'
  , 'require-yield': 'error'
  , 'sort-imports': 'off'
  , 'sort-keys': 'off'
  , 'sort-vars': 'off'
  , 'strict': ['warn', 'global']
  , 'symbol-description': 'off'
  , 'vars-on-top': 'off'
  , 'yoda': 'off'
  , 'array-bracket-spacing': ['error', 'never']
  , 'arrow-parens': ['error', 'always']
  , 'arrow-spacing': 'off'
  , 'block-spacing': ['error', 'always']
  , 'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }]
  , 'comma-dangle': ['error', 'never']
  , 'comma-spacing': ['error', {
      before: false
    , after: true
    }]
  , 'comma-style': ['error', 'first']
  , 'computed-property-spacing': 'off'
  , 'dot-location': ['error', 'property']
  , 'eol-last': ['error', 'always']
  , 'func-call-spacing': 'error'
  , 'function-call-argument-newline': ['error', 'consistent']
  , 'function-paren-newline': ['error', 'multiline-arguments']
  , 'generator-star-spacing': 'off'
  , 'implicit-arrow-linebreak': 'off'
  , 'indent': 'off'
  , 'jsx-quotes': 'off'
  , 'key-spacing': ['error', {
      beforeColon: false
    , afterColon: true
    }]
  , 'keyword-spacing': ['error', {
      overrides: {
        'else': {
          before: true
        }
      , 'while': {
          before: true
        }
      , 'catch': {
          before: true
        }
      }
    }]
  , 'line-comment-position': 'off'
  , 'linebreak-style': ['error', 'unix']
  , 'lines-around-comment': 'off'
  , 'lines-between-class-members': 'off'
  , 'max-len': ['error', 90, {
      ignoreComments: true
    , ignoreUrls: true
    , ignoreTemplateLiterals: true
    }]
  , 'max-statements-per-line': 'off'
  , 'multiline-comment-style': 'off'
  , 'multiline-ternary': 'off'
  , 'new-parens': 'off'
  , 'newline-per-chained-call': 'off'
  , 'no-extra-parens': 'off'
  , 'no-extra-semi': 'off'
  , 'no-floating-decimal': 'error'
  , 'no-mixed-operators': 'off'
  , 'no-mixed-spaces-and-tabs': 'error'
  , 'no-multi-spaces': 'error'
  , 'no-multiple-empty-lines': ['error', {max: 1}]
  , 'no-tabs': 'error'
  , 'no-trailing-spaces': 'error'
  , 'no-whitespace-before-property': 'off'
  , 'nonblock-statement-body-position': 'off'
  , 'object-curly-newline': 'off'
  , 'object-curly-spacing': ['error', 'never']
  , 'object-property-newline': 'off'
  , 'one-var-declaration-per-line': 'off'
  , 'operator-linebreak': ['error', 'before']
  , 'padded-blocks': ['off', 'never']
  , 'padding-line-between-statements': 'off'
  , 'quote-props': ['error', 'consistent-as-needed', {
      keywords: true
    , unnecessary: false
    }]
  , 'quotes': ['error', 'single', 'avoid-escape']
  , 'rest-spread-spacing': 'off'
  , 'semi': ['error', 'never']
  , 'semi-spacing': 'off'
  , 'semi-style': 'off'
  , 'space-before-blocks': ['error', 'always']
  , 'space-before-function-paren': ['error', {
      anonymous: 'never'
    , named: 'never'
    , asyncArrow: 'always'
    }]
  , 'space-in-parens': ['error', 'never']
  , 'space-infix-ops': 'error'
  , 'space-unary-ops': ['error', {
      words: false
    , nonwords: false
    }]
  , 'spaced-comment': ['error', 'always']
  , 'switch-colon-spacing': 'off'
  , 'template-curly-spacing': 'off'
  , 'template-tag-spacing': 'off'
  , 'unicode-bom': 'off'
  , 'wrap-iife': ['error', 'outside', {
      functionPrototypeMethods: false
    }]
  , 'wrap-regex': 'off'
  , 'yield-star-spacing': 'off'
  , 'n/no-deprecated-api': 'error'
  , 'n/handle-callback-err': ['error', '^(error|err|er)']
  , 'sensible/indent': ['error', 2, {
      FunctionExpression: {
        parameters: 'first'
      }
    , FunctionDeclaration: {
        parameters: 'first'
      , body: 1
      }
    , CallExpression: {
        arguments: 'first'
      }
    , SwitchCase: 1
    }]
  , 'sensible/check-require': ['error', 'always']
  , 'logdna/grouped-require': 'error'
  , 'logdna/require-file-extension': 'error'
  , 'logdna/tap-no-deprecated-aliases': 'error'
  }
}

// Configuration for ignoring files
const ingores = {
  ignores: [
    '**/node_modules/**'
  , '**/coverage/**'
  , '**/.nyc_output/**'
  ]
}

// Export the flat config array
// This makes it a shareable config that can be used in other projects
module.exports = [
  ingores
, base
]

// Also export individual configs for flexibility
module.exports.configs = {
  recommended: [ingores, base]
, base: base
, ignores: ingores
}

// For ESM compatibility (future-proofing)
module.exports.default = module.exports
