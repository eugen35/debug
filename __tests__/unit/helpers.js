import {sum, sumAsync, promisifiedSumAsync} from "../../src/helpers";

test('sum',() => {
  debugger;
  const s = sum(3,4);
  console.log(s);
  expect(s).toBe(7);
});

test('callbacked sum', done => {
  debugger;
  sumAsync(3,4,(err, res) => {
    expect(res).toBe(8);
    done();
  });
});

test('promised sum',() => promisifiedSumAsync(3,4).then(res => expect(res).toBe(8)));
