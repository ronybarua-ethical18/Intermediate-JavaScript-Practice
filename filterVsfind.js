// filter method is used to filter those elements which are fulfiled a condition 
const num = [3, 4, 5, 6, 7, 8];
const bigger = num.filter(element => element > 6);
console.log(bigger);

const isThere = num.find(element => element > 6);
console.log(isThere);