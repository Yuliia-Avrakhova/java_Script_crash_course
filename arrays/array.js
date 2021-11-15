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

console.log(mixArray2); //// [ 1, 'abc', 'Christmas', { n: 1 }, [ 1, 2, 3 ], 23 ] + 1000, { k: 34 }, 'i like New Year']

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


/// Home work

// add next numbers to the 3, 4, 5, 6
const nums = [1, 2];
nums.push(3);
nums.push(4);
nums.push(5);
nums.push(6);
console.log(nums); //[ 1, 2, 3, 4, 5, 6 ]
// add new user Dmytro and his age is 18
const users = [
  {
    name: "Borys",
    age: 101
  }
];

users.push({ name: "Dmytro", age: 18 });
console.log(users); //[ { name: 'Borys', age: 101 }, { name: 'Dmytro', age: 18 } ]

// remove first 2 elements
const extraFirstNums = [101, 100, 1, 2, 3, 4];
extraFirstNums.shift();
extraFirstNums.shift();
console.log(extraFirstNums); // [ 1, 2, 3, 4 ]

//  remove last 2 elements
const extraLastNums = [1, 2, 3, 4, 100, 101];
extraLastNums.pop();
extraLastNums.pop();
console.log(extraLastNums); // [ 1, 2, 3, 4 ]

// add 2 nums 0 and 1 at the start of array
const extraFirstElements = [2, 3, 4];
extraFirstElements.unshift(0, 1);
console.log(extraFirstElements); // [ 0, 1, 2, 3, 4 ]

// swap elements, that have indexes 0 and 3
const sortedArray = [4, 2, 3, 1];
function swap(arr, a, s) {
  [arr[a], arr[s]] = [arr[s], arr[a]];
}
swap(sortedArray, 0, 3);
console.log(sortedArray); // [ 1, 2, 3, 4 ]