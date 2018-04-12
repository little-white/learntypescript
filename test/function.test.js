var greeting = require(process.cwd() + '/function.js')['default']
var { expect } = require('chai')

describe('函数的类型', function() {
  it('greeting(undefined, "world")的返回值为hello world', function() {
    expect(greeting(undefined, 'world')).to.equal('hello world');
  });
});
