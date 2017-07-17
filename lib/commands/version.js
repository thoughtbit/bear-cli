'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function task(args, options) {
  var version = require('../../package.json').version;
  if (_loglevel2.default.getLevel() >= _loglevel2.default.levels.INFO) {
    return _loglevel2.default.info(version);
  }
  var logo = 'CLI v' + version;
  _loglevel2.default.debug(logo);
}

function register(program) {
  program.command('version', '当前版本').action(task);
}

exports.default = { register: register };