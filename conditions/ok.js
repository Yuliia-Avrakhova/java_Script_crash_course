// using  'not' and 'or'
const res2 = radius !== 0 || radius < 1000
	? MATH_PI * (2 * r)
	: MATH_PI * (r * r);
      
console.log("result 2 ", res2);