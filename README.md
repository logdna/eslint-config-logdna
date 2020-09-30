# `eslint-config-logdna`

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
