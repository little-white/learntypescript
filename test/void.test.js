var unusable = require(process.cwd() + '/void.js')['default']
var { expect } = require('chai')

describe('原始数据类型：void', function() {
  it('unusable的值为undefined', function() {
    expect(unusable).to.equal(undefined);
  });
});
