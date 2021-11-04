
//Data types and variables
//primitive 
const number = 3; //number;
const MATH_PI = 3.14;//number;
const myName = "Yuliia";//string;
const v = 'v';//string;
const V = 'V';//string;
console.log(typeof myName, typeof v, typeof PI); //checking data types

let emptyVariable = null; //null;
let temp = undefined; //undefined;
let f = 0.0 //number;

var boo = true; //boolean;
console.log(typeof myName, typeof v, typeof PI, typeof emptyVariable, typeof temp, typeof boo); //checking data types

//Object
const cars = ["Audi", "Kia", "BMW"]; //array;

const car = {type:"Audi", model:"B5", color:"black"}; //object;

function myFunction() {             //function
    console.log ("Hello World!")
  };
myFunction();

// Compare operators;

const num1 = 2;
const num2 = "2";
 
console.log(num1==num2);// Returns true
console.log(num1===num2);// Returns false, as data types are different

const str = "String text";
const str2 = "String  text 2";

console.log (str==str2);// Returns false
console.log (str===str2);// Returns false


let result1 = 5 < 10;
console.log(result1);

let result2 = 5 > 10;
console.log(result2);

let result3 = 3 <= 10;
console.log(result3);

let result4 = 3 >= 10;
console.log(result4);

let result5 = 3 != 10;
console.log(result5);

// appropriation operators
let t1 = 5;
t1 +=5;
console.log(t1);

let t2 = 5;
t2 -=5;
console.log(t2);

let t3 = 5;
t3 *=5;
console.log(t3);

let t4 = 5;
t4 /=5;
console.log(t4);
 
let t5 = 5;
t5 %=5;
console.log(t5);

let t6 = 5;
t6 **=5;
console.log(t6);

//String operators 
let userName = "Yuliia";
let surName = "Avrakhova";
let fullName = userName + " " surName;
console.log(userName + " " surName);
// I can add a comment like that

/*
  I can add a comment also like that
  to have multilines comment 
*/
//