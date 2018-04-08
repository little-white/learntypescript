var shell = require('shelljs')
// require('ts-node')
// require('typescript')

module.exports =  function (args) {
  var testFile = args[0].slice(0, args[0].indexOf('.'))
  return shell.exec('mocha -r ts-node/register '+ __dirname +'/test/'+ testFile +'.test.ts').code
}
