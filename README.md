Language feature detection utilities for ECMAScript 6 and beyond.
===================================

[![NPM](https://nodei.co/npm/@alt-javascript/lang.svg?downloads=true&downloadRank=true)](https://nodei.co/npm/@alt-javascript/lang/)
<br/>
![Language Badge](https://img.shields.io/github/languages/top/alt-javascript/lang)
![Package Badge](https://img.shields.io/npm/v/@alt-javascript/lang) <br/>
[release notes](https://github.com/alt-javascript/lang/blob/main/History.md)

<a name="intro">Introduction</a>
--------------------------------
Language feature detection utilities for ECMAScript 6 and beyond, currently bundling the [es-feature-detection](https://www.npmjs.com/package/es-feature-detection) and
[feature-detect-es6](https://www.npmjs.com/package/feature-detect-es6) npm packages.

<a name="usage">Usage</a>
-------------------------

The module can be used directly in the browser, as an IIFE (Immediately Invoked Function Expression),
using the global variable `lang` as follows:

```html
   <script src="https://cdn.jsdelivr.net/npm/@alt-javascript/lang/dist/alt-javascript-lang-iife.js"></script>

   <script>
       if (!lang.allOk(lang.es2020)){
           console.error('We\'re sorry but the site requires JavaScript 11 (ECMAScript 2020). Please upgrade your browser to continue.')
           document.getElementById("require_es2020").style.display = "block"
       }
   </script>
```

<a name="license">License</a>
-----------------------------

May be freely distributed under the [MIT license](https://raw.githubusercontent.com/alt-javascript/lang/main/LICENSE).

Copyright (c) 2021-2022 Craig Parravicini    
