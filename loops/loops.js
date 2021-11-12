// While loop
let num = 0;
while (num < 5) {
    num++;
}
console.log(num);

const nums = [10, 20, 30, 40, 50, 60];
let n = 0;
let sum = 0;
 
// with the loop we will find a sum of numbers in the array
while (n < nums.length) {
  sum = sum + nums[n];
  n++;
}
console.log('sum of nums items is ', sum); // 210

// Do while loop
let num1 = 0;
do{
    console.log(num1);
    num1++;
} while (num1 < 5);


// Task 5 - find sum of all number in array using 'while' loop
//const array = [10, 20, 30, 40, 50, 60];
function sumNums (array){
let n = 0;
let sum = 0;
while (n < array.length){
    sum += array[n];
    n++
} return sum;
}
console.log(sumNums(array));

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
let sentence = '';
let n = 0;
 
// with the loop we will find a sum of numbers in the array
while (n < words.length) {
  sentence += words[n] + ' ';
  n++;
}
console.log(sentence);


// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
// const strArr = ['error01', 'in a galaxy', 'start-error', far far', 'away', '0994-error']

const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error'];

function filterArrayWithStrings(array) {
    let expectedWords = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length>4 && !array[i].includes('error')) {
            expectedWords.push(array[i])
        }
    }
    return expectedWords;
}
console.log(filterArrayWithStrings(strArr));

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5
function factorial(n) {
    let res = 1;
    let i = 1;
    while(i<=n){
        res *= i;
        i++;
    }
    return res;
}
console.log(factorial(5));

const nums = [10, 20, 30, 40, 50, 60];
let n = 0;
let sum = 0;
 
// with the loop we will find a sum of numbers in the array
while (n < nums.length) {
  sum = sum + nums[n];
  n++;
}
console.log('sum of nums items is ', sum);


// For loop

for (let c = 10; c >= 0; c--) {
    console.log(c) // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
}

let sum = 0;

for (let i = 0; i <= 10; i++) {
    console.log('i: ' + i);
    console.log('sum: ' + sum);
    sum = sum + i;
    console.log('updatedSum: ' + sum);
    console.log('--------------- ');
}
console.log('sum of nums from 0 to 10 is ', sum); //55    

const nums = [1, 2, 3, 4, 5, 6];
let sum1 = 0;

// in the loop we will find a sum of nums array items
for (let i = 0; i < nums.length; i++) {
    sum1 = sum1 + nums[i];
}
console.log('sum of nums items is ', sum1); //21


const arr = [10, 20, 30, 40, 50];
let summ = 0;

for (h = 0; h < arr.length; h++) {
    summ = summ + arr[h];
}
console.log('Summ of array items is: ' + summ); // 150


const words = ['The', 'World', 'is', 'mine'];
let sentence = '';

// in the loop we will find a sum of nums array items
for (let i = 0; i < words.length; i++) {
    sentence += words[i] + ' ';
}

console.log(sentence); // The World is mine

const words1 = ['mine', 'is', 'World', 'The'];
let sentence1 = ' ';

for (f = words1.length - 1; f >= 0; f--) {
    sentence1 += words1[f] + ' ';
}
console.log(sentence1); // The World is mine

for (let index in words) {
    console.log(words[index]);
}

// For...in

for (let index in words) {
    console.log(words[index]);
}

const person = {
    name: 'Yuliia',
    sex: 'female',
    age: '18',
};
let personInformation = '';
const result = [];

for (let key in person) {
    personeInformation += key + '; ';

    console.log(personeInformation); // name; sex; age;

    // in the loop we will find a sum of nums array items
    for (let key in person) {
        console.log('person key', key); //person key name , persone key sex, persone key age
        personInformation += person[key] + '; ';
    }
    console.log(personInformation); // Yuliia; female; 18;  
}

const words1 = ['mine', 'is', 'World', 'The'];
let sentence1 = ' ';

for (f = words1.length - 1; f >= 0; f--) {
    sentence1 += words1[f] + ' ';
}
console.log(sentence1); // The World is mine

// Task 1 - find sum of all number in 2 arrays
// const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
// const arrayNums2 = [90,101,3,1,69,11,10,111] // 396
// 343 + 396

const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
const arrayNums2 = [90,101,3,1,69,11,10,111] // 396

function sumNumsInArrays(array1, array2) {
    return  sumInArrays(array1) + sumInArrays(array2)
}
function sumInArrays(array){
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}
console.log(sumNumsInArrays(arrayNums1,arrayNums2));

// Task 2 - Using a 'for' loop print all even
// numbers up to and including n, as a comma separated string.
// Don’t include 0
// const n = 20;
// Example output:
// "2, 4, 6, 8, 10, 12, 14, 16, 18, 20"

const n = 20;
function printAllEvenNumbers(n)
 {
    let evenNumb = [];
    for (let i = 2; i <= n; i++){
        if(i % 2 === 0){
            evenNumb.push(i);
        }
    }
    return evenNumb.join(', ');
}
console.log(printAllEvenNumbers(n));

// Task 3 - Using a 'for' loop output the elements in reverse order
// const arr = [
//   43, "what", 9, true, "cannot", false, "be", 3, true
// ];
const arr = [43, "what", 9, true, "cannot", false, "be", 3, true ];

function reverseArrayItems(array) {
    let sent = ' ';
    for (a = arr.length - 1; a >= 0; a--) {
        sent += arr[a] + ' ';
    }
    return sent;
}
console.log(reverseArrayItems(arr));

// Task 4 - Add up each element in the same position and
// create a new array containing the sum of each pair.
// Assume both arrays are of the same length.
// let array1   = [4, 6, 7];
// let array2  = [8, 1, 9];
// Example output:
// [12, 7, 16]
let array1 = [4, 6, 7];
let array2 = [8, 1, 9];
function sumElementSamePosition (array1, array2){
    let sumArr = [];
    for (let i = 0; i < array1.length; i++){
        sumArr.push(array1[i] + array2[i])
    }
    return sumArr;
}
console.log(sumElementSamePosition(array1, array2));

const data = [
    { user: 'John' },
    { user: 'Tom' },
    { user: 'Petr' },
   ];
    
   // use data
   function greeting(userName) {
     return "Hello, " + userName + "!";
   }
    
   for (let i = 0; i < data.length; i++) {
     console.log(greeting(data[i].user));
   }

   const song = {
    1: "Venom, (I got that) adrenaline momentum",
    2: "And I'm not knowin' when I'm",
    3: "Ever gonna slow up and I'm",
    4: "Ready to snap any moment I'm",
    5: "Thinkin' it's time to go get 'em",
    6: "They ain't gonna know what hit 'em",
    7: "(W-W-When they get bit with the—)",
    8: "Venom, (I got that) adrenaline momentum",
    9: "And I'm not knowin' when I'm",
    10: "Ever gonna slow up and I'm",
    11: "Ready to snap any moment I'm",
    12: "Thinkin' it's time to go get 'em",
    13: "They ain't gonna know what hit 'em",
   };
    
   let songText = '';
 
   for (let key in song) {
     songText += song[key];
     console.log(song[key]);
   }
