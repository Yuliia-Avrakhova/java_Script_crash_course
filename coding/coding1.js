
const config = {
    module: 'HeratBeat',
    counter: 0,
    testType: 'apiTests',
};
function checkHeartBeat (configobj = {}){
        return configobj.module;
}
console.log(checkHeartBeat());

// its the same situation
function checkHeartBeat (configobj){
    if (configobj){
        return configobj.module;
    }
    return 'Module not found'
}
console.log(checkHeartBeat());

function extendConfig (key, value, obj = {}) {
    obj[key] = value;
    return obj;
}
extendConfig('test', 'done', config);
//console.log('with test field', config);
extendConfig('success', 'true', config);
//console.log('with test field success', config);

function printtestResult (testConfig) {
    const finalConfig = extendConfig('PASSED', true, testConfig);
    return{
        testsPasessed: finalConfig.passed,
        module: finalConfig.module,
    }
}
console.log(printtestResult(config));

const testArray = [42];
const addNewValue = function (value1, value2, arr = []) {
    arr.push(value1, value2);
    return arr;
}
console.log(addNewValue(21, 55, testArray)); 

// destructure
 const letters =  ['a', 'b', 'c', 'd'];

 function printLetter(letter){
    console.log('Letter is', letter);
}
 const [first, second, third] = letters;

  printLetter(first); // Letter is a
  printLetter(second); //Letter is b

  const config = {
    module: 'HeratBeat',
    counter: 0,
    testType: 'apiTests',
};
function runTests(testConfig){
    const {module, testType, counter} = testConfig;

    console.log('Tests with type $(testType) are triggered and module in use $(module)');
}//runTests(config);

function mergeObject(obj1, obj2) {
    return {
        ...obj,
        ...obj2,
    }
    }

 const newObj = mergeObject (config, {status: 'done'});
 console.log(newObj);