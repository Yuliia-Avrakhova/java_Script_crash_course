
 const cosmetics = {
    quantity: 10,
    price: "Medium",
    location: {
        country: "USA",
        state: "Texas",
        city: "Houston",
    }
};
function squareAndAddOne (quantity) {
    let result = quantity * quantity;
    result += 1;
    return result;
}
console.log(squareAndAddOne(cosmetics.quantity)); //101

// 1. Arrow function

//longer way
const square1 = (quantity) => {
    return quantity * quantity;
}
console.log(square1(cosmetics.quantity)); //100

//shorter way
const square2 = (quantity) => quantity * quantity;
console.log(square2(cosmetics.quantity)); //100

// 2. Function declaration

console.log(square(cosmetics.quantity));// 100; The difference between function  declaration and exppression is that you can see the result
function square (quantity) {            // when you call function declaration before function initialization.
    return quantity * quantity;
}
console.log(square(cosmetics.quantity)); //100

// 3. Function expression 
// console.log(square5(cosmetics.quantity)); // here we will have 'Cannot access 'square5' before initialization.'
let square5 = function(quantity) {
    return quantity * quantity;
}
console.log(square5(cosmetics.quantity)); //100

// 4. Anonymous function.
function makeDecision (makeMusic) {
    makeMusic();
}
makeDecision (function() {
    console.log("Let's play rock"); //Let's play rock
});

// 5. Immediately invoked function
let result = (function () {
    let userName = "Yuliia";
    return userName;
})();
console.log(result); //Yuliia


function plusFoo (j, p){
    return j + p;
}
const x1 = plusFoo(9,7);
console.log(x1);

function min (f, v){
    return f - v;
}
let s = min(450, 390);
console.log(s);

function multiply (g, w){
    return g * w;
}
let c = multiply(30, 60);
console.log (c);

function devide (l,f){
    return l / f;
}
let q = devide(120,4);
console.log(q);

function sayHelloWorld(){
    return "Hello, World!"
}
let x = sayHelloWorld();
console.log(x);
//////////////////

const woman = {
    firstName: "Yuliia",
    lastName: "Avrakhova",
    age: 28,
    human: true,
    height: 173,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
console.log(woman.human); // true
////
function helloSomeone(obj){
    return "Hello, "+ obj + "!";
}
console.log("Hello, " + woman.fullName() + "!"); //Hello, Yuliia Avrakhova!
console.log(woman.fullName()); //Yuliia Avrakhova


function helloSomeone(obj){
    return "Hello, "+ obj + "!";
}
let hello = helloSomeone(woman.firstName);
console.log(hello); // Hello, Yuliia!

const woman = {
    firstName: "Yuliia",
    lastName: "Avrakhova",
    human: true,
    height: 173
};
function valueBy (key, obj = {}){
    return obj[key];
}
console.log(valueBy("firstName", woman)); //Yuliia

function extendObj(obj, key, value){  //1 adding new field with value to object
    obj[key] = value;
    return obj;
}
console.log(extendObj(woman, "age", "28"));

function exteObj (obj, field, value){ //2 adding new field with value to object
    obj[field] = value;
    return obj;
}
console.log(exteObj(woman, "music", "rock"));

function increaseBiggerArg(a, b){  //should return a larger argument increased by 100  // with (10, 7) output - 110
    let largerNumber = Math.max(a, b);
    return largerNumber + 100;
}
console.log(increaseBiggerArg(10, 7)); //110

function decreaseLowerArg(a, b){
    let lowerNumber = Math.min(a,b);
    return lowerNumber - 100;
}
console.log(decreaseLowerArg(1000, 900)); //800

//// Get this

 function getPrice( currency = '$'){
     console.log(currency + this.price);
     return this;
 }

 function getName(){
     console.log(this.name);
     return this;
 }

 const prod1 = {
     name: "Intel",
     price: 100,
     getPrice,
     getName(){
       console.log(this.name);  
     },
     info:{
         information:[45,87],
         getInfo:function(){
             console.log(this); // { information: [ 45, 87 ], getInfo: [Function: getInfo] } 
         }
     }
 };
//prod1.getPrice(); // 100
//prod1.info.getInfo();
//prod1.getName(); // Intel

const prod2 = {
    name: "AMD",
    price: 50,
    getPrice,
};

 prod2.getName = prod1.getName;
//prod2.getPrice(); //50 the same function? but in different object return their value

// prod2.getName(); // "AMD"

let str = "Hello, world!";
const reversStr = str
.split('')
.reverse()
.join('');
//console.log(reversStr); // !dlrow ,olleH

const prod3 = {
    name: "AHJPOUT",
    price: 780,
    //getPrice,
    //getName,
};

getPrice.call(prod3, '*'); // *780
//prod3.getName().getPrice(); //AHJPOUT, 780

//// Arrow function

const plus = (x = 0, y = 0) => x + y;
const plusRes = plus();
console.log(plusRes); //3

//function plusFoo(x, y){
//  return x + y;
//}

const withoutArgs = () => console.log('tommorow');
withoutArgs(); // tommorow
const singleArg = (x = 8) => x * 2;
console.log(singleArg()); //16
const moreAction = (a, b) => {
    a *=2;
    b *=3;
    return a + b; //16
};
console.log(moreAction(4,4)); //20







