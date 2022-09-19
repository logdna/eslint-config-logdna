# eslint-config-logdna

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

LogDNA's preferred ESLint configuration for Node.js projects. Compatible with ESLint 9+ and 10+.

## Installation

> Requires eslint also

```bash
npm install --save-dev eslint-config-logdna@latest eslint@latest
```

## Usage

Create a file named `eslint.config.js` in your project root:

```javascript
// eslint.config.js
const {defineConfig} = require('eslint/config')
const logdna = require('eslint-config-logdna')

module.exports = defineConfig([
  {
    files: ['**/*.js']
  , extends: [logdna]
  }
, {
    // Additional configuration for this project
    ignores: ['example/**', 'test/fixtures/**']
  }
])
```


## Migration Guide

See [MIGRATION.md](./doc/MIGRATION.md) for detailed migration instructions from the older `.eslintrc.json` format to the new flat config format.

## Examples

See [EXAMPLES.md](./doc/EXAMPLES.md) for various usage examples including Node.js, ES6+, and ESM projects.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://codedependant.net/"><img src="https://avatars.githubusercontent.com/u/148561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Satterwhite</b></sub></a><br /><a href="https://github.com/logdna/eslint-config-logdna/commits?author=esatterwhite" title="Documentation">📖</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=esatterwhite" title="Code">💻</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=esatterwhite" title="Tests">⚠️</a> <a href="#maintenance-esatterwhite" title="Maintenance">🚧</a></td>
      <td align="center"><a href="https://github.com/darinspivey"><img src="https://avatars.githubusercontent.com/u/1874788?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Darin Spivey</b></sub></a><br /><a href="https://github.com/logdna/eslint-config-logdna/commits?author=darinspivey" title="Documentation">📖</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=darinspivey" title="Code">💻</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=darinspivey" title="Tests">⚠️</a></td>
      <td align="center"><a href="https://github.com/mdeltito"><img src="https://avatars.githubusercontent.com/u/69520?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mike Del Tito</b></sub></a><br /><a href="https://github.com/logdna/eslint-config-logdna/commits?author=mdeltito" title="Documentation">📖</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=mdeltito" title="Code">💻</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=mdeltito" title="Tests">⚠️</a> <a href="#maintenance-mdeltito" title="Maintenance">🚧</a></td>
      <td align="center"><a href="https://biblicalph.github.io"><img src="https://avatars.githubusercontent.com/u/3032519?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kwabena</b></sub></a><br /><a href="#maintenance-biblicalph" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
