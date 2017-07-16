import shell from 'shelljs'

const doesYarnExist = () => shell.exec('yarn --version').code === 0
const scripts = () => (doesYarnExist() ? 'yarn' : 'npm')

export default scripts
