var common = require('../common')
var path = require('path');

exports.problem = common.problem(path.resolve(__dirname, 'problem.md'))
exports.solution = common.problem(path.resolve(__dirname, 'solution.md'))
exports.verify = common.verify
