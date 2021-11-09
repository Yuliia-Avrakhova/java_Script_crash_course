const Motorcycle = {
    company: "Harley-Davidson",
    model: "Dyna",
    year: 2020,
};

function extendObject(obj, field, value) {
    const newObj = Object.assign({}, obj);
    newObj[field] = value;

    return newObj;
}

function extendExilstingObject(field, value) { // Don`t use, cause this method changes main object
   Motorcycle [field] = value;
}

const NewMotorcycle = extendObject(Motorcycle,"engineCapacity","2.0");

extendExilstingObject("Сoncurrent", "Indian"); // Don`t use, cause this method changes main object

console.log("Motorcycle object:", Motorcycle);  //Motorcycle object: { company: 'Harley-Davidson', model: 'Dyna', year: 2020 }
console.log("NewMotorcycle object:", NewMotorcycle); //Motorcycle object: { company: 'Harley-Davidson', model: 'Dyna', year: 2020 } + engineCapacity: '2.0'.