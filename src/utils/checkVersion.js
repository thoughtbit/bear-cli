import request from 'request'
import semver from 'semver'
import chalk from 'chalk'
import getPackager from './../utils/getPackager'
import packageConfig from './../../package.json'

export default function (done) {
  // Ensure minimum supported node version is used
  if (!semver.satisfies(process.version, packageConfig.engines.node)) {
    return console.log(chalk.red(
      '  You must upgrade node to >=' + packageConfig.engines.node + '.x to use bear-cli'
    ))
  }

  request({
    url: 'https://registry.npmjs.org/bear-cli',
    timeout: 1000
  }, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      const latestVersion = JSON.parse(body)['dist-tags'].latest
      const localVersion = packageConfig.version
      if (semver.lt(localVersion, latestVersion)) {
        console.log(chalk.yellow('  A newer version of bear-cli is available.'))
        console.log()
        console.log('  latest:    ' + chalk.green(latestVersion))
        console.log('  installed: ' + chalk.red(localVersion))
        console.log()
        console.log('You can upgrade your CLI with:')
        if (getPackager() === 'yarn') {
          console.log(chalk.green('  yarn global upgrade bear-cli'))
        } else {
          console.log(chalk.green('  npm update -g bear-cli'))
        }
      }
    }
    done()
  })
}
