#!/usr/bin/env node
var menu = require('../menu');
var adventure = require('adventure');
var shop = adventure('学习typescript');

menu.forEach(function (name) {
  shop.add(name, function () {
    return require('../'+ name +'/index')
  })
})
shop.execute(process.argv.slice(2));
