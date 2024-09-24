/* Slice is use to take some part of an array and return an array with those sliced elements. original array remains original slice takes part from starting to ending-1 position*/ 
const num = [1, 2, 3, 4, 5, 6, 7, 8];
const takePart = num.slice(3, 6); // 3 and 6 are starting and ending position
console.log(takePart);

/* splice is use to remove some elements of an array those elements removes from original array also splice removes elements from starting to ending positions we can add items also using splice */

const nums = [9, 10, 11, 12, 13, 14, 15];
// const removePart = nums.splice(2, 4); 
const removePart = nums.splice(2, 4, 16, 17);
console.log(removePart);
console.log(nums);

// join method is use to join array values 
const joinNums = nums.join(' num: ')
console.log(joinNums);