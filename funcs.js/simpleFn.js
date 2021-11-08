const Cleopatra ={
    yearOfBirth: 69,
    sex: "female",
    position: "imperatrice",
};

function extendObject(object, field, value) {
    const newObj = Object.assign({}, object);
    newObj[field] = value;

    return newObj;
}

function extendExistingObject(field, value) {
    Cleopatra [field] = value ;
}
extendExistingObject ("egiptianGirl", "Angelina Jolie");

const newCleopatra = extendObject(Cleopatra);

console.log("Cleopatra object: ", Cleopatra);
console.log("newCleopatra: " , newCleopatra);