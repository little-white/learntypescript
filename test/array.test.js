var numberArr = require(process.cwd() + '/array.js')['numberArr']
var unionArr = require(process.cwd() + '/array.js')['unionArr']
var anyArr = require(process.cwd() + '/array.js')['anyArr']
var { expect } = require('chai')

describe('数组的类型', function() {
  it('numberArr的值为[1, 2, 3]', function() {
    expect(numberArr).to.deep.equal([1, 2, 3]);
  });
  it('unionArr的值为[1, "qiqi", 3]', function() {
    expect(unionArr).to.deep.equal([1, "qiqi", 3]);
  });
  it('anyArr的值为[1, "qiqi", true]', function() {
    expect(anyArr).to.deep.equal([1, "qiqi", true]);
  });
});
