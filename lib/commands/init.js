'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var _spinner = require('./../utils/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

var _getPkgConfig = require('./../utils/getPkgConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function npmInstall(projectDir) {
  return (0, _getPkgConfig.getPkgConfig)(projectDir).then(function () {
    (0, _execa2.default)('yarn', ['install'], { cwd: projectDir });
  });
}

function download() {
  _spinner2.default.text = 'Downloading template...';
  _spinner2.default.start();
}

function task(args, options) {
  var dirName = args.dir;
  var projectDir = _path2.default.join(process.cwd(), dirName);
  _spinner2.default.text = 'Downloading template...';
  _spinner2.default.start();
  (0, _downloadGitRepo2.default)('thoughtbit/bee-vue-demo', projectDir, function (err) {
    _spinner2.default.stop();
    if (err) {
      return _loglevel2.default.error(err);
    }
    npmInstall(projectDir);
  });
}

function register(program) {
  program.command('init', 'initialize a new Web App project.').argument('<dir>', 'Directory name').action(task);
}

exports.default = { register: register };