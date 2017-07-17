'use strict';

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setLogLevel() {
  var level = _loglevel2.default.levels.INFO;
  if (process.argv.indexOf('-v') >= 0) level = _loglevel2.default.levels.DEBUG;
  if (process.argv.indexOf('-vv') >= 0) level = _loglevel2.default.levels.TRACE;

  _loglevel2.default.setLevel(level);

  _loglevel2.default.fail = function (e) {
    _loglevel2.default.error(_chalk2.default.red('ERROR: ' + (e.msg || e)));
  };
}