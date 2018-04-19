var name = require(process.cwd() + '/declaration.js')['default']
var { expect } = require('chai')

describe('声明文件', function() {
  it('name的值为qiqi', function() {
    expect(name).to.equal('qiqi');
  });
});
