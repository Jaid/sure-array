# sure-array


<a href="https://raw.githubusercontent.com/jaid/sure-array/master/license.txt"><img src="https://img.shields.io/github/license/jaid/sure-array?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor sure-array"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/sure-array/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fsure-array%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/sure-array/commits"><img src="https://img.shields.io/github/commits-since/jaid/sure-array/v1.0.0?style=flat-square&logo=github" alt="Commits since v1.0.0"/></a> <a href="https://github.com/jaid/sure-array/commits"><img src="https://img.shields.io/github/last-commit/jaid/sure-array?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/sure-array/issues"><img src="https://img.shields.io/github/issues/jaid/sure-array?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/sure-array"><img src="https://img.shields.io/npm/v/sure-array?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/sure-array/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/sure-array?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/sure-array"><img src="https://img.shields.io/npm/dm/sure-array?style=flat-square&logo=npm" alt="Downloads"/></a>

**Converts the input into an array or returns it if it is already an array.**





## Installation

<a href="https://npmjs.com/package/sure-array"><img src="https://img.shields.io/badge/npm-sure--array-C23039?style=flat-square&logo=npm" alt="sure-array on npm"/></a>

```bash
npm install --save sure-array@^1.0.0
```

<a href="https://yarnpkg.com/package/sure-array"><img src="https://img.shields.io/badge/Yarn-sure--array-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="sure-array on Yarn"/></a>

```bash
yarn add sure-array@^1.0.0
```

<a href="https://github.com/jaid/sure-array/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/sure--array-24282e?style=flat-square&logo=github" alt="@jaid/sure-array on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/sure-array@^1.0.0
```



## Example


```javascript
import sureArray from "sure-array"

const result = sureArray(123)
const result2 = sureArray([123])
const result3 = sureArray()
const result4 = sureArray(undefined)
const result5 = sureArray(null)
const result6 = sureArray([[123]])
```

Variable `result` will be:

```javascript
[123]
```
Variable `result2` will be:

```javascript
[123]
```
Variable `result3` will be:

```javascript
[]
```
Variable `result4` will be:

```javascript
[]
```
Variable `result5` will be:

```javascript
[null]
```
Variable `result6` will be:

```javascript
[[123]]
```

















## Development



Setting up:
```bash
git clone git@github.com:jaid/sure-array.git
cd sure-array
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/sure-array/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
