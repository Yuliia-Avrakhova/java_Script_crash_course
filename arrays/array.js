//Creating Arrays

//  empty array to modify later
let emptyArray = []; 

// array with nums
const numsArray = [1, 5, 10,15];

//array with strings
const strArray = ['New Year', 'Christmas', 'Easter'];

console.log(strArray[1]); //Christmas

//mix of different data types 
const mixArray = [1, 'a', {n:1}, [1,2,3]];

console.log(mixArray.length); //4
console.log(mixArray[1]); //a

//Creating arrays with using of class Array

// create an empty array
const nums = new Array();

//add numbers
nums.push(1);
nums.push(2);
nums.push(3);

console.log(nums); //[ 1, 2, 3 ]

const motorcycles = [];
motorcycles.push('Harley-Davidson');
motorcycles[motorcycles.length] = 'Indian';
console.log(motorcycles); // [ 'Harley-Davidson', 'Indian' ]

motorcycles.push({
    company: 'BMW',
    year: 2020,
    engineCapacity: 3,
})
console.log(motorcycles); // +   { company: 'BMW', year: 2020, engineCapacity: 3 }

motorcycles[2].year;
console.log(motorcycles[2].year); // 2020


//Array modification

const mixArray1 = [1, 'a', 'Christmas', {n:1}, [1,2,3]];

// to add a new element
mixArray1[5] = 23;
console.log(mixArray1); // [ 1, 'a', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23 ]

//to change value 
mixArray1[1] = 'abc';
console.log(mixArray1); // [ 1, 'abc', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23 ]

// delete element
delete mixArray1[1];
console.log(mixArray1); //[ 1, <1 empty item>, 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23 ]

// Methods for modification arrays
const mixArray2 = [ 1, 'abc', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23 ];

// method push()
// to add a new element
mixArray2.push(1000);
mixArray2.push({k:34});
mixArray2.push('i like New Year');

console.log(mixArray2); //// [ 1, 'abc', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23 ] + 1000, { k: 34 }, 'i like New Year'

//method pop()
const mixArray3 = [ 1, 'abc', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23, { v:5 }];

// remove last 2 elements
mixArray3.pop();
mixArray3.pop();

console.log(mixArray3);  // 23, { v:5 } are deleted

//method unshift()
const mixArray4 = [ 1, 'abc', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23, { v:5 }];

// to add new elements
mixArray4.unshift(95);
mixArray4.unshift('cool');
mixArray4.unshift({i:0});

console.log(mixArray4); // { i: 0 }, 'cool', 95 + [ 1, 'abc', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23, { v:5 }]

//method shift()
const mixArray5 = [ 1, 'abc', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23, { v:5 }];

// remove 2 first elements
mixArray5.shift();
mixArray5.shift()
console.log(mixArray5); // 1, 'abc' are deleted ['Christmas', { n: 1 }, [ 1, 2, 3 ], 23, { v:5 }]

//method concat()

const newArray1 = [1, 2, 3];
const newArray2 = [4, 5, 6];

//concat arrays
const result = newArray1.concat(newArray2);
console.log(result); // [ 1, 2, 3, 4, 5, 6 ];