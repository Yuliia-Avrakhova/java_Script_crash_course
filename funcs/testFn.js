const testConfig = {
    module: 'users',
    unitType: 'unit_test',
    e2eType: 'e2e-tests',
    json: '.json',
    xml: '.xml'
};
function triggerTests(type, format) {
    console.log('Output is in ' + format + ' format');
   
    if (type === 'e2e-tests') {
      console.log('e2e tests are running...');
    } else {
      console.log('unit tests are running...');
    }
}
  
triggerTests(testConfig.e2eType, testConfig.xml); //Output is in .xml format  // e2e tests are running...
//triggerTests(testConfig.unitType,testConfig.json ); //Output is in .json format // unit tests are running...


function print(str){
  console.log(str);
}
  function TriggerTests1(type, format, print) {
    print("Output is in " + format + " format");

    if (type === "e2e-tests") {
      print("e2e tests are running...");
    } else {
      print("unit tests are running...");
    }
    function print(str){
      console.log(str);
    }
  }
  TriggerTests1(testConfig.unitType, testConfig.json, print); //Output is in .json format //unit tests are running...
  //TriggerTests1(testConfig.e2eType, testConfig.xml); //Output is in .xml format  //e2e tests are running...