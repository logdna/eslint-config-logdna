# eslint-config-logdna

[![npm version](https://badge.fury.io/js/eslint-config-logdna.svg)](https://badge.fury.io/js/eslint-config-logdna)
[![Build Status](https://github.com/logdna/eslint-config-logdna/actions/workflows/ci.yml/badge.svg)](https://github.com/logdna/eslint-config-logdna/actions)
[![Coverage Status](https://coveralls.io/repos/github/logdna/eslint-config-logdna/badge.svg?branch=main)](https://coveralls.io/github/logdna/eslint-config-logdna?branch=main)

LogDNA's preferred ESLint configuration for Node.js projects. Compatible with ESLint 9+ and 10+.

## Installation

```bash
npm install --save-dev eslint-config-logdna eslint@latest
```

## Usage

### ESLint 9+ (Flat Config Format) - Recommended

Create a file named `eslint.config.js` in your project root:

```javascript
// eslint.config.js
const logdna = require('eslint-config-logdna')

module.exports = [
  {
    files: ['**/*.js']
  , extends: [logdna]
  }
, {
    // Additional configuration for this project
    ignores: ['example/**', 'test/fixtures/**']
  }
]
```

### Legacy ESLint < 9

If you are using an older version of ESLint, you can still use the old format:

```json
{
  "extends": ["logdna"]
}
```

**Note**: The legacy format is deprecated and will be removed in future versions.

## Migration Guide

See [MIGRATION.md](./doc/MIGRATION.md) for detailed migration instructions from the older `.eslintrc.json` format to the new flat config format.

## Examples

See [EXAMPLES.md](./doc/EXAMPLES.md) for various usage examples including Node.js, ES6+, and ESM projects.

## Extending This Config

See [EXTENDING.md](./doc/EXTENDING.md) for instructions on creating custom configurations based on this one.

## License

MIT
