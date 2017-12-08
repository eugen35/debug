//import Promise from "bluebird";
//import {sum, sumAsync} from "../../src/helpers";
import {sum} from "../../src/helpers";


test('sum',() => {
  debugger;
  const s = sum(3,4);
  console.log(s);
  expect(s).toBe(7);
});


//const sumPromise = Promise.promisify(sumAsync);

//test('sum',() => expect(sum(3,4)).toBe(7));

/*
test.skip('promised sum',() => sumPromise(3,4).then(res => expect(res).toBe(7)));

test.skip('callbacked sum', done => {
  sumAsync(3,4,(err, res) => {
    expect(res).toBe(7);
    done();
  });
});
*/

