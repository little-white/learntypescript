var common = require('../common')
var path = require('path');
var open = require("open");

exports.problem = function () {
  open("https://github.com/little-white/learntypescript/blob/master/built-in/problem.md");
  return common.problem(path.resolve(__dirname, 'problem.md'))
}
exports.solution = function () {
  open("https://github.com/little-white/learntypescript/blob/master/built-in/solution.md");
  return common.problem(path.resolve(__dirname, 'solution.md'))
}
exports.verify = common.verify
