var length = require(process.cwd() + '/number.js')['default']
var { expect } = require('chai')

describe('原始数据类型：数值', function() {
  it('length的值为77', function() {
    expect(length).to.equal(77);
  });
});
