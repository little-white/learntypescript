var isFile = require('../boolean.js')['default']
var { expect } = require('chai')

describe('原始数据类型：布尔值', function() {
  it('isFile的值为true', function() {
    expect(isFile).to.equal(true);
  });
});
