var fs = require('fs');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');


marked.setOptions({
  renderer: new TerminalRenderer()
});

exports.problem = function(path) {
  return marked(fs.readFileSync(path, 'utf-8') + fs.readFileSync(__dirname + '/common.md', 'utf-8'))
};
exports.solution = function(path) {
  return marked(fs.readFileSync(path, 'utf-8'))
};

exports.verify = function(args, cb) {
  var runTest = require('./mocha.js')
  runTest(args, function(failures) {
    if (failures === 0) {
      cb(true)
    } else {
      cb(false)
    }
  })
};
