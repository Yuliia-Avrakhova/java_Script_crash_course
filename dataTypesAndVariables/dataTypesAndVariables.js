	
var one = 1;
var ONE = 1;
 
var $second = 2;
var text = "text";
 
var centerX = 0.0;
var sum = one + $second;
var some_function = function() { console.log("Hello world!") };
var isTrue = true;

const one = 1;
const ONE = 1;
 
let $second = 2;
let text = "text"; // can be overwritten
 
text = "new text";
 
// we will get the error -
// Uncaught TypeError: Assignment to constant variable
one = 2;
 
const centerX = 0.0;
const sum = one + $second;
const some_function = function() { console.log("Hello world!") };
const isTrue = true;




const num = 1;
const str = "Some text";
 
typeof(num)               	    // Returns “number”
 
/*"John".constructor              // Returns function String()  {[native code]}
(num).constructor               // Returns function Number()  {[native code]}
false.constructor               // Returns function Boolean() {[native code]}
[1,2,3,4].constructor           // Returns function Array()   {[native code]}
{ name:"John",age:34 }.constructor  // Returns function Object()  {[native code]}
new Date().constructor         // Returns function Date()    {[native code]}
function (){}constructor       // Returns function Function(){[native code]}
*/

const num = 1;
const num2 = "1";
 
 
num == num2 	// Returns true
num === num2 	// Returns false, as data types are different
 
 
 
const str = "Some text";
const str2 = "Some text 2";
 
str == str2 	// Returns false
str === str2 	// Returns false


const userName = "Yuliia Avrakhova";
let age = 27;
let boo = true;
console.log (userName);
console.log(typeof userName, typeof age, typeof boo);

const one = 1;
const name= "Ivan";
let variableShouldBeApdated = null;
const a = "a";
const A = "A";
let temp = undefined;

const obj ={
   a: 10,
   name: "Test",
}
const arr =[];

function sayHello() {
    let message = "Hello " + name;
    console.log(message);
}
sayHello();

function simpleMath(a,b) {
    let result = a+b;
    console.log(result);
}
simpleMath(11,22)

function simpleMath(a,b) {
    let result = a+b;
    return result;
}
let sum = simpleMath (121, 345); 
console.log(sum);

console.log(one);
console.log("It is name variable ", userName);
