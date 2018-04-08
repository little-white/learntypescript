var fs = require('fs')
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

exports.problem = marked(fs.readFileSync(__dirname + '/problems/primitive-data-type/problem.md', 'utf-8'));

exports.verify = function(args, cb) {
  console.log(args)
  var runTest = require(__dirname + '/mocha.js')
  if (runTest(args) === 0) {
    cb(true)
  } else {
    cb(false)
  }
};
