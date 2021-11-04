let age = 27;
let permission_to_drinking_alcohol = (age >=18) ? "Yes, you are allowed" : "No, you aren't allowed";
console.log(permission_to_drinking_alcohol);//Yes, you are allowed

let age1 = 17;
let permission_to_drinking_alcohol1 = (age1 >=18) ? "Yes, you are allowed" : "No, you aren't allowed";
console.log(permission_to_drinking_alcohol1);//No, you aren't allowed

let apartments = 500;
let plan_for_sale_apartment = (apartments > 100) ? "Plan is complited" : "Plan is failed";
console.log("Congrat's!" + plan_for_sale_apartment);//Plan is complited

let apartments1 = 99;
let plan_for_sale_apartment1 = (apartments1 >= 100) ? "Plan is complited" : "Plan is failed"
console.log("Sorry!" + plan_for_sale_apartment1);//Plan is failed

let apartments2 = 100;
let plan_for_sale_apartment2 = (apartments2 >= 100) ? "Plan is complited" : "Plan is failed"
console.log("Congrat's!" +  plan_for_sale_apartment2);//Plan is complited

// Operator &&
let age3 = 27;
let weight = 50;
let permission_to_drinking_alcohol3 = (age3 >=18 && weight >=50) ? "Yes, you are allowed" : "No, you aren't allowed";
console.log(permission_to_drinking_alcohol3);//Yes, you are allowed

let age4 = 27;
let weight1 = 49;
let permission_to_drinking_alcohol4 = (age4 >=18 && weight1 >=50) ? "Yes, you are allowed" : "No, you aren't allowed";
console.log(permission_to_drinking_alcohol4);//No, you aren't allowed

// Operator ||

let age5 = 3;
let weight2 = 50;
let permission_to_drinking_alcohol5 = (age5 >=18 || weight2 >=50) ? "Yes, you are allowed" : "No, you aren't allowed";
console.log(permission_to_drinking_alcohol5); //Yes, you are allowed

 // Operator || with !=
let age6 = 3;
let weight3 = 50;
let permission_to_drinking_alcohol6 = (age6 >=18 || weight3 !=50) ? "Yes, you are allowed" : "No, you aren't allowed";
console.log(permission_to_drinking_alcohol6); // No, you aren't allowed








