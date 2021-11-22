class Doctor {
    constructor(name, age, gender, experience) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.experience = experience;

    }
    typeOfActivity() { return ''; }
     toString() {
        return Object.getPrototypeOf(Doctor);
    }
}

class Terapist extends Doctor {
    constructor(name, age, gender, experience) {
        super(name, age, gender, experience);
    }
    typeOfActivity() {
        return (' Consultation.');
    }
}

class Surgeon extends Doctor {
    constructor(name, age, gender, experience) {
        super(name, age, gender, experience);
    }
    typeOfActivity() {
        return ' Opearation.';
    }

}

class Forensic_Scientist extends Doctor {
    constructor(name, age, gender, experience) {
        super(name, age, gender, experience);
    }
    typeOfActivity() {
        return ' Autopsy. It`s doctor, but he doesn`t treat anyone. ';
    }
    action () {
        return ' Exhumation';
    }

}

const Victor = new Terapist('Victor', 27, 'male', 2);
console.log(Victor.typeOfActivity()); // Consultation.
console.log(Victor.age) // 27

const Oleksandr = new Surgeon('Oleksandr', 56, 'male', 30);
console.log(Oleksandr.typeOfActivity()); // Opearation.

const Yuliia = new Forensic_Scientist('Yuliia', 28, 'female', 4);
console.log(Yuliia.typeOfActivity()); //  Autopsy.
console.log(Yuliia.experience); // 4
console.log(Yuliia.action()); // Exhumation

Yuliia.university = 'LNMU'; // adding new field 
console.log(Yuliia); Forensic_Scientist //{ name: 'Yuliia', age: 28, gender: 'female', experience: 4, university: 'LNMU'}

