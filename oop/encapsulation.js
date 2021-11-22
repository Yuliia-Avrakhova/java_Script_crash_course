class Person {
    setPersonDetails(name, age, gender, km) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.km = km;
    }

    getPersName() {
        return this.name;
    }
    getPersAge() {
        return this.age;
    }
    getPersGender() {
        return this.gender;
    }
    getPersKm() {
        return this.km;
    }

}
let person1 = new Person();
person1.setPersonDetails('Oksana', 37, 'female', 40);
console.log(person1.getPersName()); //'Oksana',
console.log(person1.getPersAge()); //37
console.log(person1.getPersGender()); //'female'
console.log(person1.getPersKm()); //40