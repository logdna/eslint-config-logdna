# Migration Guide

This guide helps you migrate from older ESLint configurations to the new flat config format compatible with ESLint 9+.

## From .eslintrc.json (Legacy Format)

If you were using a `.eslintrc.json` file, here's how to migrate:

### Old Configuration
```json
{
  "extends": ["logdna"],
  "env": {
    "es6": true,
    "node": true
  },
  "globals": {
    "debug": false
  },
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "script"
  }
}
```

### New Flat Config Format
```javascript
// eslint.config.js
const logdna = require('eslint-config-logdna')

module.exports = [
  {
    files: ['**/*.js']
  , extends: [logdna]
  }
, {
    // Add your project-specific ignores here
    ignores: ['example/**', 'test/fixtures/**']
  }
]
```

## Key Changes

1. **Configuration File**: Change from `.eslintrc.json` to `eslint.config.js`
2. **Format**: Use JavaScript array format instead of JSON
3. **Plugin Imports**: Import plugins directly in your config file
4. **extends syntax**: Use `extends: [logdna]` instead of `extends: ["logdna"]`

## Plugin Updates

The following plugins have been updated to support ESLint 9+:

- `eslint-plugin-node` → `eslint-plugin-n`
- All plugin rules are now referenced with their new namespaced formats

## Testing Your Migration

After migration, run:

```bash
npm run lint
```

Your existing tests should continue to pass. If not, check that all your code follows the new configuration rules.

## Backward Compatibility

This configuration still supports the old `extends` syntax for backward compatibility but recommends using the new flat config format.

