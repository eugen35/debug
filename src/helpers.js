/** @module helpers */

import Promise from "bluebird";

export function sum (a,b) {
  debugger;
  const sum = a + b;
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
    debugger;
    const sum = a + b + 1; // Специально изменил результат !!!!!!!!!!!!
    cb(undefined, sum);
  });
}

/**
 * @returns {Promise} promise on sum result
 * @param a
 * @param b
 */
export const promisifiedSumAsync = Promise.promisify(sumAsync);