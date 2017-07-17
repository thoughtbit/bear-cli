'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doesYarnExist = function doesYarnExist() {
  return _shelljs2.default.exec('yarn --version').code === 0;
};
var scripts = function scripts() {
  return doesYarnExist() ? 'yarn' : 'npm';
};

exports.default = scripts;