'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _loadJsonFile = require('load-json-file');

var _loadJsonFile2 = _interopRequireDefault(_loadJsonFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPkgConfig(cwd) {
  // no file? default to new Object
  return (0, _loadJsonFile2.default)((0, _path.join)(cwd, 'package.json')).catch(function () {
    return {};
  });
}

exports.default = getPkgConfig;