// class is a template for creating objects 
class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Jahanpur High School';
    }
}
const student1 = new Student(2, 'tuhin');
const student2 = new Student(1, 'rony');
console.log(student1, student2);