var name = require(process.cwd() + '/inference.js')['default']
var { expect } = require('chai')

describe('类型推论', function() {
  it('name的值为supershy', function() {
    expect(name).to.equal('supershy');
  });
  it('name的类型为string', function() {
    expect(typeof name).to.equal("string");
  });
});
