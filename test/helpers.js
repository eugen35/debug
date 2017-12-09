import {sum, sumAsync, promisifiedSumAsync} from "../src/helpers";
const assert = require('assert');

describe("something", function () {
  this.timeout(15000);

  it('sum',() => {
    const s = sum(3,4);
    assert.equal(7, s);
  });

  it('sumAsync', done => {
    sumAsync(3,4,(err, res) => {
      assert.equal(8, res);
      done();
    });
  });

  it('promisifiedSumAsync', () => {
    return promisifiedSumAsync(3,4).then(res => {
      return assert.equal(8, res);
    });
  });

});




