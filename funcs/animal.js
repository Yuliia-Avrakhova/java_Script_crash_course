class Animal {
    constructor(name, type, sound){
        this.name = name;
        this.type = type;
        this.sound = sound;
    }
//Method

sayGoodEvening(){
    return "Good evening! My name is " + this.name + " " + "and i am a " + this.type + "." + " " + "I can say:" + " " + this.sound;
    }
 }

 // Bird, Swallow
 const Bird = new Animal("Swalow", "Bird","Hola amigo!");
 console.log(Bird.sayGoodEvening());  // Good evening! My name is Swalow and i am a Bird. I can say: Hola amigo!
 // Lion, White
 const Lion = new Animal("White", "Lion", "Buenas noches! ");
 console.log(Lion.sayGoodEvening()); // Good evening! My name is White and i am a Lion. I can say: Buenas noches!
