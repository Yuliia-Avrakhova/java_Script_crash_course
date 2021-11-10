const information = [
    {student: 'Yuliia'},
    {student: 'Vlada'},
    {student: 'Roman'},
];

const mark = [1, 2, 3];
//use information
function studentEstimation(student) {
    return "Good evening, " + student + "!";
}
studentEstimation(information[0].student);
studentEstimation(information[1].student);
studentEstimation(information[2].student);
console.log(studentEstimation(information[0].student));// Good evening, Yuliia!
console.log(studentEstimation(information[1].student));// Good evening, Vlada!
console.log(studentEstimation(information[2].student)); // Good evening, Roman!

// Default value of the function parameter
function extendConfig(objExt, config = {}) {
    const newObj = Object.assign({}, config, objExt);
   
    return newObj;
  }
   
  const result = extendConfig(
    { test: false, v: '1.10.02'},
    { module: 'Motorcycle'}
  );
  console.log(result); //{ module: 'Motorcycle', test: false, v: '1.10.02' }

// Default value of the function parameter + spread operator
function extendConfig(objExt, config = {}) {
    return {
      ...objExt,
      ...config,
    };
  }
  const result1 = extendConfig(
    { test: true, v: '1.10.02'},
    { module: 'Motorcycle'}
  );
  console.log(result1); // { test: true, v: '1.10.02', module: 'Motorcycle' }

  // Destructuring of the object
  const student1 = {
      userName: 'Yuliia', 
      secondName: 'Vlada',
      thirdName: 'Roman',
      mark1: 5,
  }
  const {secondName, mark1} = student1;
  console.log(secondName, mark1); // Vlada 5

  // Destructuring of the array
  	
const data = [
    'Games',
    {
      tests: 'e2e',
    }
  ] 
  const [ moduleName, extra ] = data; 
  console.log(moduleName, extra); // Games { tests: 'e2e' }

// Destructuring of an array for transfer of elements

function swap(arr,a, b) {
    // change places of array elements
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  const unsortedNums = [1, 3, 2];
   
  swap(unsortedNums, 1, 2);
   
  console.log(unsortedNums);

