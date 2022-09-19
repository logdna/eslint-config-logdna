## Changelog

## [6.1.2](https://github.com/logdna/eslint-config-logdna/compare/v6.1.1...v6.1.2) (2022-09-19)


### Chores

* Update eslint-plugin-logdna to 2.0.1 [c93492b](https://github.com/logdna/eslint-config-logdna/commit/c93492ba4dc4e16b140e98af1d0c9f2d2a5cf181) - Eric Satterwhite, closes: [#23](https://github.com/logdna/eslint-config-logdna/issues/23)

## [6.1.1](https://github.com/logdna/eslint-config-logdna/compare/v6.1.0...v6.1.1) (2022-09-19)


### Chores

* **dep**: eslint-plugin-sensible@3.0.1 [647f85b](https://github.com/logdna/eslint-config-logdna/commit/647f85b350c0327835c07448ec04b6b81611f44c) - Eric Satterwhite

# [6.1.0](https://github.com/logdna/eslint-config-logdna/compare/v6.0.0...v6.1.0) (2022-04-30)


### Features

* **rules**: consistent func param newlines [8f57501](https://github.com/logdna/eslint-config-logdna/commit/8f5750153f57a7d4fa3aeb9bfa183ad48595cafe) - Eric Satterwhite

# [6.0.0](https://github.com/logdna/eslint-config-logdna/compare/v5.1.0...v6.0.0) (2021-11-03)


### Chores

* **deps**: eslint-plugin-sensible@3.0.0 [d74acfe](https://github.com/logdna/eslint-config-logdna/commit/d74acfe1a4e6cc18de27ffd375ce440c1c2fd06c) - Eric Satterwhite


### **BREAKING CHANGES**

* **deps:** Minimum eslint version 8.x
* **deps:** Mimimum node.js version 12.x

# [5.1.0](https://github.com/logdna/eslint-config-logdna/compare/v5.0.0...v5.1.0) (2021-05-31)


### Features

* **rules**: add no-multiple-empty-lines rule [29a8c68](https://github.com/logdna/eslint-config-logdna/commit/29a8c68c5d05181256c3422326b8001086de672d) - Mike Del Tito

# [5.0.0](https://github.com/logdna/eslint-config-logdna/compare/v4.2.1...v5.0.0) (2021-04-16)


### Features

* **rules**: switch to tap-no-deprecated-aliases rule [9ee6480](https://github.com/logdna/eslint-config-logdna/commit/9ee64807d7056ae42988c5597ca19695cbc12960) - Mike Del Tito


### **BREAKING CHANGES**

* **rules:** Un-aliased tap assertion methods will now be enforced

tap@15.0.0 deprecated the use of aliases for assertion methods, which
invalidates the concept of a "preferred" alias. This switches over to
a new rule for requiring the use of un-aliased assertion methods.

This rule is auto-fixable, and the changes it enforces are backwards
compatible with older versions of tap.

Ref: LOG-9396

## [4.2.1](https://github.com/logdna/eslint-config-logdna/compare/v4.2.0...v4.2.1) (2021-04-16)


### Chores

* **deps**: eslint-plugin-sensible@2.3.1 [93fd2a4](https://github.com/logdna/eslint-config-logdna/commit/93fd2a4b7f7c153e78689e8adda794d91805b340) - Eric Satterwhite


### Continuous Integration

* use semantic-release [1518b41](https://github.com/logdna/eslint-config-logdna/commit/1518b41fbad59c4047cedf3271693c0687049f2b) - Mike Del Tito

# 2021-03-23, Version 4.2.0 (Stable)

* [[a0339e7211](https://github.com/logdna/eslint-config-logdna/commit/a0339e7211)] - **(SEMVER-MINOR)** feat(package): enable ecmascript 2020 (Eric Satterwhite)
* [[7c980a6458](https://github.com/logdna/eslint-config-logdna/commit/7c980a6458)] - docs: include code of conduct and contributing guides (Eric Satterwhite)
* [[a9dddd782d](https://github.com/logdna/eslint-config-logdna/commit/a9dddd782d)] - docs: add @mdeltito as a contributor (Eric Satterwhite)
* [[e8c57e06b7](https://github.com/logdna/eslint-config-logdna/commit/e8c57e06b7)] - docs: add @darinspivey as a contributor (Eric Satterwhite)
* [[2493b1256f](https://github.com/logdna/eslint-config-logdna/commit/2493b1256f)] - docs: add @esatterwhite as a contributor (Eric Satterwhite)

# 2021-03-20, Version 4.1.0 (Stable)

* [[1d66479244](https://github.com/logdna/eslint-config-logdna/commit/1d66479244)] - **(SEMVER-MINOR)** feat(rules): enable rule to dis-allow debugger statements. (Eric Satterwhite)
* [[e7bca6ff2b](https://github.com/logdna/eslint-config-logdna/commit/e7bca6ff2b)] - chore(deps): eslint@7.19.0 (Eric Satterwhite)

# 2020-12-31, Version 4.0.2 (Stable)

* [[9100518359](https://github.com/logdna/eslint-config-logdna/commit/9100518359)] - chore(deps): eslint-plugin-sensible@2.2.1 (Eric Satterwhite)

# 2020-12-21, Version 4.0.1 (Stable)

* [[d1a40f3572](https://github.com/logdna/eslint-config-logdna/commit/d1a40f3572)] - chore(test): Read fixtures with eslint rather than fs (Darin Spivey)

# 2020-12-04, Version 4.0.0 (Stable)

* [[deb2012c76](https://github.com/logdna/eslint-config-logdna/commit/deb2012c76)] - **(SEMVER-MAJOR)** feat(rules)!: func-style disallows function expressions (Darin Spivey) [LOG-8207](https://logdna.atlassian.net/browse/LOG-8207)
* [[1f665218c7](https://github.com/logdna/eslint-config-logdna/commit/1f665218c7)] - feat(test): Fix JUnit file so CI can report errors (Darin Spivey)
* [[6f8bcc12ea](https://github.com/logdna/eslint-config-logdna/commit/6f8bcc12ea)] - **(SEMVER-MINOR)** feat(rules): arrow-body-style enforces braces around arrow functions (Darin Spivey) [LOG-8207](https://logdna.atlassian.net/browse/LOG-8207)
* [[f14276f30e](https://github.com/logdna/eslint-config-logdna/commit/f14276f30e)] - **(SEMVER-MINOR)** feat(rules): arrow-parens are always required (Darin Spivey) [LOG-8207](https://logdna.atlassian.net/browse/LOG-8207)
* [[f912dc11d0](https://github.com/logdna/eslint-config-logdna/commit/f912dc11d0)] - chore: Put test fixtures in one directory (Darin Spivey) [LOG-8207](https://logdna.atlassian.net/browse/LOG-8207)

# 2020-11-18, Version 3.1.0 (Stable)

* [[411e0cac72](https://github.com/logdna/eslint-config-logdna/commit/411e0cac72)] - **(SEMVER-MINOR)** feat: allow unused rest siblings (Michael J. Del Tito) [LOG-7154](https://logdna.atlassian.net/browse/LOG-7154)

# 2020-11-18, Version 3.0.0 (Stable)

* [[b6f3269db5](https://github.com/logdna/eslint-config-logdna/commit/b6f3269db5)] - **(SEMVER-MAJOR)** feat!: add eslint-plugin-logdna and associated config (Mike Del Tito)

# 2020-10-27, Version 2.0.1 (Stable)

* [[d399bb2dfc](https://github.com/logdna/eslint-config-logdna/commit/d399bb2dfc)] - fix: add PR source validation to Jenkinsfile (Mike Del Tito) [LOG-7712](https://logdna.atlassian.net/browse/LOG-7712)

# 2020-09-30, Version 2.0.0 (Stable)

* [[8b63b65158](https://github.com/logdna/eslint-config-logdna/commit/8b63b65158)] - fix(doc): add language annotation to code blocks in README (Eric Satterwhite)
* [[5caf5796a6](https://github.com/logdna/eslint-config-logdna/commit/5caf5796a6)] - **(SEMVER-MAJOR)** feat!: drop max-len rule from 160 to 90 (Eric Satterwhite) [LOG-7437](https://logdna.atlassian.net/browse/LOG-7437)

# 2020-09-29, Version 1.0.2 (Stable)

* [[4e5f33dc22](https://github.com/logdna/eslint-config-logdna/commit/4e5f33dc22)] - package: Fine-tune the .npmignore file (Darin Spivey)

# 2020-09-28, Version 1.0.1 (Stable)

* [[2680d5ca9b](https://github.com/logdna/eslint-config-logdna/commit/2680d5ca9b)] - ci: Test Jenkins publishing (Darin Spivey)

# 2020-09-23, Version 1.0.0 (Stable)

* [[fe6c203b19](https://github.com/logdna/eslint-config-logdna/commit/fe6c203b19)] - **(SEMVER-MAJOR)** ci: Add NPM_PUBLISH_TOKEN to the release stage (Darin Spivey)

# 2020-09-22, Version 0.0.1 (Stable)

* [[380cc94fd1](https://github.com/logdna/eslint-config-logdna/commit/380cc94fd1)] - fix: Correct missing `mkdir` in Jenkinsfile (Darin Spivey)
