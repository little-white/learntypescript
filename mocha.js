var shell = require('shelljs')
var Mocha = require('mocha'),
  fs = require('fs'),
  path = require('path');
var mocha = new Mocha();

mocha.addFile(
  path.join(__dirname, '/test/boolean.test.js')
);

module.exports = function(args, cb) {
  shell.exec('tsc ' + args[0])
  mocha.run(function(failures) {
    cb(failures)
    process.on('exit', function() {
      process.exit(failures); // exit with non-zero status if there were failures
    });
  });
}
