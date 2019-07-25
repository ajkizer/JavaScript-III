/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(Attributes) {
  this.createdAt = Attributes.createdAt;
  this.name = Attributes.name;
  this.dimensions = Attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
};

function CharacterStats(Attributes) {
  this.healthPoints = Attributes.healthPoints;
  GameObject.call(this, Attributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
};

function Humanoid(Attributes) {
  this.team = Attributes.team;
  this.weapons = Attributes.weapons;
  this.language = Attributes.language;
  CharacterStats.call(this, Attributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

function Hero(Attributes) {
  Humanoid.call(this, Attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.attack = function(target) {
  let damageDone = Math.ceil(Math.random() * 7);
  target.healthPoints -= damageDone;
  console.log(
    `${this.name} used Hammer of Justice on ${
      target.name
    } for ${damageDone} damage`
  );
};

function Villain(Attributes) {
  Humanoid.call(this, Attributes);
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.attack = function(target) {
  let damageDone = Math.ceil(Math.random() * 6);
  target.healthPoints -= damageDone;
  console.log(
    `${this.name} used Decay on ${target.name} for ${damageDone} damage`
  );
};
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const deathKnight = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 3,
    height: 3
  },
  healthPoints: 25,
  name: "Arthas",
  team: "Scourge",
  weapons: ["Frostmourne"],
  language: "Common Tongue"
});

const paladin = new Hero({
  dimensions: {
    length: 3,
    width: 3,
    height: 3
  },
  healthPoints: 22,
  name: "Patrick",
  team: "Bubble Boyz",
  weapons: ["Hammer"],
  language: "Common Tongue"
});

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

const battle = function(player1, player2) {
  while (player1.healthPoints > 0 && player2.healthPoints > 0) {
    player1.attack(player2);
    if (player2.healthPoints <= 0) {
      playerWin(player1, player2);
      break;
    }

    player2.attack(player1);
    if (player1.healthPoints <= 0) {
      playerWin(player2, player1);
      break;
    }
  }
};

const playerWin = function(winner, loser) {
  console.log(`${winner.name} has defeated ${loser.name}!!!`);
  console.log(loser.destroy());
};

battle(deathKnight, paladin);
// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
