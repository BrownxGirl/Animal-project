class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return this.name + " eats";
  }
}

class Dog extends Animal {
  sound() {
    return "Dog" + " barks";
  }
}

class Cat extends Animal {
  sound() {
    return "Cat" + " meows";
  }
}

class Home {
  adoptPet(animal) {
    if (adoptedPet.length == 0) {
      adoptedPet.push(animal);
    } else {
      for (let i = 0; i < adoptedPet.length; i++) {
        if (animal == adoptedPet[i]) {
          return console.log("already taken");
        }
      }
      adoptedPet.push(animal);
    }
  }

  makeAllSounds() {
    for (let i = 0; i < adoptedPet.length; i++) {
      console.log(adoptedPet[i].sound());
    }
  }
}
 
let adoptedPet = [];
var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();

home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat);
home.makeAllSounds();

home.adoptPet(dog2);
home.makeAllSounds();
