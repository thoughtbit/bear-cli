import { join } from 'path'
import loadJsonFile from 'load-json-file';

function getPkg(cwd){
  return loadJsonFile(join(cwd, 'package.json')).catch(() => ({})); // no file? default to new Object
}

export default getPkg
