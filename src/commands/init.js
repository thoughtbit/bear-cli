
import path from 'path'
import downloadGitRepo from 'download-git-repo'
import execa from 'execa'
import log from 'loglevel'
import spinner from './../utils/spinner'

import { getPkgConfig } from './../utils/getPkgConfig'

function npmInstall (projectDir) {
  return getPkgConfig(projectDir).then(() => {
    execa('yarn', ['install'], { cwd: projectDir })
  })
}

function download () {
  spinner.text = 'Downloading template...'
  spinner.start()
}

function task (args, options) {
  const dirName = args.dir
  const projectDir = path.join(process.cwd(), dirName)
  spinner.text = 'Downloading template...'
  spinner.start()
  downloadGitRepo('thoughtbit/bee-vue-demo', projectDir, err => {
    spinner.stop()
    if (err) {
      return log.error(err)
    }
    npmInstall(projectDir)
  })
}

function register (program) {
  program
    .command('init', 'initialize a new Web App project.')
    .argument('<dir>', 'Directory name')
    .action(task)
}

export default { register }
