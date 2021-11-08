
 const cosmetics = {
    quantity: 10,
    price: "Medium",
    location: {
        country: "USA",
        state: "Texas",
        city: "Houston",
    }
};

function squareAndAddOne (quantity) {
    let result = quantity * quantity;
    result += 1;
    return result;
}
console.log(squareAndAddOne(cosmetics.quantity)); //101

// 1. Arrow function

//longer way
const square1 = (quantity) => {
    return quantity * quantity;
}
console.log(square1(cosmetics.quantity)); //100

//shorter way
const square2 = (quantity) => quantity * quantity;
console.log(square2(cosmetics.quantity)); //100


// 2. Function declaration

console.log(square(cosmetics.quantity));// 100; The difference between function  declaration and exppression is that you can see the result
function square (quantity) {            // when you call function declaration before function initialization.
    return quantity * quantity;
}
console.log(square(cosmetics.quantity)); //100

// 3. Function expression 
// console.log(square5(cosmetics.quantity)); // here we will have 'Cannot access 'square5' before initialization.'
let square5 = function(quantity) {
    return quantity * quantity;
}
console.log(square5(cosmetics.quantity)); //100

// 4. Anonymous function.
function makeDecision (makeMusic) {
    makeMusic();
}
makeDecision (function() {
    console.log("Let's play rock");
})();

// 5. Immediately invoked function
let result = (function () {
    let userName = "Yuliia";
    return userName;
})();






