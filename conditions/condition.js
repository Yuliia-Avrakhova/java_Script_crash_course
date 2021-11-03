// I can add comment like that

//const myVar = "test";

/*I can add a comment also like that 
to have multilines comment

*/
//const myComment = "multiline comment";

/*Code down below is function that should find a sum of 2 elements
*/
//const SomeSum = (a, b) => a + b;

// To print a result we can use 
/*const a = 10;
const b = 30;
const someSum = a + b;

console.log (a + b) ;

console.log ("sum of a and b is equal to", a + b);
// also sum variable can be printed
console.log("sum of a and b is equal to", sum);

// info
console.info("I can print some information");
// error
console.error("I can inform about an error");


//Assignment operators
const MATH_PI = 3.14;
const radius = 10;
const result = MATH_PI * radius * radius;

//shorter way to change a value;
let result = 10 * 10;
result *= MATH_PI;

// decrease a value
 const a = 10;
 const b = 20;
 let c = 40;

c = c - a;
c -= a;

c = c + a ;
c += a;

	
// strings operations
let text1 = "John";
let text2 = "Joee";
let text3 = text1 + " " + text2;
console.log(userName === "Steven");

// numbers comparison
console.log(radius > 10);
console.log(radius >= 10);
console.log(radius < 100);
console.log(radius !== 0);
*/

const MATH_PI = 3.14;
const radius = 10;
const formula = "circumference";
 // ternary
 const result = formula === "circumference"
 ? MATH_PI * (2 * radius)
 : MATH_PI * (radius * radius);


 //Logical operators

 const MATH_PI = 3.14;
const r = 10;
const userName = "Robert";
 
 
console.log(userName !== "Steven");
 
// usind 'and'
const res = MATH_PI === 3.14 && radius >= 10
	? MATH_PI * (2 * r)
	: MATH_PI * (r * r);
      
console.log("result ", res);
 
// using  'not' and 'or'
const res2 = radius !== 0 || radius < 1000
	? MATH_PI * (2 * r)
	: MATH_PI * (r * r);
      
console.log("result 2 ", res2);


const a = 10;
const b = 100;
const c = 3;
// example with if
if (a === 10) {
   console.log("a is equal 10");
}
// example with if..else
if (b > 1) {
   console.log("b is bigger than 1");
} else {
   console.log("b is smaller than 1");
}
 
// example with else...if
if (c > 1) {
   console.log("c is bigger than 1");
} else if (c == 10) {
   console.log("c is equal 10");
} else {
   console.log("c is smaller than 1");
}

 


	
const day = "10";
 
switch (day) {
  case "10": {
      console.log("It is true");
  } 
  break;
    
  case "11": {
      console.log("It is true");
  } 
  break;
    
  default: {
      console.log("It is true");
  } 
}   