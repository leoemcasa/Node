// Use the class keyword and write a constructor to create the Vegetable class.
// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.
// class SpaceShuttle {
//     constructor(targetPlanet) {
//       this.targetPlanet = targetPlanet;
//     }
//     takeOff() {
//       console.log("To " + this.targetPlanet + "!");
//     }
//   }
//   const zeus = new SpaceShuttle('Jupiter');
//   // prints To Jupiter! in console
//   zeus.takeOff();

class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'