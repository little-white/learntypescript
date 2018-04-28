var hi = require(process.cwd() + '/advancealias.js')['default']
var { expect } = require('chai')

describe('字符串字面量类型别名', function() {
  it('getType(77)返回的类型为数值', function() {
    expect(hi('qiqi')).to.equal('hi qiqi');
  });
});
