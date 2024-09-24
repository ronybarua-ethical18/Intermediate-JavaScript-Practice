//function name(doubleIt) + parameter(num) + return value(num * 2).
const doubleIt = num => num  * 2;
console.log(doubleIt(2));

const additiion =  (x, y) => x +y;
console.log(additiion(2, 4));

const display = () => 'I am empty';
console.log(display());

const doMath = (x, y) => {

    const add = x + y;
    const mul = x * y;
    const division = mul / add;
    return division;
}
console.log(doMath(4, 5));