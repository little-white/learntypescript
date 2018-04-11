var name = require(process.cwd() + '/union.js')['name']
var age = require(process.cwd() + '/union.js')['age']
var { expect } = require('chai')

describe('联合类型：union', function() {
  it('name的类型为string', function() {
    expect(typeof name).to.equal('string');
  });
  it('age的类型为number', function() {
    expect(typeof age).to.equal('number');
  });
});
