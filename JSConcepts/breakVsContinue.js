/* const num = [1, -2, 3, 4, -5, 6, 7, -8];
for (let i = 0; i < num.length; i++) {
    if (num[i] > 4) {
        break;
    }
    // console.log(num[i]);
    if(num[i] < 0){
        continue; //skip the minus value
    }
    console.log(num[i]);
}
const names = '0';
if(names){
    return console.log('true');
}
else{
    return console.log('false');
} */

function doSomething(x, y = 4){

    console.log(y);
    
    }
    
    doSomething(3,2);