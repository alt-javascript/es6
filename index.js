const detect = require('feature-detect-es6');
const es2015 = require('es-feature-detection/es2015');
const es2016 = require('es-feature-detection/es2016');
const es2017 = require('es-feature-detection/es2017');
const es2018 = require('es-feature-detection/es2018');
const es2019 = require('es-feature-detection/es2019');
const es2020 = require('es-feature-detection/es2020');
const allOk = require('es-feature-detection/utils/allOk');
const testExpression = require('es-feature-detection/utils/testExpression');
const builtins = require('es-feature-detection/builtins');
const syntax = require('es-feature-detection/syntax');
const dom = require('es-feature-detection/dom');
const localization = require('es-feature-detection/localization');

window.es = {
  detect,
  es2015,
  es2016,
  es2017,
  es2018,
  es2019,
  es2020,
  builtins,
  syntax,
  dom,
  localization,
  allOk: allOk.default,
  testExpression: testExpression.default,
};
