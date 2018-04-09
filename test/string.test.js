var name = require(process.cwd() + '/string.js')['default']
var { expect } = require('chai')

describe('原始数据类型：字符串', function() {
  it('name的值为supershy', function() {
    expect(name).to.equal('supershy');
  });
});
