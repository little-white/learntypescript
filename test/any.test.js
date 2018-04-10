var anyThing = require(process.cwd() + '/any.js')['anyThing']
var someThing = require(process.cwd() + '/any.js')['someThing']
var { expect } = require('chai')

describe('任意值', function() {
  it('anyThing的值为hello', function() {
    expect(anyThing).to.equal('hello');
  });
  it('something的值为world', function() {
    expect(someThing).to.equal('world');
  });
});
