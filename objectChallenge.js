// https://www.learnacademy.org/current-days/764

// STORY 1

// Create a function that creates an object w/car properties
function createCar(modelYear, make, color) {
let Car = {
  modelYear: modelYear,
  make: make,
  color: color,
  carProperties: function() {return "This is a " + this.color + " " + this.modelYear + " " + this.make + ".";}
};
return Car //saving the object Car
}

var Ford = createCar(1970, "Ford", "green");
var Chevy = createCar(1999, "Chevy", "green")
Chevy.carProperties(); // -> Returns "This is a green 1999 Chevy"

// STORY 2

//The car can accelerate, brake, and tell you its speed.
let Car1 = {
  modelYear: 1970,
  make: "Ford",
  color: "black",
  speed: 0,
  getSpeed: function() {
    console.log(this.speed);
  },
  accelerate: function() {
    this.speed += 10;
  },
  decelerate: function() {
    this.speed -= 7;
    if (this.speed <= 0) {
      this.speed = 0;
    }
  },
};
Car1.decelerate()


// Story 3

// Create Car Object with while loop
var CarSpeed = {
starSpeed: 0,
accelerate:  function() {while(this.starSpeed < 70) {
    this.starSpeed = this.starSpeed += 5;
    console.log(this.starSpeed);
    }
  },
endSpeed: 70,
decelerate:  function() {while(this.endSpeed > 0) {
    this.endSpeed = this.endSpeed -= 5;
    console.log(this.endSpeed);
    }
  }
}

//While Loops outside the Objects calling on the Objects

function speedUp(Car1) {
  while(Car1.speed < 70) {
    Car1.accelerate();
  }
}
speedUp(Car1);

function speedDown(Car1){
  while(Car1.speed > 0) {
    Car1.decelerate();
  }
}
