//Data types and variables
//primitive 

const number = 3; //number;
const MATH_PI = 3.14;//number;
const myName = "Yuliia";//string;
const v = 'v';//string;
const V = 'V';//string;

console.log(typeof number, typeof MATH_PI,typeof myName, typeof v, typeof V); //checking data types

let emptyVariable = null; //object;
let temp; //undefined;
let f = 0.0 //number;
let g = "g"; // string;

var boo = true; //boolean;
console.log(typeof emptyVariable, typeof temp, typeof f, typeof g, typeof boo,); //checking data types

//Object
const cars = ["Audi", "Kia", "BMW"]; //array;

const car = {type:"Audi", model:"B5", color:"black"}; //object;

function myFunction() {     //function
    console.log ("Hello World!")
  };
myFunction(); //"Hello World!"

//Operators
// Assignment
let h = 10;
console.log(h);//10

// Addition 
let a = 6;
let n = 8;
let z = a + n;
console.log(z);//14

// Multiplying
let a1 = 6;
let n1 = 8;
let z1 = a * n;
console.log(z1);//48

// Compare operators;

const num1 = 2;
const num2 = "2";
 
console.log(num1==num2);// Returns true
console.log(num1===num2);// Returns false, as data types are different

const str = "String text";
const str2 = "String text 2";

console.log (str==str2);// Returns false
console.log (str===str2);// Returns false

const str3 = "String text";
const str4 = "String text";

console.log (str3==str4);// Returns true
console.log (str3===str4);// Returns true

let result1 = 5 < 10;//true
console.log(result1);

let result2 = 5 > 10;//false
console.log(result2);

let result3 = 3 <= 10;//true
console.log(result3);

let result4 = 3 >= 10;//false
console.log(result4);
let result5 = 3 != 10;//true
console.log(result5);

let result6 = 10 != 10;//false
console.log(result6);

// Appropriation operators
let t1 = 5;
t1 +=5;
console.log(t1);//10

let t2 = 5;
t2 -=5;
console.log(t2);//0

let t3 = 5;
t3 *=5;
console.log(t3);//25

let t4 = 5;
t4 /=5;
console.log(t4);//1
 
let t5 = 5;
t5 %=5;
console.log(t5);//0

let t6 = 5;
t6 **=5;
console.log(t6); //3125

// String operators 
let userName = "Yuliia";
let secondName = "Avrakhova";
let fullName = userName + " " + secondName;
console.log(fullName); // Yuliia Avrakhova

let userName1 = "Yuliia";
let secondName1 = 1;
let fullName1 = userName1 + " " + secondName1; 
console.log(fullName1); // Yuliia 1

// comment 

/*
multilines comment 
*/
