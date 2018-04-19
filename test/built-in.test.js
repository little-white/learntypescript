var date = require(process.cwd() + '/built-in.js')['default']
let isDate = function(date) {
  return Object.prototype.toString.apply(date) === '[object Date]'
}
var {
  expect
} = require('chai')

describe('内置对象：Date', function() {
  it('date的类型为为Date', function() {
    expect(isDate(date)).to.equal(true);
  });
});
