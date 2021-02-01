// finding out squares 
const num = [3, 4, 5, 6, 7, 8];
const squareNums = [];
for(let i = 0; i < num.length; i++){
    const element = num[i];
    let result = element * element;
    squareNums.push(result);
}
console.log(squareNums);

// alternative of above code 
// map method can take three parameters element, index and array
// and it can iterate through an array and it is use for doing work on array 
//it is an alternative of loop

/* function square(element){
    return element * element;
}
const output = num.map(square);
console.log(output); */

//a function inside map method can take three parameters to iterate through an array element, index and array

// map method can work only with whole array cant work with an individual element like for loop 

const display = num.map(function(element, index, array){
    console.log(element, index, array);
});


/* const output = num.map(element => element * element);
console.log(output); */