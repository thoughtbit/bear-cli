
import path from 'path'
import downloadGitRepo from 'download-git-repo'
import execa from 'execa'
import log from 'loglevel'

import { getPkg } from './../utils/pkg'

function npmInstall(projectDir: string) {
  return getPkg(projectDir).then(() => {
    execa('yarn', ['install'], { cwd: projectDir })
  })
}

function task(args, options) {
  const dirName = args.dir
  const projectDir = path.join(process.cwd(), dirName);
  downloadGitRepo('thoughtbit/bee-vue-demo', projectDir, err => {
    if (err) {
      return log.error(err)
    }
    npmInstall(projectDir)
  })
}

function register(program) {
  program
    .command('init', 'initialize a new Web App project.')
    .argument('<dir>', 'Directory name')
    .action(task)
}

export default { register }
