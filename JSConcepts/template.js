const firstName = 'Rony';
const lastName = 'Jackson';
const fullName = firstName + ' ' + lastName + ' is a good boy'; //normal style
const fullNameNew = `${firstName} ${lastName} is a good boy`; //es6 template
console.log(fullNameNew);

//old style
const multiLine = 'I love you \n' 
+ 'I miss you \n'
+ 'I need you';
//console.log(multiLine);

//ES6 style
const multiLineNew = `i love you
I miss you
I dont need you`;
console.log(multiLineNew);
