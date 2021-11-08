class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
//Method
sayGoodEvening(){
    return "Good evening! My name is " + this.name + "and i am a " + this.type;
    }
 }

 // Bird Swallow
 const Bird = new Animal("Swalow", "Bird");
 console.log(Bird.sayGoodEvening());
 // Lion
 const Lion = new Animal("Pantera", "Lion");
 console.log(Lion.sayGoodEvening());
