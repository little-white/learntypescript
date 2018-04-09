var n = require(process.cwd() + '/null.js')['default']
var { expect } = require('chai')

describe('原始数据类型：null', function() {
  it('n的值为null', function() {
    expect(n).to.equal(null);
  });
});
