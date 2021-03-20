# `eslint-config-logdna`
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This package contains the `eslint` configuration that LogDNA prefers to use across all projects, public and private.

## Installation

**Requires eslint also**

We do not use peer dependencies, so make sure that `eslint` is also installed as a dev dependency.

```shell
npm install eslint-config-logdna eslint --save-dev
```

## Usage

Once the package is installed, there are a few easy steps to get it executing within a project.

### Set up `npm` scripts

It is best if `eslint` is configured as a script in `package.json` and hooked in as `pre` scripts where necessary.

```javascript
"scripts": {
  "lint": "eslint .",
  "pretest": "npm run lint"
}
```

### Configuration in `package.json`

Add this configuration section to the `package.json` file of the target project.  The `ignorePatterns` can be set to any directory
specific to the project that needs linting.  The `ignorePatterns` is only important for directories that may contain `.js`
files since `eslint` will only lint javascript files by default.

```javascript
"eslintConfig": {
  "extends": [
    "logdna"
  ],
  "root": true,
  "ignorePatterns": [
    "node_modules/",
    "test/",
    "coverage/"
  ]
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://codedependant.net/"><img src="https://avatars.githubusercontent.com/u/148561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Satterwhite</b></sub></a><br /><a href="https://github.com/logdna/eslint-config-logdna/commits?author=esatterwhite" title="Documentation">📖</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=esatterwhite" title="Code">💻</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=esatterwhite" title="Tests">⚠️</a> <a href="#maintenance-esatterwhite" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/darinspivey"><img src="https://avatars.githubusercontent.com/u/1874788?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Darin Spivey</b></sub></a><br /><a href="https://github.com/logdna/eslint-config-logdna/commits?author=darinspivey" title="Documentation">📖</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=darinspivey" title="Code">💻</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=darinspivey" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/mdeltito"><img src="https://avatars.githubusercontent.com/u/69520?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mike Del Tito</b></sub></a><br /><a href="https://github.com/logdna/eslint-config-logdna/commits?author=mdeltito" title="Documentation">📖</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=mdeltito" title="Code">💻</a> <a href="https://github.com/logdna/eslint-config-logdna/commits?author=mdeltito" title="Tests">⚠️</a> <a href="#maintenance-mdeltito" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!