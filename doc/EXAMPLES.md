# ESLint Configuration Examples

This document provides comprehensive examples of how to use `eslint-config-logdna` in your projects.

## Basic Usage

### Minimal Setup (Recommended)

Using ESLint's documented `extends` approach:

```javascript
// eslint.config.js
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    extends: [logdna]
  }
])
```

## Recommended Pattern (Using extends)

The `extends` property is ESLint's documented approach for combining configurations. It merges the extended configs into the current config object.

### With Custom Rules

```javascript
// eslint.config.js
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    extends: [logdna],
    rules: {
      'no-console': 'error',
      'prefer-const': 'error',
      'no-var': 'error'
    }
  }
])
```

### With File-Specific Configurations

```javascript
// eslint.config.js
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')

module.exports = defineConfig([
  {
    // Apply base config to all JS files
    files: ['**/*.js'],
    extends: [logdna]
  },
  {
    // Special rules for test files
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      'no-console': 'off',
      'max-len': 'off',
      'no-unused-expressions': 'off'
    }
  },
  {
    // Strict rules for source files
    files: ['src/**/*.js'],
    rules: {
      'no-console': 'error',
      'no-debugger': 'error'
    }
  }
])
```

### Combining Multiple Configs

```javascript
// eslint.config.js
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')
const securityConfig = require('eslint-config-security')
const testConfig = require('eslint-config-testing')

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    extends: [logdna, securityConfig]
  },
  {
    files: ['**/*.test.js'],
    extends: [testConfig]
  }
])
```

## Advanced Configurations

### ESM Projects

For projects using ES modules:

```javascript
// eslint.config.mjs
import {defineConfig} from 'eslint/config'
import logdna from 'eslint-config-logdna'

export default defineConfig([
  {
    files: ['**/*.js', '**/*.mjs'],
    extends: [logdna],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2024
    }
  }
])
```

### TypeScript Projects

If you're using TypeScript alongside JavaScript:

```javascript
// eslint.config.js
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')
const tseslint = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')

module.exports = defineConfig([
  {
    // JavaScript files
    files: ['**/*.js'],
    extends: [logdna]
  },
  {
    // TypeScript files
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
])
```

### With Custom Globals

```javascript
// eslint.config.js
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    extends: [logdna],
    languageOptions: {
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        // Custom globals
        MY_GLOBAL: 'readonly',
        CONFIG: 'writable'
      }
    }
  }
])
```

### With Custom Ignore Patterns

```javascript
// eslint.config.js
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    extends: [logdna]
  },
  {
    ignores: [
      'dist/**',
      'build/**',
      '*.min.js',
      'vendor/**',
      'public/lib/**'
    ]
  }
])
```

## Migration Examples

### From .eslintrc.json

**Before (.eslintrc.json):**
```json
{
  "extends": ["eslint-config-logdna"],
  "rules": {
    "no-console": "error"
  },
  "overrides": [
    {
      "files": ["*.test.js"],
      "rules": {
        "no-console": "off"
      }
    }
  ]
}
```

**After (eslint.config.js):**
```javascript
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    extends: [logdna],
    rules: {
      'no-console': 'error'
    }
  },
  {
    files: ['**/*.test.js'],
    rules: {
      'no-console': 'off'
    }
  }
])
```

### From .eslintrc.js

**Before (.eslintrc.js):**
```javascript
module.exports = {
  extends: ['eslint-config-logdna'],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'no-console': 'error'
  }
}
```

**After (eslint.config.js):**
```javascript
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')
const globals = require('globals')

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    extends: [logdna],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    },
    rules: {
      'no-console': 'error'
    }
  }
])
```

## Tips and Best Practices

1. **Use defineConfig**: Always wrap your configuration in `defineConfig()` for better type checking and IDE support.

2. **Be specific with files**: Use the `files` property to target specific file patterns for better performance.

3. **Order matters**: Configs are applied in order, so place more specific configs after general ones.

4. **Test your config**: Use `eslint --debug` to see how your configuration is being applied.

5. **Keep it simple**: Start with the base config and only add customizations as needed.

## Troubleshooting

### Config not being applied

Ensure your file is named `eslint.config.js` (not `.eslintrc.js`) and is in the project root.

### Extends not working

Make sure you're using `defineConfig` from 'eslint/config' and that your ESLint version is 9.0.0 or higher.

### Plugin errors

If you see "context.getScope is not a function", the plugin hasn't been updated for ESLint 9+. Check for updates or alternatives.



## Creating Your Own Shareable Config

If you want to create your own shareable configuration that extends eslint-config-logdna, see our [Extending Guide](./EXTENDING.md) for detailed instructions on creating and publishing your own config package.
