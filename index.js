import {sum, sumAsync} from "./src/helpers";

console.log('Start counting');
const s=sum(2,3);
console.log(s);

const sumAsyncResult=sumAsync(2,3,(err,result) => {
  console.log('sumAsyncResult=');
  console.log(result);
});
