const person = {name: 'Rony', age: 23, address: 'switzerland',gfName: 'Tumpa', friendsNames:['Jeebon', 'Rana']};

const{gfName, friendsNames, address} = person; //destructuring the structured object

/* const gfName = person.gfName;
const friendsName = person.friendsNames; */

console.log(gfName, friendsNames, address);

const biraniBazar = ['alo', 'gazor', 'tomato', 'fulcopy', 'shim'];
const[first, second, ...restItems] = biraniBazar; //destructuring array

const complexObject = {
    name: 'Rony Jackson',
    profession: 'Web Developer',
    biotata:{
        sex: 'male',
        age: 34,
        hobby: 'travelling'
    }
};

const {hobby} =  complexObject.biotata;
console.log(hobby); 