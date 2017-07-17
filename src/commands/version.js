import log from 'loglevel'

function task (args, options) {
  const version = require('../../package.json').version
  if (log.getLevel() >= log.levels.INFO) {
    return log.info(version)
  }
  const logo = 'CLI v' + version
  log.debug(logo)
}

function register (program) {
  program.command('version', '当前版本').action(task)
}

export default { register }
