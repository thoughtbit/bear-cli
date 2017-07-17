import program from 'caporal'
import updateNotifier from 'update-notifier'
import setLogLevel from './utils/setLogLevel'

import init from './commands/init'
import build from './commands/build'
import version from './commands/version'
import pkg from '../package.json'

module.exports = {
  run () {
    setLogLevel()

    process.stdout.on('error', (e) => {
      if (e.code === 'EPIPE') process.exit(0)
    })

    program.STRING = value => (typeof value === 'string' ? value : null)
    updateNotifier({ pkg }).notify()
    program.version(pkg.version).description('A command line scaffolding tool and helper for Boldr.')

    version.register(program)
    build.register(program)
    init.register(program)

    program.parse(process.argv)
  }
}
