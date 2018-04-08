#!/usr/bin/env node

var adventure = require('adventure');
var test = adventure('test');
test.add('原始数据类型-布尔', function () {
  return require('../boolean.js')
})
test.execute(process.argv.slice(2));
