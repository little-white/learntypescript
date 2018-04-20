var getType = require(process.cwd() + '/alias.js')['default']
var { expect } = require('chai')

describe('类型别名', function() {
  it('getType(77)返回的类型为数值', function() {
    expect(getType(77)).to.equal('number');
  });
  it('getType("77")返回的类型为字符串', function() {
    expect(getType("77")).to.equal('string');
  });
});
