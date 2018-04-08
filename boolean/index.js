var fs = require('fs');
var path = require('path');
var marked = require('marked');
var TerminalRenderer = require('marked-terminal');
// var shell = require('shelljs')

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

exports.problem = marked(fs.readFileSync(path.resolve(__dirname, '../problems/primitive-data-type/problem.md'), 'utf-8'));

exports.verify = function(args, cb) {
  console.log(args)
  var runTest = require('../mocha.js')
  runTest(args, function(failures) {
    if (failures === 0) {
      cb(true)
    } else {
      cb(false)
    }
  })
};
