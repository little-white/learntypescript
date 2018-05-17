var Person = require(process.cwd() + '/class.js')['default']
var { expect } = require('chai')

describe('类', function() {
  it('isFile的值为true', function() {
    var person = new Person('qiqi');
    expect(person.hello()).to.equal('hello qiqi');
  });
});
