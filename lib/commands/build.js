'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function task(args, options) {
  console.log('执行build命令');
}

function register(program) {
  program.command('build', 'Compile...').action(task);
}

exports.default = { register: register };