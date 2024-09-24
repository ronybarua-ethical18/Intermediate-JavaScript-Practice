const student = [
    { name: 'Omar Sunny', id: 21},
    { name: 'Manna', id: 31},
    { name: 'Moiuri', id: 41},
    { name: 'DeepJol', id: 71}
]
const newStudents = [];
for(let i = 0; i < student.length; i++){
    let element = student[i];
    const nameElement = element.name;
    newStudents.push(nameElement);
}
console.log(newStudents);

// alternative way to do this 
const names = student.map(sNames => sNames.name);
const sId = student.map(sId => sId.id);
console.log(names, sId);

const bigger = student.filter(studentId => studentId.id > 40);
console.log(bigger);

const biggerFirst = student.find(sIds => sIds.id > 21);
console.log(biggerFirst);