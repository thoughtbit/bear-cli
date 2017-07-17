'use strict';

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeVersion = process.versions.node;
var versions = nodeVersion.split('.');
var major = versions[0];
var minor = versions[1];
var platform = _os2.default.platform();
var minNodeVersion = 65;

if (major * 10 + minor * 1 < minNodeVersion) {
  console.log(_chalk2.default.red('Node version (' + major + '.' + minor + ') is not compatibile, ' + _chalk2.default.cyan('must >= 6.5') + '.'));
  console.log(_chalk2.default.red('\u4F60\u7684 Node \u7248\u672C\u662F ' + _chalk2.default.yellow(major + '.' + minor) + '\uFF0C\u8BF7\u5347\u7EA7\u5230' + _chalk2.default.cyan(' 6.5 或以上') + '.'));
  console.log();
  if (platform === 'darwin') {
    console.log('\u63A8\u8350\u7528 ' + _chalk2.default.cyan('https://github.com/creationix/nvm') + ' \u7BA1\u7406\u548C\u5347\u7EA7\u4F60\u7684 node \u7248\u672C\u3002');
  } else if (platform === 'win32') {
    console.log('\u63A8\u8350\u5230 ' + _chalk2.default.cyan('https://nodejs.org/') + ' \u4E0B\u8F7D\u6700\u65B0\u7684 node \u7248\u672C\u3002');
  }
  process.exit(1);
}