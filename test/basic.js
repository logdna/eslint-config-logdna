'use strict'

const {test, threw} = require('tap')
const config = require('../index.js')

test('flat config structure', async (t) => {
  t.type(config, 'Array', 'config is an array')
  t.equal(config.length, 2, 'config has 2 elements (ignores and base)')

  const [ignoreConfig, baseConfig] = config

  t.type(ignoreConfig, 'Object', 'first config is an object')
  t.type(ignoreConfig.ignores, 'Array', 'ignores is an array')

  t.type(baseConfig, 'Object', 'second config is an object')
  t.type(baseConfig.languageOptions, 'Object', 'languageOptions is object')
  t.type(baseConfig.plugins, 'Object', 'plugins is object')
  t.type(baseConfig.rules, 'Object', 'rules is object')
}).catch(threw)

test('exported configs', async (t) => {
  t.type(config.configs, 'Object', 'configs export is object')
  t.type(config.configs.recommended, 'Array', 'recommended config is array')
  t.type(config.configs.base, 'Object', 'base config is object')
  t.type(config.configs.ignores, 'Object', 'ignores config is object')
}).catch(threw)
