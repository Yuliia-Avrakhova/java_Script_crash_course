
// Task 1
const arrayNums = [7,101,3,1,9,11,100,111]

function sortArray(array) {
    arrayNums.sort(
        (a, b) => {
      if (a < b) {
        return -1;
} 
  });
}

sortArray(arrayNums);
console.log(arrayNums);  [1, 3, 7, 9, 11, 100, 101, 111]

function sortArray(array){
    arrayNums.sort(
        (curr, next) => {
            if (curr > next) {
                return -1;
} else {
      return "wrong number";
    }
  });
}
sortArray(arrayNums);
console.log(arrayNums); // [111, 101, 100, 11, 9,   7,   3,  1]

const nums = [1, 2, 3, 4, 5, 6 ];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
}
console.log('Sum of nums items is ', sum);

// in the loop we will find a sum of nums array items, 
// the same result as in for loop
const nums7 = [1, 2, 3, 4, 5, 6 ];
let sum7 =0;

nums.forEach((num7, index) => {
    sum7 += num7;
})
console.log('Sum of nums items is ', sum7); // Sum of nums items is  21
/*
// Task 2 - filter an array of strings and keep only
//a string, that doesn't contain the word 'test'
const stringsArray = [ 'one-test', 'cat', 'parrot', 'banana', 'test-dog', 'dog'];
 
function filterStringsArray(array) {
    let expectedWords = [];
    for (let i = 0; i < array.length; i++) {
        if (!array[i].includes('test')){
            expectedWords.push(array[i]);
        }
    } 
    return expectedWords;
}
console.log(filterStringsArray(stringsArray));
//OR
    const expectedWords = stringsArray.filter((str) => !str.includes('test'));
console.log(expectedWords);


// Map method

const nums = [1, 2, 3, 4, 5, 6 ];
	
// in the loop we will increase every element
const updatedNums = nums.map(function(num, index) {
    return num + 10;
});

console.log('Updated nums array ', updatedNums); //  [ 11, 12, 13, 14, 15, 16 ]
console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]

const updatedNums1 = nums.map(num => num + 10);
console.log('updated nums array ', updatedNums1); // [ 11, 12, 13, 14, 15, 16 ]

const nums = [-1, 0, 1, 2, 3, 4, 5, 6 ];
const increaseNum = (num, index) => {
    if (num <= 0) {
        return 10;
      }
     
      return num + 10;
    }
     
    // in the loop we will increase every element
    const updateNums = nums.map(increaseNum);
     
    console.log('updated nums array ', updateNums); // 10, 10, 11, 12,  13, 14, 15, 16
    
    const nums = [1, 2, 3, 4, 3, 6];
 
    // filter numbers equal 3
    const filteredNums = nums.filter(function(num) {
      return num !== 3;
    });
     
    console.log('filtered nums array ', filteredNums); //[ 1, 2, 4, 6 ]
const nums = [1, 2, 3, 4, 3, 6];

//Filter methods
// filter numbers equal 3
const filteredNums = nums.filter((num) => num !== 3);
 
console.log('filtered nums array ', filteredNums);

const items = [
    { a: 1, b: 3 },
    { a: 3, b: 3 },
    { a: 6, b: 3 },
    { a: 10, b: 10 },
    { a: 41, b: 1 },
    { a: 0, b: 4 }
  ];
  	
// filter objects and keep only, if a is >= 3
  const filtered = items.filter((item) => item.a >= 3);
  console.log('Filtered array ', filtered);  //  [ { a: 3, b: 3 }, { a: 6, b: 3 }, { a: 10, b: 10 }, { a: 41, b: 1 } ]

 // Reduce method
const nums = [1, 2, 3, 4, 3, 6];

// find sum
const sum = nums.reduce(
    (acc, current) => acc += current, 0
);
console.log('Sum nums in array: ', sum); // 19

// Task 3 - find sum of numbers in array using .reduce()
 const numsArray = [ 1, 3, 5, 10, 19, 100, 200, 33, ];

 const sum = numsArray.reduce((accumulator, currentValue)=>{
     return accumulator + currentValue;
 }, 0);

// filter objects and keep only, if a is >= 3 
// and add new field sum = a + b

// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
 const arrayItems = [
 { a: 1, b: 3 },
 { a: 3, b: 3 },
 { a: 6, b: 3 },
 { a: 10, b: 10 },
 { a: 41, b: 1 },
 { a: 0, b: 4 }];
 
  const filtered = arrayItems.reduce((acc, item) => {
    if (item.a > 5) {
      acc.push({
        a: item.a,
        b: item.b,
        sum: item.a + item.b,
      })
    }
    return acc;
  }, []);
   
  console.log('filtered array ', filtered);

// Task 5 - merge arrays and remove duplicates
 let arNum1 = [1, 2, 3, 4, 5, 6];
 let arNum2 = [15, 6, 3, 20, 11];
 let array3 = [];

for(let i=0;i<arNum1.length;i++){
  if(array3.indexOf(arNum1[i]) == -1)
     array3.push(arNum1[i])
}

for(let i=0;i<arNum2.length;i++){
  if(array3.indexOf(arNum2[i]) == -1)
     array3.push(arNum2[i])
}
console.log(array3);

// Sort method

const nums = [6, 10, 11, 1, 2, 3, 4];
 
// sort nums
const sortNum = nums.sort(
    (a, b) => a - b
);
console.log('Sum nums in array ', sortNum); // [1, 2, 3, 4, 6, 10, 11];

// Join method

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
	
// join words
const sentence = words.join(' ');
console.log('Joined words - ', sentence);  //  May the Force be with you

// Incledes method
 	
const array1 = [1, 2, 3];	

console.log(array1.includes(2)); // output: true

const array2 = ['cat', 'dog', 'bat'];	

console.log(array2.includes('lion')); // output: false

// indexOf method
	
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // 1
console.log(beasts.indexOf('tiger')); //-1

// Slice method

const nums0 = [6, 10, 11, 1, 2, 3, 4];

// slice nums from index 0 to index 3 (3 is not included)
const sliceNums = nums0.slice(0, 3);
console.log('Part of array ', sliceNums); //Part of array  [ 6, 10, 11 ]

//Splice method

	
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1,0, 'Feb');
	
// inserts at index 1
console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'June' ]



