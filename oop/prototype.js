function Person (name, km) {
    this.name = name;
    this.km = km;
}
Person.prototype.run = function () {
    console.log ('I`m running.')
};
Person.prototype.greeting = function (){
    console.log('Hello!')
};
let Vasyl = new Person('Vasyl', 29, 'male', 15);
let Oleksandr = new Person('Oleksandr', 34, 'male',6);
console.log(Vasyl.run());
console.log(Oleksandr.greeting());