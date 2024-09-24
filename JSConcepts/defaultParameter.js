// three ways to define default parameter 

/* 1.
function add(num1, num2){
    if(num2 == undefined){
        num2 = 2;
    }
 return num1 + num2;
}
console.log(add(15)); */

/* 2.
function add(num1, num2){
   num2 = num2 || 3;
 return num1 + num2;
}
console.log(add(15)); */

// 3. es6 feature
function add(num1, num2 = 3){
 return num1 + num2;
}
console.log(add(15));