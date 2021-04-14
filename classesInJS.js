//#region reference type
var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };

obj1.value = 15;

obj1 === obj2; //true
obj1 === obj3; //false
obj1.value; // 15
obj2.value; //15
obj3.value; //10
//#endregion

//#region context vs scope
function a() {
  console.log(this); //this --> window or global
}

let b = {
  c: function () {
    console.log(this); //this ---> will refer to the context
  },
};

console.log(b.c());
//#endregion

//#region instantiation / class
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name} and I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeeeeee.. I am a ${this.type}`);
  }
}

let wizard1 = new Wizard("Shelly", "Healer");
let wizard2 = new Wizard("Shankhadeep", "Master");

wizard2.play();
wizard1.introduce();
