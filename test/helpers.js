import {expect} from 'chai';
import {sum, sumAsync, promisifiedSumAsync} from "../src/helpers";

describe("something", function () { // function() вместо ()=> нужно писать чтобы timeout не ругался. Это неведомый глюк
  this.timeout(15000);

  it('sum',() => {
    debugger;
    const s = sum(3,4);
    expect(s).to.equal(7);
  });

  it('sumAsync', done => {
    sumAsync(3,4,(err, res) => {
      expect(res).to.equal(8);
      done();
    });
  });

  it('promisifiedSumAsync', () => {
    return promisifiedSumAsync(3,4).then(res => {
      return expect(res).to.equal(8);
    });
  });

});




