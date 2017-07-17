'use strict';

var _caporal = require('caporal');

var _caporal2 = _interopRequireDefault(_caporal);

var _updateNotifier = require('update-notifier');

var _updateNotifier2 = _interopRequireDefault(_updateNotifier);

var _setLogLevel = require('./utils/setLogLevel');

var _setLogLevel2 = _interopRequireDefault(_setLogLevel);

var _init = require('./commands/init');

var _init2 = _interopRequireDefault(_init);

var _build = require('./commands/build');

var _build2 = _interopRequireDefault(_build);

var _version = require('./commands/version');

var _version2 = _interopRequireDefault(_version);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  run: function run() {
    (0, _setLogLevel2.default)();

    process.stdout.on('error', function (e) {
      if (e.code === 'EPIPE') process.exit(0);
    });

    _caporal2.default.STRING = function (value) {
      return typeof value === 'string' ? value : null;
    };
    (0, _updateNotifier2.default)({ pkg: _package2.default }).notify();
    _caporal2.default.version(_package2.default.version).description('A command line scaffolding tool and helper for Boldr.');

    _version2.default.register(_caporal2.default);
    _build2.default.register(_caporal2.default);
    _init2.default.register(_caporal2.default);

    _caporal2.default.parse(process.argv);
  }
};