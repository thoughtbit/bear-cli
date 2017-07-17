import { join } from 'path'
import loadJsonFile from 'load-json-file'

function getPkgConfig (cwd) {
  // no file? default to new Object
  return loadJsonFile(join(cwd, 'package.json')).catch(() => ({}))
}

export default getPkgConfig
