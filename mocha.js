var shell = require('shelljs')

module.exports =  function (args) {
  var testFile = args[0].slice(0, args[0].indexOf('.'))
  return shell.exec('npm test').code
}
