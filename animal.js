class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return this.name + " eats";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.animalType = "Dog";
  }

  sound() {
    return `${this.animalType} barks`; 
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.animalType = "Cat";
  }
  sound() {
    return `${this.animalType} meows`;
  }
}

class Home {
  constructor() {
    this.adoptedPet = [];
  }
  adoptPet(animal) {
    if (this.adoptedPet[0] == undefined) {
      this.adoptedPet.push(animal);
      return console.log("totally ok"); 
    } else {
      for (let i = 0; this.adoptedPet[i] != undefined; i++) {
        if (animal == this.adoptedPet[i]) {
          return console.log("not ok at all"); 
        }
      }
      this.adoptedPet.push(animal);
      return console.log("totally ok"); 
    }
  }

  makeAllSounds() {
    for (var i = 0; this.adoptedPet[i] != undefined; i++) {
      console.log(this.adoptedPet[i].sound());
    }
  }
}

var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();

home.makeAllSounds();

home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat);
home.makeAllSounds();
