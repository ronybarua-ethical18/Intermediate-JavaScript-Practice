// What is scope? 

/* Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block. */

/* Why is JavaScript hoisting?

Hoisting is JS's default behavior of defining all the declarations at the top of the scope before code execution. One of the benefits of hoisting is that it enables us to call functions before they appear in the code. JavaScript only hoists declarations, not initializations. */

// console.log(display); 
// var display = 'Welcome to Hoisting'; //it runs but returns undefined coz JavaScript only hoists declarations, not initializations.


//let display = 'Welcome to Hoisting'; //it returns error Cannot access 'display' before initialization, coz JavaScript only hoists declarations, not initializations.

// const display = 'Welcome to Hoisting'; //it returns error Cannot access 'display' before initialization, coz JavaScript only hoists declarations, not initializations.

const bonus = 10; //it is global scope / variable and can access to every where or outside of a block
function scopeLearning(num1, num2){
    const sum = num1 + num2 + bonus; //sum is local scope / variable
    if(sum > 23){
        const result = sum + 30; //its a local scope
        console.log(result);
    }
    //console.log(result); // it returns error cause local scope can accessible only and only inside a block
    return sum;
}
//console.log(sum); //it returns error cause sum is a local variable it accesible inside of a block only
console.log(scopeLearning(15, 35));


