class Parent{
    constructor(){
        this.fatherName = 'Arnold Schwergenegger';
    }
}
class Child extends Parent{
    constructor(name){
        super();  //call the constructor of parent class where child class inherited from
        this.name = name;
    }
    getFullName(){ //a function without writing function keyword
        return this.name + " " + this.fatherName;
    }
}
const baby1 = new Child('Tuhin');
const baby2 = new Child('Vincenzo');
console.log(baby1, baby2, baby1.getFullName());