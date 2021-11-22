// Inheritance

let Person = {
    constructor: function(name, age, gender, km){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.km = km;
        return this;
    },
    run: function (){
        console.log(this.name + ' is running about ' + this.km + ' km' + '.');
    },
    greet: function(){
        console.log('Hi, my name is ' + this.name + '.');
    }
};
let newPerson = Object.create(Person).constructor('Vasyl', 29, 'male', 15);
let newPerson2 = Object.create(Person).constructor('Oleksandr', 34, 'male',6);
let newPerson3 = Object.create(Person).constructor('Veronika', 35, 'female',10);
let newPerson4 = Object.create(Person).constructor('Vlada', 56, 'female', 5);
console.log(newPerson4.km); // 5
console.log(newPerson3.name); // Veronika
console.log(newPerson2.greet()); // Hi, my name is Oleksandr.
console.log(newPerson.age); //29

console.log(Person.isPrototypeOf(newPerson)); //true  //to check about prototype of object

//Create new class Doctor which have the objects, that inherite actions from class Person, but also have their owns characteristics

let Doctor = Object.create(Person);
Doctor.constructor = function (name, age, gender, km, skills){ // to add new arguments in constructor
    Person.constructor.apply(this, arguments);
    this.skills = skills;
    return this;
};

Doctor.isThinking = function(){
console.log('I`m thinking now...');
};

let doctor = Object.create(Doctor).constructor('Dmytro', 43, 'male', 40, ['forensic science', 'surgery', 'traumatology']);
console.log(doctor.run()); //Dmytro is running about 40 km.
console.log(doctor.skills); //['forensic science', 'surgery', 'traumatology']
console.log(doctor.isThinking()); // 'I`m thinking now...'
console.log(doctor.name); //Dmytro


function Motorcycle (model){
    this.model = model;

    this.getmodel = () => this.model;
    this.drive = () => console.log('Driving....');
}

const Harley_Davidson = new Motorcycle ('Harley-Davidson');
const Indian = new Motorcycle ('Indian');

console.log(Harley_Davidson.drive()); // Driving....
console.log(Indian.drive()); //Driving....

//Object prototype, which consist constructor (constructor is needed for not to create new fields in objects every time)
//This code it`s more short 

//How to create new object from prototype
let ObjectProto = {
    name: 'Yuliia',
    age: 27,
    gender: 'woman',
    greet: function(){
        console.log('Hi, my name is ' + this.name + '.');
    }
};
let human = Object.create(ObjectProto);
console.log(human.greet()); // Hi, my name is Yuliia.
