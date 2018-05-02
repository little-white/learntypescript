var something = require(process.cwd() + '/tuple.js')['default']
var { expect } = require('chai')

describe('元组', function() {
  it('元组something的第一个值为hello world', function() {
    expect(something[0]).to.equal('hello world');
  });
  it('元组something的第二个值为123', function() {
    expect(something[1]).to.equal(123);
  });
  it('元组something的第三个值为test', function() {
    expect(something[2]).to.equal('test');
  });
});
