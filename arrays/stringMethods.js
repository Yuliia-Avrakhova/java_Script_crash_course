//  Concatenation of string 
const user = {
    firstName: 'Angelina',
    lastName: 'Jolie',
};
const helloStr = 'Hello, ' + user.firstName + ' ' + user.lastName + '!';
console.log(helloStr); // Hello, Angelina Jolie!

// Сoncatenation of string with another type of data
const actress = {
    firstName: 'Angelina',
    lastName: 'Jolie',
    movies: 78,
};
const info = 'As an actress ' + actress.firstName + ' ' + actress.lastName + ' starred ' + 'in ' + actress.movies + ' movies';
console.log(info); // As an actress Angelina Jolie starred in 78 movies

// Сoncatenation of string with numbers

const result = 2000 + ' line of JavaScript code';
console.log(result); // 2000 line of JavaScript code

const interestingResult = '2' * 3 / 3;
console.log(interestingResult); //77

Сoncatenation of string with another type of data
const result = "Don't do it in real life " + {};
console.log(result); // Don't do it in real life [object Object]

Template literals (Template strings)
const lines = 2000;
const result = `${lines} lines of JavaScript code`;

console.log(result); //2000 lines of JavaScript code 

const lines = 2000;
const language = 'JavaScript';

const result = `${lines} lines of ${language} code`;

console.log(result); //'2000 lines of JavaScript code'

With using of ternary operator

const lines = 2000;
const language = 'JavaScript';

const result = `${lines > 0 ? lines: 'Zero'} lines of ${language} code`;

console.log(result); // Output: '2000 lines of JavaScript code'


const yearsFromAC = 2021 ;
const god = 'Crist';

const result1 = `${yearsFromAC > 0 ? yearsFromAC: 'before'} of ${god} birth.`;
console.log(result1);

Methods:	
const myStr = 'Me awesome string';

myStr.split(' ')

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;
const char = sentence.charAt(index);

console.log('The character at index 4 is ', char);
// output: "The character at index 4 is q"


const interesting = 'Untagged template literals result in strings, which makes them useful for string interpolation.';

const index1 = 40;
const char1 = interesting.charAt(index1);

console.log('The character at index 4 is ', char1); // The character at index 4 is  i

// Method includes
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
const hasWord = sentence.includes(word); // true

console.log(`The word "${word}" ${hasWord ? 'is' : 'is not'} in the sentence`);
// output: "The word "fox" is in the sentence"

const hasCatWord = sentence.includes('cat'); // false

const text = 'Untagged template literals result in strings, which makes them useful for string interpolation.';

const word1 = 'Inna';
const includeWord = text.includes(word1);

console.log(`The word, which we finded was "${word1}".`); // The word, which we finded was "makes".
console.log(`The word: "${word1}" ${includeWord ? 'is': 'is not'} which we find. `); //The word: "Inna" is not which we find.

// Method indexOf


const beasts = 'Beasts list: ant, bison, camel, duck, bison';

console.log(beasts.indexOf('bison'));
// output: 18

console.log(beasts.indexOf('tiger'));
// output: -1

const sentence = 'AWESOME STRING';

const changed = sentence.toLowerCase();

console.log(changed);
// output: "awesome string"

const sentence = 'lotr';

const changed = sentence.toUpperCase();

console.log(changed);
// output: 'LOTR

// Method slice	
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// output: "the lazy dog."

console.log(str.slice(4, 19));
// output: "quick brown fox"

console.log(str.slice(-4));
// output: "dog."

console.log(str.slice(-9, -5));
// output: "lazy"

// Method split

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');

console.log(str);
console.log(words[3]);
// output:
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

//Method match

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// output: Array ["T", "I"]

//Method replace
const p = 'The quick brown fox jumps over the lazy dog';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey."


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret."

//Method trim
const greeting = '   Hello world!   ';

console.log(greeting);
// output: "   Hello world!   ";

console.log(greeting.trim());
// output: "Hello world!";

//Home work
//Task 1
//Tasks 1 -  convert array of strings
//from lowercase to uppercase

const str = ['some string'];

function convertToUppercase(array) {
 let x = array.map(
    function (a){
        return a.toUpperCase();
    }
 );
 return x;
}
console.log(convertToUppercase(str));

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
let someString = "should calculate 'a' letter"
function calculateLetters(string, letter) {
let reg = string.match(new RegExp(letter, 'g'));
  return reg.length;
}
console.log(calculateLetters(someString, 'a'));

// this interesting method but not for this task
function calculateLetters(string, letter) {  
    let count = {};
    string.split('').forEach(function(a) {
       count[a] ? count[a]++ : count[a] = 1;
    });
    return count;
  }
  console.log(calculateLetters(providedString));

// Task 3 - replace numbers with spaces
// in the provided string
const anotherString = 'I9like5JS'

function replaceNumbers(string) {
    return string.replace(new RegExp(/[1-9]/g, 'g'), " ");
}
console.log(replaceNumbers(anotherString)); // I like JS

const u = [11, 2, 101, 3, 4, 5, 1, 6];

function sortArray(array) {
    return array.sort(
        (a, b) =>{
            if (a < b){
                return -1;
            }
        }
    );

}
console.log(sortArray(u));

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
let starWars = ["osmos", "uterque", "water", "crop", "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
function buildStringUsingIndex(array, index) {
    let result = '';
    array.forEach((a) => {
        let currentValue = a.charAt(index) // letter or empty string (if index > string.length)
        if (currentValue === '') {
            currentValue = ' ';
        }
        result += currentValue;
    })
    return result;
}
console.log(buildStringUsingIndex(starWars, 1));

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
// let y = "anna";
// let y2 ="saippuakivikauppias";
// let y3 ="danna";

// function palindromeValidator(str) {
//     if 
// }
let g = "danna";
function palindrome(str) {
    let reg = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(reg, '');
    let leng = str.length;
    for (let i = 0; i < leng / 2; i++) {
        if (str[i] !== str[leng - 1 - i]) {
            return "The string is not palindrome";
        }
    }
    return "The string is palindrome";
}
console.log(palindrome("danna"));


