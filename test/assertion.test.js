var getLength = require(process.cwd() + '/assertion.js')['default']
var { expect } = require('chai')

describe('原始数据类型：布尔值', function() {
  it('getLength("10")的值为2', function() {
    expect(getLength("10")).to.equal(2);
  });
  it('getLength(77)的值为2', function() {
    expect(getLength(10)).to.equal(2);
  });
});
