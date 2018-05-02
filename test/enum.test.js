var Enviroment = require(process.cwd() + '/enum.js')['default']
var { expect } = require('chai')

describe('枚举', function() {
  it('Enviroment.Dev的值为0', function() {
    expect(Enviroment.Dev).to.equal(0);
  });
  it('Enviroment.Stage的值为1', function() {
    expect(Enviroment.Stage).to.equal(1);
  });
  it('Enviroment.Prod的值为2', function() {
    expect(Enviroment.Prod).to.equal(2);
  });
});
