/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Implicit binding implies that whatever is left of the dot is what 'this' references.
 * 2. Explicit binding explicitly states in the first parameter of the function what 'this' is referencing.  A function is created in the global scope for later use in this case.
 * 3. Window binding acts as a catch-all in the case that a function containing 'this' is called without stating what 'this' should refer to, binding it to the window by default.
 * 4. New binding allows us to create an object by utilizing a function that contains the defining properties of what the objects should have.  Ex: name, age, height, etc..
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
const sayColor = function() {
  console.log(`${this.color} is my favorite color`);
};

sayColor(); //returns undefined, as window does not have a color property.

// Principle 2

// code example for Implicit Binding
const giveBreed = function(dog) {
  dog.sayBreed = function() {
    console.log(`I am a ${this.breed}`);
  };
};

const bucky = {
  breed: "German Shepherd",
  favFood: "Lasagna",
  sound: "awwwwooooooo!"
};

giveBreed(bucky);

bucky.sayBreed();

// Principle 3

// code example for New Binding
const Dog = function(breed, favFood, sound) {
  this.breed = breed;
  this.favFood = favFood;
  this.sound = sound;
};

let labrador = new Dog("Labrador", "Pizza", "ruff");

console.log(labrador);

// Principle 4

const sayFood = function(foods1, foods2, foods3) {
  console.log(
    `I am a ${this.breed} and my favorite food is ${
      this.favFood
    }. I also like ${foods1}, ${foods2}, and ${foods3}`
  );
};
let otherFoods = ["Ice Cream", "Milk", "Chicken Livers"];
sayFood.call(labrador);
sayFood.apply(labrador, otherFoods);
// code example for Explicit Binding
