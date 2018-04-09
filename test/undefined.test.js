var u = require(process.cwd() + '/undefined.js')['default']
var { expect } = require('chai')

describe('原始数据类型：undefined', function() {
  it('u的值为undefined', function() {
    expect(u).to.equal(undefined);
  });
});
