var person = require(process.cwd() + '/interface.js')['default']
var { expect } = require('chai')

describe('对象的类型——接口', function() {
  it('person的属性name的值为supershy', function() {
    expect(person.name).to.equal('supershy');
  });
  it('person的属性age的值为10', function() {
    expect(person.age).to.equal(32);
  });
  it("person的只读属性gender的值为male", function() {
    expect(person.gender).to.equal('male');
  });
  it("person的任意属性location的值为xi'an", function() {
    expect(person.location).to.equal("xi'an");
  });
});
