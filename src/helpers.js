/** @module helpers */

//import Promise from "bluebird";



export function sum (a,b) {
  const sum = a + b;
  console.log(sum);
  return sum;
}


/**
 * @returns {function} async function with node-style callback
 * @param a
 * @param b
 * @param cb
 */
export function sumAsync (a,b,cb) {
  setImmediate(() => { // Именно за счёт setImmediate(()=>func(args)) получаем асинхронный результат
    const sum = a + b + 1; // Специально изменил результат !!!!!!!!!!!!
    cb(undefined, sum);
  });
}