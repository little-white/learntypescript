var common = require('../common')
var path = require('path');
var open = require("open");

exports.problem = function () {
  open("problem.md");
  return common.problem(path.resolve(__dirname, 'problem.md'))
}
exports.solution = function () {
  open("solution.md");
  return common.problem(path.resolve(__dirname, 'solution.md'))
}
exports.verify = common.verify
