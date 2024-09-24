const numArray1 = [22, 23, 24, 25];
const numArray2 = [32, 33, 34, 35];
const numArray3 = [42, 43, 44, 45];
const concatArray = numArray1.concat(numArray2).concat([100]).concat(numArray3);
console.log(concatArray);

// using spread operator 
const spreadArray = [...numArray1, ...numArray2, 100, ...numArray3];
console.log(spreadArray);

// another usages of spread operator 
const business = 650;
const minister = 550;
const sochib = 350;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const numberList = [230, 456,235, 980];
const maxValue = Math.max(...numberList);
console.log(maxValue);