var shell = require('shelljs')
var Mocha = require('mocha'),
  fs = require('fs'),
  path = require('path');
var mocha = new Mocha();

module.exports = function(args, cb) {
  mocha.addFile(
    path.join(__dirname, '/test/'+ args[0].split('.')[0] +'.test.js')
  );
  shell.exec('tsc --noImplicitUseStrict ' + args[0])
  mocha.run(function(failures) {
    cb(failures)
    process.on('exit', function() {
      process.exit(failures); // exit with non-zero status if there were failures
    });
  });
}
